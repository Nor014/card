import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'



class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Card img={'https://leonardo.osnova.io/6183d63f-9709-430f-87a1-2eb48cf72f44/-/scale_crop/700x393/center/-/format/webp/'}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>

        <Card >
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>
      </>
    );
  }
}

export default App;
