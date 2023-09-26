import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const CartCard = ({ product }) => {
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
            sx={{ width: 200, height: 150 }}
            image={product.img}
            title="product"
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
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Modelo:
              {product.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio:
              {product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stock:
              {product.quantity}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              p: 6,
            }}
          >

          </CardActions>
        </Container>
      </Card>
    </div>
  );
};

export default CartCard;
