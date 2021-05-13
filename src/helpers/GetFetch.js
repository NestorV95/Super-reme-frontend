const GetFetch = (url) => {
    let req = {
        method: 'GET',
        headers: {'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer <token>'}
    }
    fetch(url, req)
        .then(res=> res.json())
        .then(data=>{return data})
}
   




export default GetFetch;