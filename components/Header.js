import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MpIcon from '@mui/icons-material/Mp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Header = () => {
    return (
        <div>
            <div >
                {/* <Box sx={{ flexGrow: 1, color: 'white' }} > */}
                <AppBar position="static" sx={{ color: 'black', backgroundColor: 'white' }}>
                    <Grid container spacing={3} display='flex'>
                        <Grid sm={4} sx={{ marginTop: '50px', color: 'black' }} >
                            <FacebookIcon sx={{ m: '10px' }}></FacebookIcon>
                            <TwitterIcon sx={{ m: '10px' }} />
                            <InstagramIcon sx={{ m: '10px' }} />
                            <PinterestIcon sx={{ m: '10px' }} />
                            <MpIcon sx={{ m: '10px' }} />
                            <YouTubeIcon sx={{ m: '10px' }} />
                        </Grid>
                        <Grid sm={4} sx={{ marginTop: '50px' }} >
                            <Stack >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://themeger.shop/html/katen/html/images/other/avatar-lg.png"
                                    sx={{ width: 50, height: 50, textAlign: 'center' }}
                                />
                                <Typography variant='h4'>Katen <span style={{color:'red', width:'10px', height:'10px'}} >.</span></Typography>
                                <Typography variant='h6' style={{ color: '#9faabb' }}>Professional Writer & Personal Blogger</Typography>
                            </Stack>
                        </Grid>
                        <Grid sm={4} sx={{ marginTop: '50px' }}  >
                            <Stack display='-webkit-box' sx={{ marginRight: '20px' }}>
                                <SearchIcon sx={{ m: '20px' }} />
                                <DensityMediumIcon sx={{ m: '20px' }} />
                            </Stack>
                        </Grid>

                    </Grid>
                </AppBar>
                {/* </Box> */}
            </div>
           <ButtonGroup variant="text" sx={{ display: 'flex', marginLeft: '450px'}}>
                <Button variant='filled' sx={{color:'orange'}}>Home</Button>
                <Button sx={{color:'#9faabb'}}>Inspiration</Button>
                <Button sx={{color:'#9faabb'}}>Pages</Button>
                <Button sx={{color:'#9faabb'}}>Contact</Button>
            </ButtonGroup>
            <Box
                sx={{
                    width: '100%',
                    height: 150,
                    backgroundColor: '#F1F8FF',
                    textAlign: 'center'
                }}>
                <h2>Lifestyle</h2>
                <h6 style={{ color: '#9faabb' }}>Home/Lifestyle</h6>
            </Box>
           {/* <Card  sx={{ maxWidth: 345 }} width='250px' heigth='250px'>
      <Example/>
      </Card> */}
        </div>
    )
}
export default Header


