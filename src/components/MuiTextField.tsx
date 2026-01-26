import { Stack, TextField, Typography, InputAdornment, MenuItem, Box, Grid, ThemeProvider, Button } from '@mui/material';
import PasswordIcon from '@mui/icons-material/Password';
import styles from './MuiTextField.module.css';

import * as customThemes  from '../theme/MuiTextField'

import React, { useState } from 'react';
import { TheaterComedySharp } from '@mui/icons-material';

export const MuiTextField = () => {

    const [value, setValue] = useState<string>("");

    const selectedColor = "rgba(25,118,210,0.50)"

    type Animals = "bird" | "dog" | "cat"| "fish" | "lion" | "";
    
    const [singleSelectValue,setSingleSelectValue] = useState<Animals>("")
    const [multiSelectValue,setMultiSelectValue] = useState<Array<Animals>>([])

    //Note that from the definition of onBlur, was able to grab HTMLInputElement
    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {

        setValue((prevInputError: string) => {

            console.log("handleOnBlur element is", event);
            return event.target.value;

        })

    }


    const handleOnSingleSelect = (event: React.ChangeEvent<HTMLInputElement>)  => {

        setSingleSelectValue(  (prevSelectValue: Animals) => {

            console.log(`handleOnSingleSelect previous value is ${prevSelectValue}, new value is ${event.target.value}`);
            return event.target.value as Animals;

        })

    } //handleOnSingleSelect

 //   const handleOnMultiSelect = (event: React.ChangeEvent<HTMLInputElement>)  => {
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




    return (

        <>

            <Stack spacing={4}>

                <Typography sx={{ mb: 3, mt: 3 }}>Variants of TextField</Typography>
                <Stack direction="row" spacing={2}>

                    <TextField label="Filled" variant="filled"></TextField>
                    <TextField label="Outlined" variant="outlined"></TextField>
                    <TextField label="Standard" variant="standard"></TextField>

                </Stack>

                <Typography sx={{ mb: 3, mt: 3 }}>
                    TextField sizes - small and medium
                    <br />
                    Note the color change when a color has been assigned to a TextField
                    <br /> Asterisk denotes a required field
                </Typography>
                <Stack direction="row" spacing={2}>

                    <TextField label="Small" variant="outlined" size="small" color="secondary"></TextField>
                    <TextField label="Medium" variant="outlined" size="medium" helperText="Input helper text goes here"></TextField>
                    <TextField label="Medium" variant="outlined" size="medium" required placeholder='Required input'></TextField>

                </Stack>
                <Typography sx={{ mb: 3, mt: 3 }}>
                    The TextField can take as 'type' property any HTML5 input type.
                    <br />
                    Readonly using slotProps

                </Typography>
                <Stack direction="row" spacing={3}>

                    <TextField label="Small" variant="standard" size="small" color="secondary" type="checkbox" helperText="This is a checkbox"></TextField>
                    <TextField label="" variant="outlined" size="medium" helperText="This is a date-time local" type="datetime-local"></TextField>
                    <TextField label="Medium" variant="outlined" size="medium" required helperText="This is a password" type="password"></TextField>
                    <TextField label="Medium" variant="outlined" size="medium" required helperText="This is an email" type="email"></TextField>
                    <TextField label="" variant="outlined" size="medium" required helperText="File picker" type="file"></TextField>
                    <TextField label="Medium" variant="outlined" size="medium" required helperText="This is readonly" slotProps={{ input: { readOnly: true } }} value="Money"></TextField>

                </Stack>
                <Typography sx={{ mb: 3, mt: 3 }}>
                    Use InputAdornment tag to add characters before and after the input value.<br />
                    MUI Icons be used as well.

                </Typography>
                <Stack direction="row" spacing={3}>

                    <TextField variant="standard" size="small"
                        color="secondary"
                        label="Amount"
                        slotProps={{
                            input: { startAdornment: <InputAdornment position="start">$</InputAdornment> }
                        }}>
                    </TextField>
                    <TextField variant="standard" size="small"
                        color="primary"
                        label="Weight"
                        slotProps={{
                            input: { endAdornment: <InputAdornment position="end">kg</InputAdornment> }
                        }}>
                    </TextField>
                    <TextField variant="standard" size="small" type="password"
                        color="primary"
                        label="Password"
                        slotProps={{
                            input: { endAdornment: <InputAdornment position="end"><PasswordIcon /></InputAdornment> }
                        }}>
                    </TextField>
                </Stack>
                <Typography sx={{ mb: 3, mt: 3 }}>
                    The TextField can take as 'type' property any HTML5 input type.
                    <br />
                    Readonly using slotProps

                </Typography>
                <Stack direction="row" spacing={3}>

                    <TextField label="medium" variant="standard" size="medium" value={value}
                        color="secondary" onChange={handleOnBlur} error={value !== "money"}
                        helperText={value !== "money" ? "Input a valid string" : ""}>

                    </TextField>

                </Stack>


                <Typography sx={{my:3 }} align="left">
                    &lt;TextField&gt; can be used as a Select control.<br />
                    Below are examples of a single a multi select control and a multi-select. <Typography component="span"  sx={{color:'red'}}>Note - multi did not work...use &lt;Select&gt;</Typography><br />
                    Note the use of slotProps.select for the multi-select.  This feature allows you to essentially use props found in the &lt;Select&gt;.
                </Typography>


            <Box sx={{width: 200}}>
                <TextField 
                    value={singleSelectValue}
                    label=""
                    helperText = "Single select control"
                    select
                    onChange={handleOnSingleSelect}
                    fullWidth
                >
                    <MenuItem value="bird">Bird</MenuItem>
                    <MenuItem value="dog">Dog</MenuItem>
                    <MenuItem value="cat">Cat</MenuItem>
                    <MenuItem value="fish">Fish</MenuItem>
                </TextField>
                </Box>

<Grid container spacing={2} justifyContent="flex-start" sx={{border: "2px black solid"}}>
    <Grid size={2}>
           {/*} <Box sx={{width: 200}}>*/}
            <Box>
                
                <ThemeProvider theme={customThemes.menuAnimals}>
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
                        sx={{
                            backgroundColor: multiSelectValue.includes('bird') ? 'rgba(25,118,210,0.15)' : 'transparent'
                        }}
                    
                    >Bird</MenuItem>

                   
                    <MenuItem value="dog" sx={{ '&.MuiMenuItem-root:hover': { color:'red'} }}
                    >Dog
                    </MenuItem>
                    

                    <MenuItem value="cat" className={ multiSelectValue.includes('cat') ? styles.itemSelected : ""}
                    >Cat
                    </MenuItem>


                    
                    <MenuItem value="fish" sx={{ '&.MuiMenuItem-root': { paddingLeft:'40px'} }}
                    >Fish
                    </MenuItem>
                    

                     <MenuItem value="lion" sx={{ '&.Mui-selected': { backgroundColor: selectedColor }}}
                    >Lion
                    </MenuItem>
                </TextField>
                </ThemeProvider>
                
                </Box>  
                </Grid>

                <Grid size={1}></Grid>
                
                <Grid size={4}>
                   <Typography sx={{my:3 }} align="left">
                    In sx=&#123;&#123; '&.Mui-selected': &#123; backgroundColor: selectedColor &#125;&#125;&#125;<br />
                    The &amp; means this component &lt;MenuItem&gt; with Mui-selected class.
                </Typography>
                </Grid>

                <Grid size={7}></Grid>

              

        </Grid>








            </Stack>

            

        </>


    )


}