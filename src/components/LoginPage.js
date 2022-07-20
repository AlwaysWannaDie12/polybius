import {Grid, Input, Paper, Typography} from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';


const Page = styled(Paper)(({theme}) => ({
    height:'100%',
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

function LoginPage() {
  return (
    <Page>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h5">
                    Login
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body">
                    Username:
                </Typography>
                <Input>
                </Input>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body">
                    Password:
                </Typography>
                <Input>
                </Input>
            </Grid>
        </Grid>
    </Page>
  )
}

export default LoginPage