import './App.css';
import {Container} from '@mui/material';
import SideBar from './components/SideBar';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from './theme/theme';
import LoginPage from './components/LoginPage';



function App() {
  return (
    <ThemeProvider theme={theme}>
       <Container 
        maxWidth="100%" 
        disableGutters={true} 
        sx={{
          display:'inline-flex',
          flexWrap:'wrap',
          gap:'10px', 
          padding:'30px',
          backgroundImage:theme.palette.primary.gradient
        }}>
        <SideBar/>
        <LoginPage/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
