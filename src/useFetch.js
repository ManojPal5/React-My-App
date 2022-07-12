import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCtr = new AbortController();
        setTimeout(() => {
            fetch (url, {signal: abortCtr.signal})
            .then((res)=>{
                if(res.ok)
                {
                    return res.json();
                }else{
                    throw Error("Error in fetching the data: Wrong End Point");
                }
            })
            .then((data)=>{
                console.log(data);
                setdata(data);
                setIsPending(false);
            })
            .catch((err)=>{
                if (err.name === 'AbortError'){
                    console.log("Fetch Aborted");
                }else{
                    setError (err.message);
                    setIsPending(false);
                }
            })
         }, 1000);
        return ()=>abortCtr.abort();
    }, [url]);

    return {data, isPending, error}
}
 
export default useFetch;