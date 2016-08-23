import React from 'react';

import Header from './Header.jsx';
import Container from './Container.jsx';
import Footer from './Footer.jsx';

import styles from '../style.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
