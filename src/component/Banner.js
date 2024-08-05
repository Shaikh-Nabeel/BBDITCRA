import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';

function Banner(){
    let slider = "slider1";
    // setInterval(function(){
    //     if(slider === "slider1") {
    //         slider = "slider2";
            
    //     } else if(slider === "slider2") {
    //         slider = "slider3";
    //     } else if(slider === "slider3") {
    //         slider = "slider1";
    //     }
    // }, 1500);
    console.log(slider);
    return (
        <div>
            
            <img className='h-[700px] w-full' src={slider1} alt="" />
            <img className='h-[700px] w-full hidden' src={slider2} alt="" />
            <img className='h-[700px] w-full hidden' src={slider3} alt="" />
        </div>
    );
}
 




export default Banner;