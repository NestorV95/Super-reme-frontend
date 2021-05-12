
const initialState = {
    loading: false,
    products: [],
    error:false
} 

const productReducer = (state= initialState, action) =>{
    switch (action.type){
        case 'FETCH_PRODUCTS_SUCCESS':
            return{
                loading: false,
                products: action.payload,
                error: null
            }
        case 'FETCH_PRODUCTS_FAILURE':
            return{
                loading: false,
                products: [],
                error: action.payload
            } 
        default: return state
    }
}

export default productReducer