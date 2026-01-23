import { Box, Stack, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel,Radio} from '@mui/material';
import { useState } from 'react';
import { grey } from '@mui/material/colors';


export const MuiStack = () => {

    enum JustifyContent {

        FLEX_START = "flex-start",
        CENTER = "center",
        FLEX_END = "flex-end",
        SPACE_BETWEEN = "space-between",
        SPACE_AROUND = "space-around",
        SPACE_EVENLY = "space-evenly"

    }


    enum StackDirection {

        COLUMN = "column",
        ROW = "row",
        ROW_REVERSE = "row-reverse",
        COLUMN_REVERSE = "column-reverse"

    }

    interface IJustifyContent {
        justifyContent: JustifyContent
    }

    const [buttonSelected, setButtonSelected] = useState<StackDirection>(StackDirection.COLUMN);

    /* The IJustifyContent interface requires the state to have a property called justifyContent of type JustifyContent. 
    *  Since this structure is defined as an object, the initial state must match that shape.
    *
    *  Using an object allows you to expand the state easily in the future. For instance, if you decide to add more properties 
    *  like alignItems or direction to your IJustifyContent interface, the object structure can naturally accommodate these changes:
    *
    *   interface IJustifyContent {
    *       justifyContent: JustifyContent;
    *       alignItems?: string; // Optional additional property
    *    }
    * 
    *   If you don’t expect to add more properties and only care about a single value (justifyContent), 
    *   you could simplify the state and directly store the JustifyContent value, like this:
    * 
    *   const [btnJustifyContent, setBtnJustifyContent] = useState<JustifyContent>(JustifyContent.CENTER);
    *   
    *  
    * 
    */
    const [btnJustifyContent, setBtnJustifyContent] = useState<IJustifyContent>({justifyContent: JustifyContent.CENTER})
   
    const handleButtonChangeRadioGroup = (event: React.ChangeEvent<HTMLInputElement>,value:string) => {
        console.log('event is',event, "and value is",value);

        let newValue  = value as StackDirection;

        setButtonSelected( (prevButtonSelected) => newValue)
    }
  

    return (
    
        <>

        <Box sx={{
            textAlign:'left',
            my: 3
        }}>
        
        <FormControl >
          
            <FormLabel id='form-label-id-1'>
                FormLabel goes here
            </FormLabel>
            <RadioGroup 
                onChange={handleButtonChangeRadioGroup}
                value={buttonSelected}
                row //this is a property that is inherited from FormGroup -> check out docs                    
            >
                <FormControlLabel value={StackDirection.COLUMN} control={<Radio />} label="Column" />
                <FormControlLabel value={StackDirection.ROW} control={<Radio />} label="Row" />
                <FormControlLabel value={StackDirection.ROW_REVERSE} control={<Radio />} label="Row Reverse" />
                <FormControlLabel value={StackDirection.COLUMN_REVERSE} control={<Radio />} label="Column Reverse" />

            </RadioGroup>
            
        </FormControl>
        
        <Typography>Current value chosen is {buttonSelected}</Typography>

        <FormControl >
          
            <FormLabel id='form-label-id-1'>
                FormLabel goes here
            </FormLabel>
            <RadioGroup 
                onChange={handleButtonChangeRadioGroup}
                value={buttonSelected}
                row //this is a property that is inherited from FormGroup -> check out docs                    
            >
                <FormControlLabel value={StackDirection.COLUMN} control={<Radio />} label="Column" />
                <FormControlLabel value={StackDirection.ROW} control={<Radio />} label="Row" />
                <FormControlLabel value={StackDirection.ROW_REVERSE} control={<Radio />} label="Row Reverse" />
                <FormControlLabel value={StackDirection.COLUMN_REVERSE} control={<Radio />} label="Column Reverse" />

            </RadioGroup>
            
        </FormControl>
        
        <Typography>Current value chosen is {buttonSelected}</Typography>

  </Box>

    <Box sx={{
        width: 400,
        height: 150,
        alignItems: "center",
        border: "solid black"

        
    }}>
        
        <Stack 
            spacing={2}
            direction={buttonSelected}
    
            sx={{
            width: "100%",
            height: "100%",
            }}>
        
            <Box sx={{
                width: 75,
                height: '80%',
                bgcolor: 'warning.main'

            }} />

            <Box sx={{
                width: 75,
                height: '80%',
                bgcolor: 'success.main'

            }} />
             <Box sx={{
                width: 75,
                height: '80%',
                bgcolor: 'info.light'

            }} />

        </Stack>

        </Box>
      
        </>

    )


}