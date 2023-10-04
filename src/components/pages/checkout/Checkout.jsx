import { Button, TextField, Typography } from "@mui/material";
import styles from "./Checkout.module.css";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography variant="h4" color="text.primary">
          Formulario de contacto
        </Typography>

        <img
          src="https://res.cloudinary.com/dbgdadeox/image/upload/v1696393218/homeroEscribiendo_l0pu8h.jpg"
          style={{
            width: "200px",
          }}
        />
      </div>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "600px",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Nombre"
          variant="outlined"
          name="name"
          onChange={handleChange}
          error={errors.name ? true : false}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />

        <TextField
          label="Telefono"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          error={errors.phone ? true : false}
          helperText={errors.phone}
        />
        <Typography variant="body2" color="text.primary">
          *completar todos los campos
        </Typography>

        <Button variant="contained" type="submit">
          Finalizar Compra
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
