import {Paper,Typography, Avatar, Grid, Divider, Box, Button} from '@mui/material'
import { ThemeProvider, styled } from '@mui/material/styles';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import {useState} from 'react';
import {theme} from '../theme/theme';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import EventIcon from '@mui/icons-material/Event';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';
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
        height:'100%',
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
                    <GroupsIcon/>
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
                    <SupervisorAccountIcon/>
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
                    <EventIcon/>
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
                    <CastForEducationIcon/>
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
                    Sodoku
                </Typography>
            </Grid>
            :''}
        </Grid>
        {<br/>}
        <Grid container spacing={0} component={NavButton} disableRipple>
            <Grid item xs={3}>
                <StyledAvatar>
                    <ChatIcon/>
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
            <Box sx={{borderStyle:'dotted', borderRadius:'10px',padding:'10px',display:'grid',textAlign:'center'}}>
            <StyledAvatar sx={{marginLeft:'65px'}}>
                <AddIcon/>
            </StyledAvatar>
            <Typography variant='subtitle2'  sx={{textTransform:'none', textAlign:'center'}}>
                    Upload new Class
                </Typography>
        </Box>
        :
        <StyledAvatar>
            <AddIcon />
        </StyledAvatar>  
        }
        
    </StyledBar>
  )
}

export default SideBar