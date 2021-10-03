/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../styles/scoreboard.css'

const Scoreboard = ({score, highScore, announcement}) => {

    return (
        <div className='scoreboard'>
            <p>Current score: {score}</p>
        
            <p>High score: {highScore}</p>
        
            <p>{announcement}</p>
        </div>
    )

}

export default Scoreboard
