import { Stack, TextField, Typography, Grid, Box, MenuItem, Button }from '@mui/material'

import React, { useState } from 'react';

export const MuiStylingExamples = () => {


type Animals = "bird" | "dog" | "cat"| "fish" | "lion" | "";

const [multiSelectValue,setMultiSelectValue] = useState<Array<Animals>>([]);
const [multiSelectValue2,setMultiSelectValue2] = useState<Array<Animals>>([])

const selectedColor = "rgba(25,118,210,0.50)"

const handleOnMultiSelect = (event: React.ChangeEvent<HTMLInputElement>)  => {

        setMultiSelectValue(  (prevSelectValue: Array<Animals>) => {

            /* 'value' is coming across as an iterable object.  
            * As such, we use Array.from to create string array of selected values and then use 
            * a type assertion Array<Animals> to tell the compiler selectedValues is good with respect to type.
            * */
           
           const selectedValues : Array<string> = Array.from(event.target.value, item => { console.log('processing item',item);return item})
            
            console.log(`handleOnMultipleSelect previous value is ${prevSelectValue}, new value is ${event.target.value}`);
            return selectedValues as Array<Animals>

        })

    } //handleOnMultipleSelect

    
const handleOnMultiSelect2 = (event: React.ChangeEvent<HTMLInputElement>)  => {

        setMultiSelectValue2(  (prevSelectValue: Array<Animals>) => {

            /* 'value' is coming across as an iterable object.  
            * As such, we use Array.from to create string array of selected values and then use 
            * a type assertion Array<Animals> to tell the compiler selectedValues is good with respect to type.
            * */
           
           const selectedValues : Array<string> = Array.from(event.target.value, item => { console.log('processing item',item);return item})
            
            console.log(`handleOnMultipleSelect2 previous value is ${prevSelectValue}, new value is ${event.target.value}`);
            return selectedValues as Array<Animals>

        })

    } //handleOnMultipleSelect2

    



    return (

        <>

            <Grid container spacing={2} justifyContent="flex-start" sx={{border: "2px black solid"}}>
                <Grid size={2}>
                     <Box>
                
                 <TextField 
                    value={multiSelectValue}
                    label=""
                    helperText = "Multi select control"
                    select
                    onChange={handleOnMultiSelect}
                    fullWidth
                    slotProps = {{
                        select: { multiple: true }
                    }}
                >
                    <MenuItem value="bird"
                      
                    >Bird</MenuItem>

                   
                    <MenuItem value="dog" sx={{ '&.MuiMenuItem-root:hover': { color:'red'} }}
                    >Dog
                    </MenuItem>
                    
                 <MenuItem value="cat" >Cat
                  </MenuItem>
                   
                 <MenuItem value="fish" sx={{ '&.MuiMenuItem-root': { paddingLeft:'40px'} }}
                    >Fish
                    </MenuItem>
                    

                     <MenuItem value="lion">
                        Lion
                    </MenuItem>
                </TextField>
                </Box>
                </Grid>

                <Grid size={1}></Grid>
                <Grid size={5}>
                    <Typography component='span' align="left" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}> Override single instance of a Mui defualt property</Typography>
                    <Typography variant="body1" sx={{my:3 }} align="left">
                            This overrides the 'paddingLeft' property of MuiMenuItem-root slot.
                            sx=&#123;&#123; '&.MuiMenuItem-root': &#123; paddingLeft:'40px' &#125;&#125;&#125;<br />
                            The &amp; means this component &lt;MenuItem&gt; with Mui-root class.<br />
                            The default value for 'paddingLeft' is 16px.
                    </Typography>


                </Grid>

                {/* This forces the row to be complete (12) places and the next <Grid> item will start on a new row*/}
                <Grid size={4}></Grid>

             
                 
                <Grid size={2}>
                     <Box>
                
                 <TextField 
                    value={multiSelectValue2}
                    label=""
                    helperText = "Multi select control"
                    select
                    onChange={handleOnMultiSelect2}
                    fullWidth
                    slotProps = {{
                        select: { multiple: true }
                    }}
                >
                    <MenuItem value="bird"
                      
                    >Bird</MenuItem>

                   
                    <MenuItem value="dog" 
                    >Dog
                    </MenuItem>
                    
                 <MenuItem value="cat" >Cat 
                  </MenuItem>
                   
                 <MenuItem value="fish" sx={{ '&.MuiMenuItem-root:hover': { color:'red'} }}
                    >Fish
                    </MenuItem>
                    

                     <MenuItem value="lion">
                        Lion
                    </MenuItem>
                </TextField>
                </Box>
                </Grid>

                <Grid size={1}></Grid>
                <Grid size={5}>
                    <Typography component='span' align="left" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}> Override single instance of a Mui defualt property</Typography>
                    <Typography variant="body1" sx={{my:3 }} align="left">
                            This adds the 'color' red property of MuiMenuItem-root slot.<br />
                            sx=&#123;&#123; '&.MuiMenuItem-root: hover': &#123; color:'red' &#125;&#125;&#125;<br />
                            The &amp; means this component &lt;MenuItem&gt; with Mui-root class.<br />
                            The default value for 'color' on hover is inherited and is rgba(0,0,0,0.87)
                    </Typography>

                </Grid>

<Grid size={4} ></Grid>

               
                  <Grid size={2}>
                
                                    <Button color="secondary" size="large" variant="outlined"
                                     sx={{ '&.MuiButton-colorSecondary' : {color: 'green'} }} >
                                    Money!</Button>
                
                
                                </Grid>






            </Grid> {/* container */}
        
        
        
        
        
        
        
        
        </>




    )



} //MuiStylingExamples