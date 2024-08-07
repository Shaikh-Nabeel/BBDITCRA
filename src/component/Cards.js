import React from "react";
import Card from "./Card"
const Cards = ({ apiData }) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 sm:grid-cols-2 m-4 xl:grid-cols-4">
            {apiData.map(obj => <Card key={obj.id} item={obj} />)}
        </div>
    );
};

export default Cards;