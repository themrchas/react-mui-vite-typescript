import { Stack, TextField, Typography, Chip, Autocomplete, Box } from '@mui/material';

import { styled }from '@mui/material/styles'

import { useState } from 'react';


interface IAutoCompletePet {
        id: number;
        type: string;
        color: string;
    }

const autoCompletePets: Array<IAutoCompletePet> = [

        {id:1 , type:'Dog', color: "Brown"},
        {id:2 , type:'Cat', color:"Tabby"},
        {id:3 , type:'Rat', color:"Gray"},
        {id:4 , type:'Parrot', color:"Rainbow"},
        {id:5 , type:'Hamster', color:"Brown"},
        {id:6 , type:'Horse', color:"Gray"},
        {id:7 , type:'Cow', color:"Spotted"}, 
        {id:8 , type:'Tiger', color:"Striped"},
        {id:6 , type:'Lion', color:"Brown"},
        {id:6 , type:'Owl', color:"Brown"},
        {id:6 , type:'Snake', color:"Black"}


];

/*
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
*/

export const MuiChip = () => {

    const [selectedChips,setSelectedChips] = useState<Array<IAutoCompletePet>>([])

    return (
        <>
        <Typography sx={{textAlign: 'left', m:3}} variant='h6'>Example of chips in a flex box</Typography>
               
        <Box sx={{ width: 1 / 2, m: 3, border: 'solid' }}>
            <Stack 
                direction="row"
                spacing={0.5}
                sx={{justifyContent: 'flex-start', flexWrap: 'wrap'}}
            >

           {
            autoCompletePets.map( (value) => {

                return (
            
                        <Chip
                            label={value.type}
                        />
     

                );

            })
        }
</Stack>
        </Box>
        </>

    )


} //MuiChip