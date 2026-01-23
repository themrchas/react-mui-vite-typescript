import { Stack, Autocomplete, TextField, Box, InputAdornment } from '@mui/material'
import { Typography } from '@mui/material'
import { useState, useEffect } from 'react';

export const MuiAutocomplete = () => {

    interface AutoCompleteCountries {
        id: number;
        label: string;
    }

    interface AutoCompleteCars {
        id: number;
        model: string;
    }

    interface AutoCompletePet {
        id: number;
        type: string;
        color: string;
    }

    interface AutoCompleteMonth {
        id: number;
        month: string;
       
    }



    //Tracks the car model chosen
    const [chosenCountry,setChosenCountry] = useState<AutoCompleteCountries | null >(null);

    //Track the chosen pet
    const [chosenPet,setChosenPet] = useState<AutoCompletePet | null | string>(null);

    //Track the chosen pet
    const [chosenMonth,setChosenMonth] = useState<AutoCompleteMonth | null>(null);

    //Used for the months example.  
    const [monthValues,setMonthValues] = useState<AutoCompleteMonth[]>([])

    
    useEffect(() => {

        const months = ['January','February','March','April','May','June','July'];

       let monthObjects  = months.map( (month:string,index:number) => ({ month:month, id:index}) );

        console.log('useEffect monthValues are',monthValues);

        setMonthValues(monthObjects);
        
   // },[]);
    });

    
    const autoCompleteCountries: AutoCompleteCountries[] = [

        {id:1 , label:'Belgium'},
        {id:2 , label:'Germany'},
        {id:3 , label:'France'},
        {id:4 , label:'Holland'},
        {id:5 , label:'Spain'},

    ]

    const autoCompleteCars: AutoCompleteCars[] = [

        {id:1 , model:'Ford'},
        {id:2 , model:'BMW'},
        {id:3 , model:'Škoda'},
        {id:4 , model:'Subaru'},
        {id:5 , model:'Jeep'},

    ]

    const autoCompletePets: Array<AutoCompletePet> = [

        {id:1 , type:'Dog', color: "Brown"},
        {id:2 , type:'Cat', color:"Tabby"},
        {id:3 , type:'Rat', color:"Gray"},
        {id:4 , type:'Bird', color:"Rainbow"},
        {id:5 , type:'Hamster', color:"Brown"},

    ]



    const handleCountryChange = (event:React.SyntheticEvent,value:AutoCompleteCountries | null) => {

        console.log('handleCountryChange: event is',event,'value is',value);

        setChosenCountry( (prevChosenCountry:AutoCompleteCountries | null) => value);
    }

    //The 'string' is required when freeSolo property is used on the Autocomplete
    const handlePetChange = (event:React.SyntheticEvent,value:AutoCompletePet | null | string) => {

        console.log('handlePetChange: event is',event,'value is',value);

        setChosenPet( (prevChosenPet:AutoCompletePet | null | string ) => value);
    }

    const handleMonthChange = (event:React.SyntheticEvent,value:AutoCompleteMonth | null) => {

        console.log('handleMonthChange: event is',event,'value is',value);

        setChosenMonth( (prevChosenMonth:AutoCompleteMonth | null) => value);
    }


    return (

        
        <Box sx={{ width: 1 / 2, m: 3 }}>
            <Stack spacing={2} sx={{ width: '500px' }}>

                <Autocomplete
                    options={autoCompleteCountries}
                    renderInput={(params) => <TextField {...params} label="Country" />}


                />
                <Box>
                    <Typography sx={{ my: 3, textAlign: 'left' }} >
                        This example uses the function <b>getOptionLabel</b> to generate the labels that will be used.
                    </Typography>
                    <Autocomplete
                        options={autoCompleteCars}
                        getOptionLabel={(option) => option.model}
                        renderInput={(params) => <TextField {...params} label="Cars" />}
                        sx={{ width: 1 / 2 }}

                    />
                </Box>
                <Box>
                    <Typography sx={{ my: 3, textAlign: 'left' }} >
                        This example saves the chosen value to a state variable.
                    </Typography>
                    <Autocomplete
                        options={autoCompleteCountries}
                        renderInput={(params) => <TextField {...params} label="Countries" />}
                        sx={{ width: 1 / 2 }}
                        value={chosenCountry}
                        onChange={handleCountryChange}
                    />
                    <Typography sx={{textAlign: 'left'}}>{chosenCountry !== null ? `Chosen country is ${chosenCountry.label}` : "No country selected"}</Typography>
                </Box>
                <Box>
                    <Typography sx={{ my: 3, textAlign: 'left' }} >
                        This example saves the chosen value to a state variable and uses an interface consisting of properties <b>id</b>, <b>type</b>, and <b>color</b>
                        <br/>
                        <br />
                        The property <b>freeSolo</b> is used to allow any input to be accepted - see debug Console output.
                        <br />
                        <br />
                        Note that an edit is needed because <b>freeSolo</b> adds a string type to the possible values to be processed by <b>onChange</b>
                        <br />
                        <b>getOptionLabel</b> property needed to be modified as well.
                    </Typography>
                    <Autocomplete
                        options={autoCompletePets}
                        //  getOptionLabel={(option) => option.type}

                        //Note the type checking here
                        getOptionLabel={(option) => typeof option === "string" ? option : option.type}
                        renderInput={(params) => <TextField {...params} label="Pets" />}
                        sx={{ width: 1 / 2 }}
                        freeSolo
                        value={chosenPet}
                        onChange={handlePetChange}
                        
                    />
                    <Typography sx={{textAlign: 'left'}}>{chosenPet !== null ? typeof chosenPet !== "string" ? `Chosen pet is ${chosenPet.type}`: `Chosen pet is ${chosenPet}` : "No pet selected"}</Typography>
                </Box>
                <Box>
                <Typography sx={{ my: 3, textAlign: 'left' }} >
                        This example saves the chosen value to a state variable.
                    </Typography>
                <Autocomplete
                        options={monthValues}
                        getOptionLabel={(option) => option == null ? "money": option.month}
                        renderInput={(params) => <TextField {...params} label="Months" 
                        error={chosenMonth == null}
                        helperText={chosenMonth == null ? "Error - make choice" : ""}
                       /*     slotProps={{
                                input: {startAdornment: <InputAdornment position="start">*</InputAdornment>}
                            }}
                       */ 
                        
                        />}
                        sx={{ width: 1 / 2 }}
                        value={chosenMonth}
                        onChange={handleMonthChange}
                        
                        
                        
                    />
                    <Typography sx={{textAlign: 'left'}}>{chosenMonth !== null ?  `Chosen month is ${chosenMonth.month}` : "No month selected"}</Typography>
               
                </Box>
            </Stack>
        </Box>


    )





}