import React from "react";
import Card from "./Card"
const Cards = ({ apiData, from }) => {
    // console.log("items :::::: ", apiData);
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 sm:grid-cols-2 m-4 xl:grid-cols-4">
            {
                from === 'top10' ? apiData.map(obj => <Card key={obj.item.id} item={obj.item} from={from} />) : apiData.map(obj => <Card  item={obj} from={from} />)
                
            }
        </div>
    );
};

export default Cards;