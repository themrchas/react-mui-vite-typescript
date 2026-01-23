import { Box, Typography, Button } from "@mui/material";
import { Card, CardContent, CardActions, CardMedia } from "@mui/material";
import { JSX, useState } from "react";
//import { GenericCard, IGenericCardProps } from "./GenericCard";
import { GenericCard } from "./GenericCard";
import type { IGenericCardProps } from "./GenericCard";



export const MuiCard = () => {
  const [cards, setCards] = useState<IGenericCardProps[]>([]);

  const addCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    //In order to satisfy the interface definition, we add the property 'fields' which itself is an object containing the property 'content'
    const newCard = { fields: { content: "Yes - money" }, index: 0 };

    setCards((prevCards) => {
      return [...prevCards, newCard];
    });
  };

  const removeCard = (cardid: number) => {
    console.log("removing a card with index", cardid);

    setCards((prevCards) => {
      //Note that the 'return' is actually assigning the usestate 'cards' property
      return prevCards.filter((item, index) => index !== item.index);
    });
  }; //remove

  return (
    <>
      <Box
        sx={{
          width: 1 / 2,
          textAlign: "left",
        }}
      >
        <Typography m={3} component="div" align="left">
          Examples using the &lt;Card&gt; and &lt;CardContent&gt;
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom component="div">
              {" "}
              CardContent goes here{" "}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              component="div"
              color="text.secondary"
            >
              Pariatur reprehenderit quis est eiusmod Lorem. Lorem ad ea sunt
              culpa. Amet laborum ad magna voluptate excepteur quis laborum
              fugiat.
            </Typography>
          </CardContent>
        </Card>

        <Typography m={3} component="div" align="left">
          Examples using the &lt;Card&gt; and &lt;CardContent&gt; and
          &lt;CardActions&gt;
        </Typography>
        <Card sx={{ m: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom component="div">
              {" "}
              CardContent goes here.{" "}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              component="div"
              color="text.secondary"
            >
              Nisi eu qui laboris ad veniam elit mollit commodo velit
              consectetur tempor. Ad ad sunt mollit tempor velit eiusmod veniam
              non culpa ex ex elit irure consectetur. Commodo excepteur ut
              cupidatat fugiat aute consectetur cillum sint id ex ad labore
              esse. Nostrud laboris aute eiusmod aliqua veniam ut in in
              excepteur magna nulla irure. Consectetur culpa laboris
              exercitation sit quis do est ut dolore exercitation cillum et.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="text" size="small">
              Add Card
            </Button>
            <Button variant="contained" size="small">
              Remove Card
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ m: 3, boxShadow: 8 }}>
          <CardMedia
            image="https://picsum.photos/200/200"
            component="img"
            sx={{ width: 100, height: 100 }}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom component="div">
              Card uses an image and a well-defined box shadow.
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              component="div"
              color="text.secondary"
            >
              Nisi eu qui laboris ad veniam elit mollit commodo velit
              consectetur tempor. Ad ad sunt mollit tempor velit eiusmod veniam
              non culpa ex ex elit irure consectetur. Commodo excepteur ut
              cupidatat fugiat aute consectetur cillum sint id ex ad labore
              esse. Nostrud laboris aute eiusmod aliqua veniam ut in in
              excepteur magna nulla irure. Consectetur culpa laboris
              exercitation sit quis do est ut dolore exercitation cillum et.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="text" size="small" onClick={addCard}>
              Add Card
            </Button>
          </CardActions>
        </Card>
        <Typography m={6} component="div" align="left">
          Cards dynamically added follow:
        </Typography>
        {cards.map((item: IGenericCardProps, index) => (
          <GenericCard
            key={index}
            fields={item.fields}
            index={index}
            removeItem={removeCard}
          />
        ))}
      </Box>
    </>
  );
};
