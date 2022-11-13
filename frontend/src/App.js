import React from 'react'
import { Container } from 'react-bootstrap';
import AboutHeader from './components/aboutHeader/AboutHeader';
import ForWhom from './components/forWhom/ForWhom';
import Header from './components/header/header';
import HowIsWork from './components/main/howIsWork/HowIsWork';
import Specialties from './components/specialtiesBlock/Specialties';
import Statistic from './components/statistic/Statistic';

function App() {
  return (
    <Container fluid className='mt-4'>
      <Header />
      <AboutHeader />
      <HowIsWork />
      <Specialties />
      <ForWhom />
      <Statistic/>
    </Container>
  );
}

export default App;
