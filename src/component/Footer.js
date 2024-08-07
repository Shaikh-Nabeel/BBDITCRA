import { FaWhatsapp, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

function Footer(){

    return(
        <div className="flex justify-between gap-5 border shadow-[16px] py-5 px-4 bottom-0 sticky w-full bg-white">
            <h1 className="text-[24px] font-bold">Footer</h1>
            <div className="flex gap-3">
                <FaWhatsapp className="size-5" color="green"></FaWhatsapp>
                <FaFacebook className="size-5" color="blue"></FaFacebook>
                <FaGithub className="size-5"></FaGithub>
                <FaYoutube className="size-5" color="red"></FaYoutube>
            </div>
        </div>
    );
}

export default Footer;