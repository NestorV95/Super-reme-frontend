
const opt={
    method: 'GET',
    headers: {'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer <token>'}
}

const useFetch = (url,req=opt) => {
    fetch(url,opt)
        .then(res=> res.json())
        .then(data=>{return data})
}
   




export default useFetch;
