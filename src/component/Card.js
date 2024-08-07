import { CiStar } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

function Card({ item }) {
    return (
        <div className="w-full border shadow-lg rounded-lg flex flex-col p-2 bg-cyan-500">
            <div className="flex gap-4 w-full" >
                <img src={item.image} alt="image" className="h-20" />
                <div className="flex items-center w-full">
                    <div className="flex flex-col">
                        <h2>{item.name}</h2>
                        <p>{item.symbol}</p>
                        <p className="font-bold">Price: ${item.current_price}</p>
                    </div>
                    <div className="ml-auto mr-4 size-10">
                        <CiStar size="30px"></CiStar >
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <div className=" border px-4 py-2 text-[25px] rounded-3xl border-green-500 shadow-lg gap-5 mt-4">
                    ${parseFloat(item.price_change_24h.toFixed(4))}
                </div>
                <div className="flex items-center ml-2 mt-3">
                    {item.price_change_24h >0 ? <FaArrowTrendUp color="green" size="30px"/> : <FaArrowTrendDown color="red" size="30px"/>}
                    
                </div>

            </div>
        </div>
    );
}

export default Card;