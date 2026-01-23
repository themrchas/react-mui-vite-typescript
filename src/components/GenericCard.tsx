import { Box, Typography, Button } from '@mui/material';
import { Card, CardContent, CardActions, CardMedia } from '@mui/material';

type removeItemFunction = (cardid:number) => void;

//This interface defines an property called 'fields' with property 'content'
export interface IGenericCardProps { 
    fields: {
        content: string;
   },
   index: number;
   removeItem?: removeItemFunction
    
};
    


export const GenericCard = (props: IGenericCardProps) => {

        //removeItem is defined in the parent and used to remove this GenericCard via the property 'index'
        const { fields , index, removeItem } = props;

    return (


    // Added the data-cardid custom data attribute in order to be able to track the component in the parent 
    <Card sx={{m:3, boxShadow:8}} data-cardid={index}> 
            <CardMedia 
                image="https://picsum.photos/200/200" 
                component="img"
                sx={{width:100, height:100}} />
            <CardContent>
                <Typography variant="h5"  gutterBottom component="div">{fields.content}</Typography>    
                <Typography variant="body2"  gutterBottom component="div" color="text.secondary">Nisi eu qui laboris ad veniam elit mollit commodo velit consectetur tempor. Ad ad sunt mollit tempor velit eiusmod veniam non culpa ex ex elit irure consectetur. Commodo excepteur ut cupidatat fugiat aute consectetur cillum sint id ex ad labore esse. Nostrud laboris aute eiusmod aliqua veniam ut in in excepteur magna nulla irure. Consectetur culpa laboris exercitation sit quis do est ut dolore exercitation cillum et.</Typography>   
            </CardContent>
            <CardActions>
                {/* This will enure that the removeItem function is defined in order to satisfy the compiler requirmeent  */}
                {removeItem && (
                <Button variant="contained" size="small" onClick={() => removeItem(index)}>Remove Card</Button> )}
            </CardActions>
        </Card>

    )

}