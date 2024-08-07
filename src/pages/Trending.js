import Cards from '../component/Cards';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../component/LoadingSpinner';

function Trending(){
    // var data = 1;
    // var data2  = 'Card 2';
    // var [example, setExample] = useState(0);
    // useEffect(()=>{
    //     console.log('on birth ');
    //     var intervalId = setInterval(()=>{
    //         console.log('plzzz loginnn');
    //     },1000);
    //     return ()=>{
    //         console.log('inside return effect');
    //         clearInterval(intervalId);
    //     };

    // },[]);

    // function increaseExample(){
    //     setExample(example+1);
    // }

    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd&per_page=100&page=1",{
            method: 'GET', // or 'POST', 'PUT', etc.
            headers: {
              'Content-Type': 'application/json' // Replace 'your_token_here' with your actual token
            }
          }).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log("reponseeeeee", response);  // inspect response as needed
            setData(response);  
            return "";
        });
    }, []);

    if(data.length == 0) {
        return <LoadingSpinner/>;
    }else{
        return (
            <div>
               <Cards apiData={data}/>
            </div>
        );
    }
    
    
}

export default Trending;