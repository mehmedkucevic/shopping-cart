import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProductCard from "./ProductCard.css"
export default function ProductCard() {
  return (
    <Card sx={{ width: 450, height: 500 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://numi.rs/wp-content/uploads/2022/11/cosrx-oil-free-ultra-moisturizing-lotion.jpg"
        title="Oil Free Moisturizer 100ml"
      />
      <CardContent> 
        <Typography gutterBottom variant="h5" component="div">
        Oil Free Moisturizer 100ml
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}