import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import { calculateTotals } from './features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  const {amount, total, cartItems} = useSelector(state => state.cart)
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  

  return (
    <main>
      <NavBar/>
      <CartContainer/>
    </main>
  )
}
export default App;
