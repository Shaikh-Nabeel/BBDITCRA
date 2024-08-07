import cards from '../images/cards.png';
import slider1 from '../images/crypto_bg2.webp';


function Home() {
    return (
        <div className="min-h-screen">
            <div className="w-full flex justify-between items-center bg-gray-800 p-8 bg-cover bg-center backdrop-blur-0 h-[600px]" style={{ backgroundImage: `url(${slider1})` }}>

                <div className='p-7 border shadow-lg rounded-2xl backdrop-blur-md'>
                     <h2 className="font-bold text-[24px] text-white">
                        Create Your Own Crypto Currency.
                    </h2>
                    <p className='text-gray-400'>Deploy your contract on <br/> Ethereum Blockchain Network.</p>
                </div>
                <div className='h-[400px]'>
                    <img src={cards} alt="Image" className='h-[400px]'/>
                </div>
            </div>
        </div>
    );
}

export default Home;