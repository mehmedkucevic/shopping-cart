import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";
import { CardActions, CardMedia } from "@mui/material";
import DeleteButton from "../Button/DeleteButton";
import { AppContext } from "../../context/AppContext";

export default function ProductCard({
  id,
  productName,
  productPrice,
  productImage,
  addToCart,
  deleteFromCart,
}) {
  const { cart } = useContext(AppContext);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (!!cart.find((product) => product.id === id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [id, cart]);
  // console.log({ isAdded });

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia sx={{ height: 250 }} image={productImage} title="" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ height: "55px" }}
        >
          {productName}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="product-price"
          style={{ fontWeight: "700" }}
        >
          {productPrice}
          EUR
        </Typography>
        <CardActions style={{ display: "flex", justifyContent: "center" }}>
          {!isAdded ? (
            <Button
              style={{ color: "#2e5b36", fontWeight: "700" }}
              onClick={addToCart}
              size="small"
              className="btn-add"
            >
              ADD TO CART
            </Button>
          ) : (
            <DeleteButton onDelete={deleteFromCart} />
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
}