import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/cartSlice";

export const Card = ({product}) => {  
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productInCart = cartItems.find(items => items.id === product.id);

    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartItems, product.id]);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img className="p-8 rounded-t-lg w-full" src={product.imgSrc} alt={product.name} />
      </a>
      
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </a>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          
          {isInCart ? (<button onClick={() => dispatch(remove(product))} className="bg-red-600 p-3 rounded-md text-white">Remove</button>) : (<button onClick={() => dispatch(add(product))} className="bg-blue-600 p-3 rounded-md text-white">Add to cart</button>)}          
        </div>
      </div>
    </div>    
  )
}