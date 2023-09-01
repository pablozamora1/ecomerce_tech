import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({elemento}) => {
  return (
    <Card sx={{Width: 0 }}>
      <CardMedia
        sx={{ height: 350}}
        image={elemento.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">ADD </Button>
        
      </CardActions>
    </Card>
  );
};

export default ProductCard;
