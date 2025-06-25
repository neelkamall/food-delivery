import { IMenuItems, IRestaurant } from "../interfaces/restaurant"
import { menuItemsList, restaurantsList } from "./jsonData"

export const getAllRestaurant = async():Promise<IRestaurant[]>=>{
   return await new Promise((resolve,reject)=>{

    const allRestaurants = restaurantsList
    resolve(allRestaurants)
    reject(null)
    }
)
}
export const getItemsByRestaurantId=async(restaurantId:string):Promise<IMenuItems[]> =>
   { return await new Promise ((resolve,reject)=>{
        
        const filteredMenuItems = menuItemsList.filter((item)=>{
           return item.restaurantId === restaurantId;
        })
        resolve(filteredMenuItems)
        reject(null)
    

    })}

