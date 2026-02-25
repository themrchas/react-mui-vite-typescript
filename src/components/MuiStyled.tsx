import { Button  } from '@mui/material'
import type { ButtonProps }from '@mui/material/Button'

import { styled }from '@mui/material/styles'

/* This extends the default ButtonProps by adding the property 'test'.
   Note - MyButtonsProps applies to the properties of the Button, not the styling.
   The return statement deals only with styling items that are defined on the 'theme'.

   The 'theme' is provided by default by react as a property on props.

   Any properties of Button explicitly provided will be implicitly modified on the resulting Button.
   Example - <StyledButton test="yes, money" fullWidth/> fullWidth will be applied to the Button

*/
type MyButtonProps = ButtonProps & {
  test?: number;
};


//export const StyledButton = styled(Button)<MyButtonProps>((props) => {
export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'test',
}
 )<MyButtonProps>((props) => {

    console.log('props are ',props);
  //  return { backgroundColor: 'red' }
  // return { backgroundColor: props.theme.palette.primary.main }
  return { 
    minHeight: props.test,
    '&.MuiButton-colorPrimary': {'backgroundColor':'red'}
  }

})

//export const StyledButton = styled(Button)<MyButtonProps>((props) => {
export const AnotherStyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'test',
}
 )<MyButtonProps>(({test, theme}) => {

    console.log('AnotherStyledButton theme:', theme)
  console.log('AnotherStyledButton test:', test)


  //  return { backgroundColor: 'red' }
  // return { backgroundColor: props.theme.palette.primary.main }
  return { 
    minHeight: test,
    '&.MuiButton-colorInfo': {'backgroundColor':'lightblue'}
  }

})