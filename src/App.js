import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import './App.css';
import GameCard from './components/GameCard/GameCard.js';
import Title from './components/Title/Title.js';
import Message from './components/Message/Message.js';
import ScoreCard from './components/ScoreCard/ScoreCard.js';
import cardImages from './cardImage.json';
import GameContainer from './components/GameContainer/GameContainer.js';

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
    cardImages,
    score:0,
    topscore:0,
    message:"Click an image to begin!",
    clickedCard:[]     
  };
  shuffleImages = (id) => {    
    const cardImages=shuffle(this.state.cardImages); 
    if(this.state.clickedCard.indexOf(id)===-1){
      this.state.clickedCard.push(id);
      this.setState({
        cardImages,
        score:this.state.score+1,
        topscore:this.state.score>=this.state.topscore?this.state.topscore+1:this.state.topscore,
        message:"You guessed correctly!",
        clickedCard:this.state.clickedCard,
      }); 

    }
    else{
      this.setState({
        cardImages,
        score:0,
        topscore:this.state.topscore,
        message:"You guessed incorrectly!",
        clickedCard:[]
      }); 

    }
    
  };
  render() {
    return (
      <div className="App">
        <Header>
          <Title>Clicky Game!</Title>
          <Message message={this.state.message}/>
          <ScoreCard score={this.state.score} topscore={this.state.topscore}/> 
        </Header> 
        <GameContainer> 
          <div className="row">
            {this.state.cardImages.map(cardImage => (
               <div className="col-xs-12 col-md-3">
                  <GameCard 
                      id={cardImage.id}
                      key={cardImage.id}
                      image={cardImage.image}
                      shuffleImage={this.shuffleImages}
                  />
                </div>
            ))}
          </div>
        
        </GameContainer>
        <Footer/>        
      </div>
    );
  }
}

export default App;
