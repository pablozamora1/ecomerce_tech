import { Badge } from "@mui/material";
import { MdShoppingCartCheckout } from "react-icons/md";

export const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <MdShoppingCartCheckout color="black" size="40px" />
      </Badge>
    </div>
  );
};

