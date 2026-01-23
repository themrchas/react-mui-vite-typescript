
import { Box, 
    FormControl , 
    FormLabel, 
    FormControlLabel, 
    RadioGroup, 
    Radio,
    Typography,
    FormHelperText} 
from '@mui/material'

import { useState } from 'react'



/* FormControl provides context to check for filled/focused/error/required.
* The context is used by FormLabel, FormHelperText, Input, and InputLabel.
*
* Note how a FormControlLabel is associated with a 'control'.
* 'controlled radio group' means that the value of the RadioGroup is controlled by component state - uses 'value' and 'onChange' props
* 
* 'uncontolled radio group' means that the selcted state is not kept in the component state - value accessed using a ref 
* of form submission.  Uses defaultValue property
*/

export const MuiRadioButton = () => {

type individualButtonValues = {btn1:boolean, btn2:boolean, btn3:boolean}

const [buttonSelected, setButtonSelected] = useState<string>("cat");
const [individualRadioButtons, setIndividialRadioButtons] = useState<individualButtonValues>({btn1:false,btn2:false,btn3:false})
const [individualButtonSectionError, setIndividualButtonSectionError] = useState<string>("You must select a radio button")

 
const handleButtonChangeRadioGroup = (event: React.ChangeEvent, value: string) => {
  
    setButtonSelected( (prevButtonSelected) => {

        console.log('Previous button value was',prevButtonSelected,'and new value is',value);
        
        return value
    
    });
}

const handleBtnIndividualChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    console.log('event is',event);

    setIndividialRadioButtons( (prevIndividualRadiobuttons) => {

        let targetBtn = event.target.value as 'btn1' | 'btn2' | 'btn3';

        console.log("individualButtonSectionError",individualButtonSectionError);

        setIndividualButtonSectionError("");

        console.log("individualButtonSectionError",individualButtonSectionError);

        console.log('prevIndividualRadiobuttons is',prevIndividualRadiobuttons,'and targetBtn is',targetBtn);

        {/* the [targetBtn]: is known as dynamic property access, since value is known at run time 
         [targetBtn]: !prevIndividualRadiobuttons[targetBtn]  This allows you yo use the variable 'targetBtn' as a key name and set its value   
            */}
        return { ...prevIndividualRadiobuttons, [targetBtn]: !prevIndividualRadiobuttons[targetBtn]}
   
       

    })  




} //handleBtnIndividualChange


return (

    <>

    <Box>
        
        <FormControl>
          
            <FormLabel id='form-label-id-1'>
                FormLabel goes here
            </FormLabel>
            <RadioGroup 
                onChange={handleButtonChangeRadioGroup}
                value={buttonSelected}
                row //this is a property that is inherited from FormGroup -> chck out docs                    
            >
                <FormControlLabel value="dog" control={<Radio />} label="Dog" />
                <FormControlLabel value="cat" control={<Radio />} label="Cat" />
                <FormControlLabel value="bird" control={<Radio />} label="Bird" />

            </RadioGroup>
            
        </FormControl>
        
        <Typography>Current value chosen is {buttonSelected}</Typography>

  </Box>

  <Box sx={{my: 3}}>

    

        <Typography sx={{mb:2}} align="left">Example of two stand alone radio buttons  - RadioGroup wrapper is not used
            <br />
            Note that unless in a RadioGroup, once a radio button is selected, it cannot be deselected.
            <br />
            This example uses a true/false paradigm as well as error logic.
        </Typography>


        <FormControl sx={{display:'inline'}}
            error={Boolean(individualButtonSectionError)}
        >
            <FormLabel>Choose a radio button</FormLabel>

        <Radio 
            checked={individualRadioButtons.btn1}
            onChange={handleBtnIndividualChange}
            value="btn1"

        />
        <Radio 
            checked={individualRadioButtons.btn2}
            onChange={handleBtnIndividualChange}
            value="btn2"
            
        />
        <Radio 
            checked={individualRadioButtons.btn3}
            onChange={handleBtnIndividualChange}
            value="btn3"
            disabled
            
        />
        <FormHelperText>{individualButtonSectionError}</FormHelperText>

    </FormControl>

  </Box>

</>



)




}