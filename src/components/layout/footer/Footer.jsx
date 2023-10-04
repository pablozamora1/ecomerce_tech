import { Typography } from "@mui/material";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.name}>
        <img
          src="https://res.cloudinary.com/dbgdadeox/image/upload/v1696398865/simbolo-de-copyright_cnq2pr.png"
          style={{
            width: "50px",
          }}
        />
        <Typography gutterBottom variant="h5" component="div">
          Compumundo Hipermegared S.A
        </Typography>
      </div>
      <div className={styles.rs}>
        <div className={styles.ins}>
          <img
            src="https://res.cloudinary.com/dbgdadeox/image/upload/v1696398864/instagram_aict80.png"
            style={{
              width: "50px",
            }}
          />
          <p>Compumundo Hipermegared</p>
        </div>
        <div className={styles.wsp}>
          <img
            src="https://res.cloudinary.com/dbgdadeox/image/upload/v1696398864/whatsapp_n8xobt.png"
            style={{
              width: "50px",
            }}
          />
          <p>+54 351782 7826</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
