import {Grid, Input, Paper, Typography,Box} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';

const Page = styled(Paper)(({theme}) => ({
    height:'90%',
    flexGrow: 4,
    padding:'30px',
    backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(255,255,255,0))',
    backgroundColor:'rgba(0,0,0,0.5)',
    backdropFilter:"blur(10px)",
    boxShadow: '4px 4px 4px rgba(30,30,30,0.2)',
    color: theme.palette.primary.contrastText,
    textOverflow:'clip',
    display:'flex',
    alignContent:'center',
    justifyContent:'center',
    textAlign:'center'
}))

function TicTacToe() {
  return (
    <Page>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <CloseRoundedIcon sx={{width:'26px', height:'26px'}}/>
                <MinimizeRoundedIcon/>
                <Box sx={{color:'white', borderRadius:'20px'}}/>
            </Grid>
            <Grid item xs={12}>
               
            </Grid>
        </Grid>
    </Page>
  )
}

export default TicTacToe