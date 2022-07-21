import {Paper,Typography, Avatar, Grid, Divider, Box, Button} from '@mui/material'
import { ThemeProvider, styled } from '@mui/material/styles';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import {useState} from 'react';
import {theme} from '../theme/theme';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppsIcon from '@mui/icons-material/Apps';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import BallotIcon from '@mui/icons-material/Ballot';
import PolylineIcon from '@mui/icons-material/Polyline';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useSpring, animated,config } from 'react-spring';

function SideBar() {

    const [sliderOpen, setSliderOpen] = useState(true);
    const [preSlider, setPreSlider] = useState(true);

    const props = useSpring({
        from:{width:'200px'},
        to:preSlider?{width:'200px'}:{width:'35px'},
        config:{
            ...config.wobbly,
            bounce:1,
        }
    })

    const StyledButton = styled(PlayCircleFilledIcon)(({theme})=>({
        transform:sliderOpen?'rotate(180deg)':'',
        marginLeft:sliderOpen?'40px':'28px',
        color:theme.palette.primary.light
    }))

    const AnimatedPaper = animated(Paper);

    const StyledBar = styled(AnimatedPaper)(({theme}) => ({
        height:'90%',
        padding:'30px',
        backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(255,255,255,0))',
        backgroundColor:'rgba(0,0,0,0.5)',
        backdropFilter:"blur(10px)",
        boxShadow: '4px 4px 4px rgba(30,30,30,0.2)',
        color: theme.palette.primary.contrastText,
        textOverflow:'clip',
    }))

    const StyledAvatar = styled(Avatar)(({theme})=>({
        width: 34, 
        height: 34,
        backgroundColor:'rgba(255,255,255,0.0)'
    }))

    const NavButton = styled(Button)(({theme})=>({
        color: theme.palette.primary.contrastText,
        display: 'content',
        maxHeight:'60px',
        padding:'0px',
        justifyContent:'flex-start',
        '&:hover': {
            backgroundColor:'rgba(0,0,0,0.3)',
        }
    }))


    const handleClick = (e) => {

        if(preSlider===false){
            setPreSlider(!preSlider);
            e.preventDefault();
            setTimeout(() => {
                setSliderOpen(!sliderOpen);
            }, 200);
        }
        else{
            setPreSlider(!preSlider);
            setSliderOpen(!sliderOpen);
        }
        
    }



  return (
    <StyledBar elevation={4} style={props}>
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <Avatar sx={{weight:'34',height:'34', backgroundColor:theme.palette.primary.light}}>N</Avatar>
            </Grid>

            {sliderOpen?
                <Grid item xs={6}>
                <Typography variant='h6'  sx={{paddingTop:'6px',textTransform:'none'}}>
                    New User
                </Typography>
            </Grid>
            :<Grid item xs={2}>
            </Grid>
            }

            
            <Grid item xs={2}>
                <StyledButton onClick={handleClick} />
            </Grid>
        </Grid>
        {<br/>}
        <Divider/>
        {<br/>}
        <Grid container spacing={0}  component={NavButton} disableRipple>
            <Grid item xs={3}>
                <StyledAvatar>
                    <DashboardIcon/>
                </StyledAvatar>
            </Grid>
            {sliderOpen?
                <Grid item xs={6}>
                <Typography variant='subtitle2'  sx={{textTransform:'none'}}>
                    DashBoard
                </Typography>
            </Grid>
            :''}
        </Grid>
        {<br/>}
        <Grid container spacing={0} component={NavButton} disableRipple>
            <Grid item xs={3}>
                <StyledAvatar>
                    <AppsIcon/>
                </StyledAvatar>
            </Grid>
            {sliderOpen?
                <Grid item xs={6}>
                <Typography variant='subtitle2'  sx={{textTransform:'none'}}>
                    Tic Tac Toe
                </Typography>
            </Grid>
            :''}
        </Grid>
        {<br/>}
        <Grid container spacing={0} component={NavButton} disableRipple>
            <Grid item xs={3}>
                <StyledAvatar>
                    <CheckBoxOutlineBlankIcon/>
                </StyledAvatar>
            </Grid>
            {sliderOpen?
                <Grid item xs={6}>
                <Typography variant='subtitle2'  sx={{textTransform:'none'}}>
                    Wordle
                </Typography>
            </Grid>
            :''}
        </Grid>
        {<br/>}
        <Grid container spacing={0} component={NavButton} disableRipple>
            <Grid item xs={3}>
                <StyledAvatar>
                    <BallotIcon/>
                </StyledAvatar>
            </Grid>
            {sliderOpen?
                <Grid item xs={6}>
                <Typography variant='subtitle2'  sx={{textTransform:'none'}}>
                    CrossWord
                </Typography>
            </Grid>
            :''}
        </Grid>
        {<br/>}
        <Grid container spacing={0} component={NavButton} disableRipple>
            <Grid item xs={3}>
                <StyledAvatar>
                    <PolylineIcon/>
                </StyledAvatar>
            </Grid>
            {sliderOpen?
                <Grid item xs={6}>
                <Typography variant='subtitle2'  sx={{textTransform:'none'}}>
                    Chess
                </Typography>
            </Grid>
            :''}
        </Grid>
        {<br/>}
        <Grid container spacing={0} component={NavButton} disableRipple>
            <Grid item xs={3}>
                <StyledAvatar>
                    <BackupTableIcon/>
                </StyledAvatar>
            </Grid>
            {sliderOpen?
                <Grid item xs={6}>
                <Typography variant='subtitle2'  sx={{textTransform:'none'}}>
                    Sudoku
                </Typography>
            </Grid>
            :''}
        </Grid>
        {<br/>}
        <Grid container spacing={0} component={NavButton} disableRipple>
            <Grid item xs={3}>
                <StyledAvatar>
                    <FormatQuoteIcon/>
                </StyledAvatar>
            </Grid>
            {sliderOpen?
                <Grid item xs={6}>
                <Typography variant='subtitle2'  sx={{textTransform:'none'}}>
                    Trivia
                </Typography>
            </Grid>
            :''}
        </Grid>
        {<br/>}
        <Divider/>
        {<br/>}
        {sliderOpen?
            <Box sx={{
                    borderRadius:'10px',
                    padding:'10px',
                    display:'flex-box',
                    justifyContent:'center',
                    textAlign:'center',
                    backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(255,255,255,0))',
                    backgroundColor:'rgba(0,0,0,0.2)',
                    backdropFilter:"blur(10px)"
                    }}>
            <StyledAvatar sx={{width:'100%',selfAlign:'center'}}>
                <SportsEsportsIcon/>
            </StyledAvatar>
            <Typography variant='subtitle2'  sx={{textTransform:'none', textAlign:'center'}}>
                    Polybius
            </Typography>
        </Box>
        :
        <StyledAvatar>
            <SportsEsportsIcon />
        </StyledAvatar>  
        }
        
    </StyledBar>
  )
}

export default SideBar