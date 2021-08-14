import { AppBar, Box, Button, Container, createStyles, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Theme, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Condition } from '../../interfaces/condition.interface';
import { ElectronicHealthRecord } from '../../interfaces/electronic-health-record.interface';
import { findAllConditions } from '../../services/condition.service';
import { findNoLabeled, updateEhr } from '../../services/electronic-health-record.service';
import { useHistory } from 'react-router-dom';
import { getUserName, logout } from '../../services/login.service';
import YouAreDoneComponent from '../../components/YouAreDone';


function ElectronicHealthRecordPage(){

  const history = useHistory();
  const [ehr, setEhr] = useState<ElectronicHealthRecord | undefined>();
  const [conditions, setConditions] = useState<Condition[] | undefined>();
  const [conditionCode, setConditionCode] = useState<string | undefined>();
  const [isThereNext, setIsThereNext] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setConditions(await findAllConditions());
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const response = await findNoLabeled();
      if(response && !ehr) setEhr(response);
      setIsThereNext(response ? true : false);
    }
    fetchData()
  }, [ehr])

  const submitCase = async (event: any) => {
    event.preventDefault();
    await updateEhr({id: ehr?._id, conditionId: conditionCode})
    setEhr(undefined);
  }

  const logoutAndRedirect = () => {
    logout()
    history.push('/')
  }

  return(
  <>
    <AppBar position="static">
      <Toolbar>
        <Box  display="flex" width='100%' justifyContent="flex-end" alignItems="center" >
          <Typography>
            Logged in as: {getUserName()} | 
          </Typography>
          <Button onClick={logoutAndRedirect} color="inherit">Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
{ isThereNext ? (

<Container maxWidth="xl">
<Grid container spacing={3}>
  <Grid item xs={6}>
    <Box paddingTop={8} paddingLeft={4} paddingRight={4}>
      <Typography>
        Please review this case:
      </Typography>
    </Box>
    <Box paddingTop={1} paddingLeft={4} paddingRight={4}>
      <Paper style={{padding: 8}} >
        {ehr?.description}
      </Paper>
    </Box>
  </Grid>
  <Grid item xs={6}>
    <form noValidate onSubmit={submitCase}>
      <Box paddingTop={8}  paddingLeft={4} paddingRight={4} >
        <InputLabel>Select Condition</InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          fullWidth
          onChange={(event: any) => { setConditionCode(event.target.value) }}
          displayEmpty
        >
          {conditions?.map(({ code, description}) => (
              <MenuItem key={code} value={code}>{description} ({code})</MenuItem>
          ))}
        </Select>
      </Box>
      <Box paddingTop={8} paddingLeft={4} paddingRight={4}  display="flex" justifyContent="flex-end">
        <Button
          type="submit"
          variant="contained"
          color="primary">
          Next case
        </Button>
      </Box>
    </form>
  </Grid>
</Grid>
</Container>
) : <YouAreDoneComponent />}

    
  </>)
}

export default ElectronicHealthRecordPage;