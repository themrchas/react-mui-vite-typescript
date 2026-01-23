import { Typography } from '@mui/material'


export const MuiTypography = () => {

    return (

    
        <div>
            <Typography variant='h1'>&lt;Typography variant=h1&gt;</Typography>
            <Typography variant='h4'>&lt;Typography variant=h4&gt;</Typography>
            <Typography variant='h6'>&lt;Typography variant=h6&gt;</Typography>
            <Typography variant='subtitle1'>&lt;Typography variant=subtitle1&gt;</Typography>
            <Typography variant='subtitle2' gutterBottom>&lt;Typography variant=subtitle2 gutterBottom.&gt; <br />Note that guutterBottom is dependent on variant chosen.</Typography>
            <Typography variant='body1'>&lt;Typography variant='body2'&gt;    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae omnis beatae dolor commodi quod provident inventore eveniet. Voluptates numquam, quis ea inventore reiciendis facere porro mollitia aperiam perspiciatis consequatur.</Typography>
            <Typography variant='body2'>&lt;Typographyvariant'body2'&gt;     Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur, illum illo assumenda architecto quisquam fuga vitae. Molestiae aut debitis atque deleniti explicabo quisquam eaque qui temporibus, vero sit eligendi!</Typography>
            <Typography variant='h6'component='h3'>&lt;Typography variant=h6 component=h3&gt; 'h3' styling will be applied to 'h6' element</Typography>

        </div>
        


    )


}