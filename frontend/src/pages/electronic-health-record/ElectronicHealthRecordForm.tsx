import { Autocomplete, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Condition } from '../../interfaces/condition.interface';
import { ElectronicHealthRecord } from '../../interfaces/electronic-health-record.interface';
import { findAllConditions } from '../../services/condition.service';
import { updateEhr } from '../../services/electronic-health-record.service';
import ElectronicHealthRecordShow from './ElectronicHealthRecordShow';

interface Props {
  findNextEhr: Function,
  enableLoading: Function,
  ehr: ElectronicHealthRecord | undefined
}

function ElectronicHealthRecordForm(pros: Props){
  
  const [conditions, setConditions] = useState<Condition[]>([]);
  const [condition, setCondition] = useState<Condition | null>(null);
  const [initialDate, setInitialDate] = useState<any>(new Date());
  
  useEffect(() => {
    async function fetchData() {
      setConditions(await findAllConditions());
    }
    fetchData()
  }, [])

  const submitCase = async (event: any) => {
    event.preventDefault();
    if(!condition){
      toast.warn('Please, select a condition!')
      return;
    }
    pros.enableLoading()
    await updateEhr({id: pros.ehr?._id, conditionId: condition.id , duration: getDurationToLabelInSeconds()})
    setInitialDate(new Date());
    toast.success('Case labeled with success!')
    await pros.findNextEhr();
  }

  const getDurationToLabelInSeconds = (): number => {
    let now: any = new Date();
    var diffMilliseconds = (now - initialDate);
    return  Math.floor((diffMilliseconds / 1000) % 60);
  }

  return(
    <Grid container spacing={3}>
      <ElectronicHealthRecordShow description={pros.ehr?.description}></ElectronicHealthRecordShow>
      <Grid item xs={6}>
        <form noValidate onSubmit={submitCase}>
          <Box paddingTop={8}  paddingLeft={4} paddingRight={4} >
            <Typography variant="h6" component="h6">
            Select condition:
            </Typography>
            <Autocomplete
              disablePortal
              fullWidth
              id="demo-simple-select-placeholder-label"
              value={condition}
              onChange={(event: any, newValue: Condition | null) => {
                setCondition(newValue)
              }}
              options={conditions}
              renderInput={(params) => <TextField {...params} />}
            />
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
    </Grid>)
}

export default ElectronicHealthRecordForm;