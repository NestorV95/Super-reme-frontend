import {useState, useEffect} from 'react'

const opt={
    method: 'GET',
    headers: {'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer <token>'}
}

const useFetch = (url,req=opt) => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        fetch(url,req)
            .then(res=>res.json())
            .then(data=>setData(data))
        },[url,req])
    return {data}
}
export default useFetch;
