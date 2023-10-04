import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import styles from "./CardCheckout.module.css";
import { Link } from "react-router-dom";
const CardCheckout = ({ orderId }) => {
  return (
    <div className={styles.container}>
      <Card
        sx={{ width: 600, display: "inline-flex", alignItems: "center", p: 2 }}
      >
        <CardActionArea
      
        >
          <CardMedia
            component="img"
            height="400"
            image="https://res.cloudinary.com/dbgdadeox/image/upload/v1696394034/homero_felicitando_v9moxy.jpg"
            alt="Compra finalizada"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Felicitaciones! la compra se realizo correctamente.
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              El numero de factura es : {orderId.id}
            </Typography>
          </CardContent>
          <Link to="/">
            <Button variant="contained">Volver Al Home</Button>
          </Link>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardCheckout;
