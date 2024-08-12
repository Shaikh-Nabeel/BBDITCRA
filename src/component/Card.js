import { CiStar } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addWatchlist, removeWatchlist } from "../actionCreator/Actions";
import { useSelector } from "react-redux";

function Card({ item, from }) {
    

    const watchlist = useSelector(state => state.idState.ids);
    const isWatchListItem = watchlist.some(watchlistItem => watchlistItem.id === item.id);
    console.log(isWatchListItem);
    const dispatch = useDispatch();

    var data = {};
    if(from === 'top10') {
        data = { id: item.id, image: item.small, name: item.name, symbol: item.symbol, current_price: item.data.price, price_change_24h: item.data.price_change_percentage_24h.usd };
    } else {
        data = { id: item.id, image: item.image, name: item.name, symbol: item.symbol, current_price: item.current_price, price_change_24h: item.price_change_24h };
    }
    const handleWatchlistToggle = () => {
        console.log("handleWatchlistToggle");
        if (isWatchListItem) {
            dispatch(removeWatchlist(data));
        } else {
            dispatch(addWatchlist(data))
        }
    };

    return (
        <div className="w-full border shadow-lg rounded-lg flex flex-col p-2 bg-cyan-500">
            <div className="flex gap-4 w-full" >
                <img src={from === 'top10' ? item.small : item.image} alt="image" className="h-20" />
                <div className="flex items-center w-full">
                    <div className="flex flex-col">
                        <h2>{item.name}</h2>
                        <p>{item.symbol}</p>
                        <p className="font-bold">Price: ${from === 'top10' ? item.data.price.toFixed(4) : item.current_price.toFixed(4)}</p>
                    </div>
                    <div className="ml-auto mr-4 size-10" onClick={handleWatchlistToggle}>
                        {isWatchListItem ? <FaStar size="30px"></FaStar> : <CiStar size="30px"></CiStar >}
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <div className="border px-4 py-2 text-[25px] rounded-3xl border-green-500 shadow-lg gap-5 mt-4">
                    ${from === 'top10' ? item.data.price_change_percentage_24h.usd.toFixed(4) : (item.price_change_24h.toFixed(4))}
                </div>
                <div className="flex items-center ml-2 mt-3">
                    {from === 'top10' ? (item.data.price_change_percentage_24h.usd > 0 ? <FaArrowTrendUp color="green" size="30px" /> : <FaArrowTrendDown color="red" size="30px" />) : (item.price_change_24h > 0 ? <FaArrowTrendUp color="green" size="30px" /> : <FaArrowTrendDown color="red" size="30px" />)}
                </div>
            </div>
        </div>
    );
}

export default Card;