
const opt={
    method: 'GET',
    headers: {'Content-Type':'application/json','Accept':'application/json'}
}

const UseFetch = (url,req=opt) => {
    fetch(url,opt)
        .then(res=> res.json())
        .then(data=>{return data})
}
   




export default UseFetch;
