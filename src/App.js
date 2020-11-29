import { Container } from 'react-bootstrap';
import MainPage from './Components/MainPage/MainPage';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <Container>
    <NavBar></NavBar>
    <MainPage></MainPage>
    </Container>
    </>
  );
}

export default App;
