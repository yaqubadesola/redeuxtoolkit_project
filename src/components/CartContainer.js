import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import {clearCart} from '../features/cart/cartSlice'
const CartContainer = () => {
    const dispatch = useDispatch()
    const {cartItems, amount,total, cart} = useSelector(state => state.cart)

    // if(amount < 1){
    //     return (
    //         <section className='cart'>
    //             <header>
    //                 <h2>Your Bag</h2>
    //                 <h4 className='empty-cart'>is currently empty</h4>
    //             </header>
    //         </section>
           
    //       )
    // }

    return (
        <section className='cart'>
            <header>
                <h2>Your Bag</h2>
                {cartItems.map((item,index) => <CartItem {...item} key={index} />)}
            </header>
            <footer>
                <hr/>
                <div className='cart-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <div onClick={() => dispatch(clearCart())} className="btn clear-btn">Clear Cart</div>
            </footer>
        </section>
       
    )
  
}

export default CartContainer