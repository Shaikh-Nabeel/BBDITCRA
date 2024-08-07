import React from "react";
import Card from "./Card"
const Cards = ({ apiData }) => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-4 sm:grid-cols-3 ">
            {apiData.map(obj => <Card key={obj.id} item={obj} />)}
        </div>
    );
};

export default Cards;