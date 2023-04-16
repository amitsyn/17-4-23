import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProductList({ products }) {
  return (
    
    <>
    
    <Grid container spacing={3} sx={{display:'flex'}}>
      {
        products.map(item =>
          
          <Grid item xs={4}  key={item.id}>
          <Item>
          <Card sx={{ maxWidth: 400 }}>
            <Link href={`posts/${item.id}`}>
            <CardMedia
              sx={{ height: 300 }}
              image="	https://themeger.shop/html/katen/html/images/posts/post-md-1.jpg"
              title="green iguana"
              on
            ><Button sx={{marginRight:'250px'}}>Lifestyle</Button></CardMedia></Link>
            <div style={{display:'flex' ,margin:'20px 20px'}}>  
            <Avatar
              alt="Remy Sharp"
              src="https://themeger.shop/html/katen/html/images/other/avatar-lg.png"
              sx={{ width: 30, height: 30, textAlign: 'center' }}/>
              <span >  Katen Doe</span>
              <h6 sx={{m:3 , p:3}}>20 March 2023</h6>
            </div>
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title.rendered}
              </Typography>
              <Typography variant="body2" color="text.secondary" limit={10}>
              I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><ShareIcon/></Button>
              <Button size="small"><MoreHorizIcon/></Button>
            </CardActions>
          </Card>
          </Item>          </Grid>)
      }</Grid></>
  )
}
export async function getServerSideProps() {
  const res = await fetch('https://themeger.shop/wordpress/katen/catalog/wp-json/wp/v2/posts')
  const data = await res.json()

  return {
    props: {
      products: data
    }
  }
}
