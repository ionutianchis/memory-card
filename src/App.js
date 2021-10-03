/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Scoreboard from './components/Scoreboard'
import Cards from './components/Cards'
import './styles/App.css'

const App = () => {
  const [score, setScore] = useState(0)

  const [highScore, setHighScore] = useState(0)
  
  const [announcement, setAnnouncement] = useState('')

  const [card, setCard] = useState([
    {
      name: 'Ned Stark',
      image: 'ned'
    },
     {
      name: 'Robert Baratheon',
      image: 'robert'
    },
    {
      name: 'Barristan Selmy',
      image: 'selmy'
    },
    {
      name: 'Jon Snow',
      image: 'jon'
    },
    {
      name: 'Tyrion Lannister',
      image: 'tyrion'

    },
    {
      name: 'Jaime Lannister',
      image: 'jaime'
    },
    {
      name: 'Daenerys Targaryen',
      image: 'daenerys'
    },
    {
      name: 'Jorah Mormont',
      image: 'jorah'
    },
    {
      name: 'Arthur Dayne',
      image: 'arthur'
    } 
  ])
  return (

    <div className="container">

      <Scoreboard score={score} highScore={highScore} announcement={announcement}/>
      <Cards card={card} score={score} setScore={setScore} setHighScore={setHighScore} setAnnouncement={setAnnouncement}/>
    
    </div>
  );
}

export default App;
