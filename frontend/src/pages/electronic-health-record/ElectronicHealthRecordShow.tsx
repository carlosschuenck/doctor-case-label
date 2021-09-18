import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

interface Props {
  description?: string
}
function ElectronicHealthRecordShow(props: Props){
  return(<Grid item xs={6}>
    <Box paddingTop={8} paddingLeft={4} paddingRight={4}>
      <Typography variant="h6" component="h6">
        Please review this case:
      </Typography>
    </Box>
    <Box paddingTop={1} paddingLeft={4} paddingRight={4}>
      <Paper style={{padding: 8}} >
        {props?.description}
      </Paper>
    </Box>
  </Grid>)
}

export default ElectronicHealthRecordShow;