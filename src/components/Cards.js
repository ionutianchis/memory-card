/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from 'react'
import '../styles/cards.css'

const Cards = ({ card, score, setScore, setHighScore, setAnnouncement}) => {

    const [picked, setPicked] = useState([])
    
    const [highestScore, setHighestScore] = useState([0])
    
    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const pickLogic = (item) => {
        setPicked([...picked, item])
        if (!picked.includes(item)) {
            setScore(score + 1)
        } else if (picked.includes(item)) {
            setHighestScore([...highestScore, score])
            setScore(0)
            setPicked([])
        }
    }
    
    useEffect(() => {
        shuffle(card)
        setHighScore(Math.max(...highestScore))
        if (score === 9) {
            setAnnouncement('Congrats, you won !')
        }
    })

    return (
        <div className='cards'>
            {   
                card.map((item, index) => {
                    return (
                        <div key={index} className='card' onClick={(() => pickLogic(item.name))}>
                        <img src={require('../images/' + item.image + '.png').default} alt={item.name}/>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Cards