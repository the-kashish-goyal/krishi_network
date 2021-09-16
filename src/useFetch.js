import { useState, useEffect } from "react";

const useFetch = (url)=>{
    const[data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const[error,setError] = useState(null);
    useEffect(() =>{
        const abortCont = new AbortController();
            // console.log('use effect ran');
            fetch(url, { signal: abortCont.signal })
              .then(res => {
                  if(!res.ok){
                      throw Error('could not fetch the data from that resource');
                  }
                  console.log(res);
                  return res.json();
              })
              .then(data =>{
                //   console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
              })
              .catch(err =>{
                  if(err.name === 'AbortError'){
                      console.log('Fetch aborted');
                  }else{
                      console.log(err.message);
                      setIsPending(false);
                      setError(err.message);
                  }
              })
        
        return ()=> abortCont.abort();
    }, [url]);
    return { data, isPending, error};
}

export default useFetch;
