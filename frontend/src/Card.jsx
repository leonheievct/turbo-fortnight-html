import React from 'react'
import './Card.css'
const Card = () => {
    return (
        <div className='card'>
            <img className='pizza_image' src="https://media.dodostatic.net/image/r:584x584/0198bf283b2372ea8e7cfc8adae9ea84.avif" alt="" />
            <h3 className='pizza_name'>3 пиццы 35 см</h3>
            <p className='pescription'>Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус</p>
            <div className='blog_choise'>
                <p className='price'>1875 Руб.</p>
                <button className='choise'>Выбрать</button>
            </div>
        </div>
    )
}

export default Card