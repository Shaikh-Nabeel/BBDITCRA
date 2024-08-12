import { useSelector } from "react-redux";
import LoadingSpinner from "../component/LoadingSpinner";
import Cards from "../component/Cards";


function Watchlist(){
    const ids = useSelector(state => state.idState.ids);
    const from = 'watchlist';
    console.log(ids);
    return  (
            <Cards apiData={ids} from={from} />
    );
}

export default Watchlist;