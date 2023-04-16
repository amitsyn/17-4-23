
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ShareIcon from '@mui/icons-material/Share';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from 'next/link';
const LifestyleList = ({post}) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <h1>{post.title.rendered}</h1> 
    </>
  )
}

export default LifestyleList


export async function getStaticPaths(){
  const res = await fetch('https://themeger.shop/wordpress/katen/catalog/wp-json/wp/v2/posts')
  const data = await res.json()

  const paths = data.map(post=>{
    return{
      params:{
        lifestyleList:`${post.id}`
      }
    }
  })
  return {
    paths,
    fallback:false
  }

}

export async function getStaticProps(context){
  const {params} = context
  const res = await fetch(`https://themeger.shop/wordpress/katen/catalog/wp-json/wp/v2/posts/${params.lifestyleList}`)
  const data = await res.json()
  return {
    props:{
      post:data
    }
  }
}