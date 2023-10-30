import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    // const {name, cuisines, avgRating, cloudinaryImageId} = restaurant.info;
        return (
        <div className="w-52 rounded-xl ">
            <img className="h-44 w-full object-cover rounded-xl" src={IMG_CDN_URL + cloudinaryImageId}/>
            <h2 className="text-lg font-bold">{name}</h2>
            {/* <h3>{cuisines.join(", ")}</h3> */}
            <h3>Temp text</h3>
            <div className="flex items-center gap-1"> 
                <img className="h-5" src="https://purepng.com/public/uploads/large/purepng.com-green-starstargeometricallydecagonconcavestardomclipartgreen-1421526503700o6cix.png" alt="" />
                {avgRating}</div>
        </div>
    );
};
export default RestaurantCard;