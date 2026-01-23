
import {FormGroup, FormControlLabel, Checkbox , Box, Typography} from '@mui/material'

import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import CloudIcon from '@mui/icons-material/Cloud';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import { useState } from 'react'


export const MuiCheckbox = () => {

    //Tracks the checkboxes by value
    const [checkedBoxes,setCheckedBoxes] = useState<string[]>([]);

   // const [iconCheckedBoxes,setIconCheckedBoxes] = useState<string[]>([]);
 
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const clickedCheckboxName: string = event.target.name;

        setCheckedBoxes( (prevCheckedBoxes) => {

            //Remove the checkbox name from those that are currently checked
            if (prevCheckedBoxes.includes(clickedCheckboxName))
                return prevCheckedBoxes.filter( item => item !== clickedCheckboxName);

            //Add the checkbox name to those that are currently checked
            else
                return [...prevCheckedBoxes,clickedCheckboxName]

        }) //


    } //handleOnChange

    


    //
    const checkBoxProps: object = { slotProps: { input: { onChange: handleOnChange }  }};

   const iconCheckBoxProps: object = { slotProps: { input: { onChange: handleOnChange }  }};

    

    return (

        <>

            <Box sx={{width: 1/3, ml:3}}>

                <Typography sx={{ my: 3 }} align='left'>Checkbox using FormGroup and FormControlLabel.
                    <br />
                    <br />
                    This example uses slotProps to attach the onChange handler to the Checkboxes
                </Typography>


                <FormGroup
                    row
                >

                    <FormControlLabel
                        control={<Checkbox {...checkBoxProps} name="dog" checked={checkedBoxes.includes("dog")} color="secondary"/>} label="Dog"
                    />
                    <FormControlLabel
                        control={<Checkbox {...checkBoxProps} name="cat" checked={checkedBoxes.includes("cat")} />} label="Cat"
                    />
                    <FormControlLabel
                        control={<Checkbox {...checkBoxProps} name="bird" checked={checkedBoxes.includes("bird")} />} label="Bird"
                    />


                </FormGroup>

                <Typography sx={{ my: 3 }} align='left'>Icon examples of Checkbox using FormGroup and FormControlLabel.
                    <br />
                  
                </Typography>



                <FormGroup
                    row
                >


                <FormControlLabel
                        control={<Checkbox icon={<CloudOutlinedIcon />} checkedIcon={<CloudIcon/>} {...iconCheckBoxProps} name="cloud" checked={checkedBoxes.includes("cloud")} color="secondary"/>} label="Cloud"
                    />
                <FormControlLabel
                        control={<Checkbox icon={<VerifiedUserOutlinedIcon />} checkedIcon={<VerifiedUserIcon/>} {...iconCheckBoxProps} name="verified-user" checked={checkedBoxes.includes("verified-user")} color="secondary"/>} label="Verified User"
                    />


                </FormGroup>



            </Box>
    
        </>
    






    )











}