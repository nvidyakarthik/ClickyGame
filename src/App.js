import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import GameCard from './components/GameCard';
import cardImages from './cardImage.json';

/* function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
} */
class App extends Component {
  state = {
    cardImages
  };
  shuffleImages = () => {
   
    //this.State.cardImages=shuffle(this.state.cardImages);
    
    //const cardImages=shuffle(this.State.cardImages); 
    //console.log(cardImages);
    const cardImages=[{  
      "id": 1,
      "name": "SpongeBob",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    }];
    // Set this.state.friends equal to the new friends array
    this.setState(cardImages);
  };
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
        <div className="row">
        {this.state.cardImages.map(cardImage => (
        
        <GameCard 
          id={cardImage.id}
          key={cardImage.id}
          image={cardImage.image}
          onClick={this.shuffleImages}
          
        />
        
      ))}
      </div>
      </div>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
