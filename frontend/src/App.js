import React from 'react'
import AboutHeader from './components/aboutHeader/AboutHeader';
import HomeContact from './components/contact/HomeContact';
import Footer from './components/footer/Footer';
import FormatLearning from './components/formatLearning/FormatLearning';
import ForWhom from './components/forWhom/ForWhom';
import Header from './components/header/header';
import HowIsWork from './components/main/howIsWork/HowIsWork';
import Specialties from './components/specialtiesBlock/Specialties';
import Statistic from './components/statistic/Statistic';

function App() {
  return (
    <div fluid className='mt-4'>
      <Header />
      <AboutHeader />
      <HowIsWork />
      <Specialties />
      <ForWhom />
      <Statistic />
      <FormatLearning />
      <HomeContact />
      <Footer/>
    </div>
  );
}

export default App;
