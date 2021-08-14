import { Box, Button, Container, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Condition } from '../../interfaces/condition.interface';
import { ElectronicHealthRecord } from '../../interfaces/electronic-health-record.interface';
import { findAllConditions } from '../../services/condition.service';
import { findNoLabeled, updateEhr } from '../../services/electronic-health-record.service';
import ElectronicHealthRecordShow from './ElectronicHealthRecordShow';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

interface Props {
  setIsThereNext: Function
}
function ElectronicHealthRecordForm(pros: Props){
  
  const [ehr, setEhr] = useState<ElectronicHealthRecord | undefined>();
  const [conditions, setConditions] = useState<Condition[] | undefined>();
  const [conditionCode, setConditionCode] = useState<string | undefined>();
  const [initialDate, setInitialDate] = useState<any>(new Date());
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
      pros.setIsThereNext(response ? true : false);
    }
    fetchData()
  }, [ehr])

  const submitCase = async (event: any) => {
    event.preventDefault();
    if(!conditionCode){
      toast.warn('Please, select a condition!')
      return;
    }
    await updateEhr({id: ehr?._id, conditionId: conditionCode , duration: getDurationToLabelInSeconds()})
    setInitialDate(new Date())
    setEhr(undefined);
    toast.success('Case labeled with success!')
  }

  const getDurationToLabelInSeconds = (): number => {
    let now: any = new Date();
    var diffMs = (now - initialDate); // milliseconds 
    var diffSeconds = Math.floor((diffMs / 1000) % 60);
    console.log("Seconds", diffSeconds)
    return diffSeconds;
  }


  return(
  <Container maxWidth="xl">
    <Grid container spacing={3}>
      <ElectronicHealthRecordShow description={ehr?.description}></ElectronicHealthRecordShow>
      <Grid item xs={6}>
        <form noValidate onSubmit={submitCase}>
          <Box paddingTop={8}  paddingLeft={4} paddingRight={4} >
            <Typography variant="h6" component="h6">
            Select condition:
            </Typography>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              fullWidth
              value={conditionCode}
              onChange={(event: any) => { setConditionCode(event.target.value) }}
              displayEmpty>
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
    <ToastContainer />
  </Container>)
}

export default ElectronicHealthRecordForm;