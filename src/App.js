import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import GameCard from './components/GameCard';
import Title from './components/Title';
import Message from './components/Message';
import ScoreCard from './components/ScoreCard';
import cardImages from './cardImage.json';

const shuffle=(imageArray)=> {
  let j, x, i;
  for (i = imageArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = imageArray[i];
      imageArray[i] = imageArray[j];
      imageArray[j] = x;
  }
  return imageArray;
}


class App extends Component {
  
  state = {
    cardImages

     
  };
  shuffleImages = id => {    
    const cardImages=shuffle(this.state.cardImages); 
    this.setState(cardImages); 
    
  };
  render() {
    return (
      <div className="App">
        <Header>
          <Title>Clicky Game!</Title>
          <Message message={"Click an image to begin!"}/>
          <ScoreCard score={0} topscore={0}/> 
        </Header>  
        <div className="container">
        <div className="row">
        {this.state.cardImages.map(cardImage => (
        <div className="col-md-3">
        <GameCard 
          id={cardImage.id}
          key={cardImage.id}
          image={cardImage.image}
          shuffleImage={this.shuffleImages}
        />
        </div>
      ))}
      </div>
      </div>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
