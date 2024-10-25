import { CLOUDINARY_IMAGE } from "../utils/constants";

const RestaurantCard = ({resdata})=>{

    const cuisines= resdata?.info?.cuisines.slice(0,3);
    return (

        <div className="res-card">
            <img className="res-img" src={CLOUDINARY_IMAGE+resdata.info.cloudinaryImageId} alt= "res-card"/>
            <h2 style={{margin:"16px"}}>{resdata?.info?.name}</h2>
            <h3 style={{margin:"16px"}}>{resdata?.info.avgRatingString+"⭐"+" "+resdata?.info?.sla.deliveryTime+" min"}</h3>
            <h4 style={{margin:"16px"}}>{ cuisines.join(",")}</h4>
            <h3 style={{margin:"16px"}}>{resdata?.info?.costForTwo}</h3>
        </div>
    )
}

export default RestaurantCard;