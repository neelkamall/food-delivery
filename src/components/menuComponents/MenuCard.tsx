import React from 'react'
import "./MenuCard.scss"

const MenuCard:React.FC = () => {
  return (
    <div>
        <div className='menu_card'>
            <div className="image_section">
                <img src="" alt="" />
            </div>
            <div className="content_section">
                <div className="title">Lorem, ipsum dolor.</div>
                <div className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, itaque.</div>
                <div className="button">Add Item</div>
            </div>
        </div>
      
    </div>
  )
}

export default MenuCard
