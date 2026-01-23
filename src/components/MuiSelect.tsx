import { Box, MenuItem, Typography } from '@mui/material';
import {useState, useEffect} from 'react';
//import Select, { SelectChangeEvent} from '@mui/material/Select'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel';

import type  {SelectChangeEvent} from '@mui/material/Select'

export const MuiSelect = () => {

    const countryChoices: Array<string> = ["Belgium","France","Germany","Holland","Spain"];

    const [country, setCountry] = useState<string>("");
    const [multiCountries,setMultiCountries] = useState<Array<string>>([]);

   // useEffect(() =>  })

    const handleChange = (event: SelectChangeEvent<string>) => {

        let newCountry = event.target.value

        setCountry( (prevCountry: string) => newCountry)
        
    }

    const handleMultiChange = (event: SelectChangeEvent) => {

        let newCountries = event.target.value

     /* This takes care of a twist where event.target.value can be either string for single select or array for multi select.
     * This is put here to satisfy the compiler.
     */
     setMultiCountries(typeof newCountries === 'string'?  newCountries.split(',') : newCountries)
        
    }

    return (
        <>
        <Typography sx={{my: 3}}>Example of a select allowing only on select value
            <br/>
            Note that the InputBase control is inherited and contains many porperties and 'on' functions.
            <br/>
            Note the use of the renderValue property.
        </Typography>
        
        <Box sx={{width: 250}} >
            <InputLabel id="singleItemSelect">Single Item</InputLabel>
            <Select

                displayEmpty
                labelId="singleItemSelect" 
                onChange={handleChange}
                value={country}
                fullWidth  //Expands the select statement to the size of the parent container
                renderValue={(selected) => {
                    if (!selected.length) {
                        console.log(selected)
                        return <em>Placeholder</em>
                    }
                    console.log(selected)
                    return `You selected ${selected}`

                }}
           
            >
                <MenuItem value="United states">United States</MenuItem>
                <MenuItem value="Great Britain">Great Britain</MenuItem>
                <MenuItem value="Belgium">Belgium</MenuItem>
                <MenuItem value="Deutschland">Germany</MenuItem>

            </Select>

        </Box>

        <Box sx={{width: 250}} >
            <InputLabel id="multiItemSelect">Multi Item</InputLabel>
            <Select

                displayEmpty
                labelId="multiItemSelect" 
                onChange={handleMultiChange}
                value={multiCountries}
                fullWidth  //Expands the select statement to the size of the parent container
                multiple
              
            >
                { countryChoices.map( 
                    (item) => <MenuItem key={item} value={item}>{item}</MenuItem>)

                }
          
            </Select>

        </Box>

        
        </>


    )



}