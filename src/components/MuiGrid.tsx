import { Box, Typography  } from "@mui/material"
import { useState, useEffect } from 'react';
import { grey, lightBlue, lightGreen, red } from "@mui/material/colors";
import  Grid  from '@mui/material/Grid'
import { Height } from "@mui/icons-material";

export const MuiGrid = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    
    useEffect(() => {

        const  GetCurrentDisplaySize = (event: Event) => {

            setWindowSize(({width: window.innerWidth,height: window.innerHeight}))

        }

        window.addEventListener('resize', GetCurrentDisplaySize)

    },[])

   
      
    
      return (
          <>

              <Typography m={2}>Basic example of using Grid for layoyout grid (not data grid). Recall Grid uses as 12 column layout.</Typography>
              <Typography m={2}>Current browser width: {windowSize.width}, Current browser height {windowSize.height}</Typography> 
              <Grid container spacing={2}>
                  <Grid size={{xs:4, md:6}}>
                      <Box bgcolor='red'>size=xs:4, md:6</Box>
                  </Grid>
                  <Grid size={{xs:4, md:6}}>
                      <Box bgcolor='grey'>size=xs:4, md:6</Box>
                  </Grid>
                  <Grid size={{md:5, lg:6}}>
                      <Box bgcolor='lightGreen'>md:5, lg:6</Box>
                  </Grid>
                  <Grid size={{md:4, lg: 6}}>
                      <Box bgcolor='lightBlue'>md:4, lg: 6</Box>
                  </Grid>
              </Grid>
              <Typography m={2}>Current browser height: {windowSize.height}   Current browser width: {windowSize.width}</Typography>

      </>

      )
    

}