import {IonContent,IonPage} from '@ionic/react';
import './HomeScreen.scss';
import FilterComponent from '../components/homecomponents/FilterComponent';
import HomeBanner from '../components/homecomponents/HomeBanner';
import RestaurantCard from '../components/homecomponents/RestaurantCard';

import { useEffect, useState } from 'react';
import { getAllRestaurant } from '../services/api';
import { IRestaurant } from '../interfaces/restaurant';
import { Link } from 'react-router-dom';
const HomeScreen: React.FC =() => {
  const[allRestaurant,setAllRestaurant]=useState<IRestaurant[]>()
  useEffect(()=>{
    void getAllRestaurant().then((response)=>{
      setAllRestaurant(response)

    },)

  },[])
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='home_screen'>
          <div className='header_section'>
            <FilterComponent/>
          </div>
          <div className='body_section'>
            <div className="banner_section">
            <HomeBanner/></div>
            <div className="restaurant_section">
              {allRestaurant && allRestaurant.map((restaurant,restaurantIndex)=>{
                return(
                  <div key={restaurantIndex} ><Link to={`restaurant-menu/${restaurant._id}`}>
                  <RestaurantCard restaurantData={restaurant}/></Link></div>
                  
                )
              })}
              
            </div>
            
          </div>
          
        </div>

      </IonContent>
    </IonPage>
  )
}

export default HomeScreen
