import { Link } from 'react-router-dom';
import { LiaEthereum } from "react-icons/lia";

function Navbar(props) {
    console.log(props);
    return (
        <div className="flex justify-between items-center px-2 sticky shadow-lg top-0 bg-gray-800" >
            <div className="flex items-center">
                <LiaEthereum className="size-16 text-gray-200" /> 
                <h2 className="text-[50px] font-bold text-gray-400 font-sans">Ethereum</h2>
            </div>
            <navitems className='flex text-[20px] gap-5 text-gray-400 font-medium'>
                <Link to='/top10'> <p className="cursor-pointer">Top10</p> </Link>
                <Link to='/trending'><p>Trending</p> </Link>
                <p>About</p>
                <p>Contact</p>
            </navitems>
        </div>

        
    );
}

export default Navbar;