import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import ItemCount from "../itemCount/ItemCount";

const CardDetail = ({ productSelected, onAdd }) => {
  return (
    <div>
      <Card sx={{ width: 1000, display: "inline-flex", alignItems: "center" }}>
        <Container>
          <CardMedia
            sx={{ height: 500 }}
            image={productSelected.img}
            title="productSelected"
          />
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "space-around",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productSelected.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productSelected.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productSelected.price}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              p: 6,
            }}
          >
            <ItemCount
              stock={productSelected.stock}
              initial={1}
              onAdd={onAdd}
            />
          </CardActions>
        </Container>
      </Card>
    </div>
  );
};

export default CardDetail;
