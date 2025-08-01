import { IMenuItems, IRestaurant } from "../interfaces/restaurant";
import { menuItemsList, restaurantsList } from "./jsonData";

export const getAllRestaurant = async (): Promise<IRestaurant[]> => {
  return await new Promise((resolve, reject) => {
    const allRestaurant = restaurantsList;
    resolve(allRestaurant);
    reject(null);
  });
};

export const getRestaurantById = async (id: string): Promise<IRestaurant> => {
  return await new Promise((resolve, reject) => {
    const filteredRestaurant = restaurantsList.find((restaurant) => {
      return restaurant._id === id;
    });

    if (filteredRestaurant) {
      resolve(filteredRestaurant);
    }
    reject(null);
  });
};

export const getItemsByRestaurantId = async (
  restaurantId: string
): Promise<IMenuItems[]> => {
  return await new Promise((resolve, reject) => {
    const filteredMenuItems = menuItemsList.filter((item) => {
      return item.restaurantId.toString() === restaurantId.toString();
    });
    resolve(filteredMenuItems);
    reject(null);
  });
};