import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';


const YouAreDoneComponent = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} >
        <Grid item xs={12} >
          <Box paddingTop={8} paddingLeft={4} paddingRight={4} display="flex" justifyContent="center">
            <Typography variant="h2" component="h2" gutterBottom > You are done </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default YouAreDoneComponent;