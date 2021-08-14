import { AppBar, Box, Button, Container, createStyles, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Theme, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Condition } from '../../interfaces/condition.interface';
import { ElectronicHealthRecord } from '../../interfaces/electronic-health-record.interface';
import { findAllConditions } from '../../services/condition.service';
import { findNoLabeled, updateEhr } from '../../services/electronic-health-record.service';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 500,
      width: '50%',
      padding: 15
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

function ElectronicHealthRecordPage(){

  const [ehr, setEhr] = useState<ElectronicHealthRecord | undefined>();
  const [conditions, setConditions] = useState<Condition[] | undefined>();
  const [conditionCode, setConditionCode] = useState<string | undefined>();

  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      setEhr(await findNoLabeled());
      setConditions(await findAllConditions());
    }
    fetchData()
  }, [])


  const submitCase = (event: any) => {
    event.preventDefault();
    console.log(ehr)
    updateEhr({id: ehr?.id, conditionId: conditionCode})
  }

  return(
  <>
    <AppBar position="static">
      <Toolbar>
        <Box  display="flex" width='100%' justifyContent="flex-end" alignItems="center" >
          <Typography>
            Logged in as: COLOCAR O NOME |
          </Typography>
          <Button  color="inherit">Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
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
                        <MenuItem key={code} value={code}>{description}</MenuItem>
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
  </>)
}

export default ElectronicHealthRecordPage;