import React from 'react'
import "./RestaurantCard.scss"
import { FaStar } from "react-icons/fa6";

const RestaurantCard:React.FC = () => {
  return (
    <div className='restaurant_card'>
        <div className="image_section">
            <img src="/public/assts/homeScreen/restaurant/restaurant-card.jpg" alt="" />
        </div>
        <div className="content_section">
            <div className="title">
               Lorem, ipsum dolor.

            </div>
            <div className="description">
                Lorem ipsum dolor sit amet.
            </div>
            <div className="rating_section">
                <div className="offer">
                    Lorem, ipsum dolor.
                </div>
                <div className="rating">
                    
                    
                   <FaStar />
                   <span>4.6</span> 
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default RestaurantCard
