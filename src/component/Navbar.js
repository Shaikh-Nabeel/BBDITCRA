import { Link } from 'react-router-dom';

function Navbar(props) {
    console.log(props);
    return (
        <div className="flex justify-between items-center px-2 border shadow-md sticky top-0 bg-white">
            <h1 className="text-[50px] font-bold text-blue-800 font-sans">Nabeel</h1>
            <navitems className='flex text-[25px] gap-5 text-yellow-500'>
                <Link to='/top10'> <p className="cursor-pointer">Top10</p> </Link>
                <Link to='/trending'><p>Trending</p> </Link>
                <p>About</p>
                <p>Contact</p>
            </navitems>
        </div>
    );
}

export default Navbar;