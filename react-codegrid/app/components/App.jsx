import React from 'react';

import Header from './Header.jsx';
import Container from './Container.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  render() {
    const { listItems } = this.props;

    return (
      <div>
        <Header />
        <Container listItems={listItems} />
        <Footer />
      </div>
    );
  }
}

export default App;
