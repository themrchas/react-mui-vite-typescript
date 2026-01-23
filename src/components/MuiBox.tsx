import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';


export const MuiBox = () => {

    return (

        

        <>
        <Box sx={{textAlign:"left"}}>
            <Typography m={3}>The Box component is used like the HTML &lt;div&gt; tag</Typography>
            <Typography m={3}>System props are deprectated: In some cases, you can add style properties directly to a tag instead of using 'sx'
                <br/>
                Example:  You can use <span style={{color:"red"}}>Deprecated System Props- &lt;Typography m=&#123;3&#125;&gt;</span> as well as &lt;Typography sx=&#123;&#123;m:3&#125;&gt;
            </Typography>
        </Box>

        <Box sx={{my:2, textAlign:"left"}}>

            <Typography m={3}>Box has a <b>component</b> property that allows you to specify the underlying HTML component Box uses.</Typography>   
            <Box ml={3} component={'span'} >'span' makes a &lt;span&gt; HTML Element</Box>
            <Box ml={3} component={'div'}>'div' makes a &lt;div&gt; HTML Element</Box>
            <Typography sx={{m:3}}>'select' makes a &lt;select&gt; HTML Element</Typography> 
            <Box ml={3} component={'select'} sx={{width:200, padding: 1}}>
                <option value="option1">Option 1 </option>
                <option value="option2">Option 2 </option>
                <option value="option3">Option 3 </option>
            </Box>
        </Box>


        <Typography sx={{m:3, textAlign: 'left'}}>Example of using sx properties for a Box</Typography> 
        <Box 
            sx={{
                bgcolor:'primary.light',
                height: '100px',
                width: '100px',
                p: '10px',
                m: 3,
                '&:hover' : { bgcolor: grey[50] }
          
            }}
   
        >
            Yes - money
        </Box>

        <Box sx={{
            width: 400,
            height: 100,
            display:'flex',
            justifyContent:'space-between',
            border: 2,
            borderColor: 'info.dark',
            alignItems: "center",
            m: 2
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




        </Box>
        <Box sx={{
            width: 400,
            height: 100,
            display:'flex',
            justifyContent:'space-around',
            border: 2,
            borderColor: 'info.dark',
            alignItems: "center",
            m: 2
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




        </Box>
        
      
        </>

    )


}