import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import {  products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  isSideBarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: []
  }


const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSideBar = () => {
    dispatch({type: SIDEBAR_OPEN})
  }
    const closeSideBar = () => {
      dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const resp = await axios(url);
      const products = await resp.data;
      dispatch({type: GET_PRODUCTS_SUCCESS, payload: products})
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
    
  }
  
  useEffect(() => {
    fetchProducts(url)
  }, [])
  
  const fetchSingleProducts = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const resp = await axios.get(url);
      const singleProduct = await resp.data;
      dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct})
    } catch (error) {
      dispatch({type: GET_SINGLE_PRODUCT_ERROR})
    }
  }
 
  return (
    <ProductsContext.Provider
      value={{ ...state, openSideBar, closeSideBar, fetchSingleProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
