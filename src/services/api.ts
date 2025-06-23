import { IRestaurant } from "../interfaces/restaurant"
import { restaurantList } from "./jsonData"

export const getAllRestaurant = async():Promise<IRestaurant[]>=>{
   return await new Promise((resolve,reject)=>{

    const allRestaurants = restaurantList
    resolve(allRestaurants)
    reject(null)
    }
)
}

