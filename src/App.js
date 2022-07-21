import './App.css';
import {Container} from '@mui/material';
import SideBar from './components/SideBar';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from './theme/theme';
import LoginPage from './components/LoginPage';
import TicTacToe from './components/TicTacToe';
import {useState} from 'react';



function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  return (
    <ThemeProvider theme={theme}>
       <Container 
       maxWidth='100%'
        disableGutters={true} 
        sx={{
          display:'inline-flex',
          flexWrap:'wrap',
          gap:'10px', 
          padding:'30px',
          backgroundImage:theme.palette.primary.gradient,
          width: width,
          height: height,
          overflow:'hidden'
        }}>
        <SideBar/>
        <TicTacToe/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
