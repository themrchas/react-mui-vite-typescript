import { Typography } from '@mui/material';
import './App.css';
import './components/MuiTypeography'
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiTypography } from './components/MuiTypeography';
import { MuiButton } from './components/MuiButton';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiBox } from './components/MuiBox';
import { MuiStack } from './components/MuiStack';
import { MuiGrid } from './components/MuiGrid';
import { MuiCard } from './components/MuiCard';
import { MuiAccordian } from './components/MuiAccordian';
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';


import { ThemeProvider } from "@mui/material/styles";
import { MuiStylingExamples } from './components/MuiStylingExamples';







function App() {
  return (
    <div className="App">
 {/*<MuiRadioButton />
      <MuiTypography></MuiTypography>
      <MuiButton></MuiButton>
    */}
    
   {/*  <MuiStylingExamples /> */}
   {/*  <MuiTextField /> */}
    {/* } <MuiSelect /> */}
    {/* <MuiCheckbox /> */}
     <MuiAutocomplete /> 
   {/* <MuiBox /> */}
  {/*   <MuiStack />  */}
  {/* <MuiGrid></MuiGrid> */}
 {/*  <MuiCard></MuiCard> */}
 {/* <MuiAccordian /> */}
      
    </div>
  );
}

export default App;
