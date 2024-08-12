import LoadingSpinner from "../component/LoadingSpinner";
import { useState,useEffect } from "react";
import Cards from "../component/Cards";

function Top10() {
    const [data, setData] = useState([])
    const from = 'top10';
    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/search/trending?per_page=15&page=1", {
            method: 'GET', // or 'POST', 'PUT', etc.
            headers: {
                'Content-Type': 'application/json' // Replace 'your_token_here' with your actual token
            }
        })
       .then((response) => response.json())
       .then((responseData) => {
        console.log("responseData", responseData);  // inspect response as needed  // here we are getting top 10 trending coins from the api. You can modify this to get other categories of coins.  // setData(responseData.coins) will set the data to state, and Cards component will render with the data.  // In case you want to fetch data for specific category, replace 'trending' with the category name. For example, 'markets',
        setData(responseData.coins)
       });

    }, []);

    if (data.length == 0) {
        return <LoadingSpinner />;
    } else {
        return (
            <div>
                <Cards apiData={data} from={from} />
            </div>
        );
    }
}

export default Top10;