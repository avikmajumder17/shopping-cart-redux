import { useSelector } from "react-redux";
import { CardCart } from "../../components/CardCart/CardCart";
import { useTitle } from "../../hooks/useTitle";

export const Cart = () => {
  useTitle(`Cart`);

  const products = useSelector(state => state.cartState.cartList)
  const total = useSelector(state => state.cartState.total)

  return (
    <div className="cart-wrapper">
      <div className="text-center mb-20">
        <h2 className="font-medium text-3xl">Cart Items: {products.length} | ${total} </h2>
      </div>

      {products.map((product) => (
        <CardCart key={product.id} product={product} />
      ))}      
    </div>
  )
}