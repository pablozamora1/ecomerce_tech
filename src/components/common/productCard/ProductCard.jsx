import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 300, height: 500,  p: 2 }}>
      <CardMedia
        sx={{ height: 300, pt: 2 }}
        image={elemento.img}
        title="productos"
        component="div"
      />
      <CardContent sx={{ height: 90 }}>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {elemento.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/ItemDetail/${elemento.id}`}>
          <Button size="small" variant="contained">
            Ver detalle{" "}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
