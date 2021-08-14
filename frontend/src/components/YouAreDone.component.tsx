import React, { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { addEhr } from '../services/electronic-health-record.service';


const YouAreDoneComponent = () => {

  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} >
        <Grid item xs={12} >
          <Box paddingTop={8} paddingLeft={4} paddingRight={4} display="flex" justifyContent="center">
            <Typography variant="h2" component="h2" gutterBottom > You are done! </Typography>
          </Box>

          <Box paddingTop={2} paddingLeft={4} paddingRight={4} display="flex" justifyContent="center">
            <Typography variant="h5" component="h5" gutterBottom > Do you want to add more cases to test? </Typography>
          </Box>

          <Box paddingTop={2} paddingLeft={4} paddingRight={4}  display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              onClick={async () => {  await addEhr(); setCount(count+1); }}
              color="primary">
              Click here
            </Button>
          </Box>

          { count > 0 ? (
            <Box paddingTop={2} paddingLeft={4} paddingRight={4} display="flex" justifyContent="center">
              <Typography variant="h6" component="h6" gutterBottom > Refresh the page to label, added: {count} </Typography>
            </Box>) : 0 
          }
          
        </Grid>
      </Grid>
    </Container>
  )
}

export default YouAreDoneComponent;