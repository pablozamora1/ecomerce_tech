import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import ItemCount from "../itemCount/ItemCount";

const CardDetail = ({ productSelected, onAdd, cantidad }) => {
  return (
    <div>
      <Card
        sx={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <Box>
          <CardMedia
            sx={{ width: 400, height: 450 }}
            image={productSelected.img}
            title="productSelected"
            component="div"
          />
        </Box>
        <Container
          sx={{
            width: 500,
            height: 350,
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
              Modelo:
              {productSelected.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio: $ {productSelected.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stock:
              {productSelected.stock}
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              p: 6,
            }}
          >
            {productSelected.stock > 0 ? (
              <ItemCount
                stock={productSelected.stock}
                initial={cantidad}
                onAdd={onAdd}
              />
            ) : (
              <Typography variant="h5" color="text.secondary">
                Ups, nos quedamos sin stock
              </Typography>
            )}
          </CardActions>
        </Container>
      </Card>
    </div>
  );
};

export default CardDetail;
