import {CartDropDownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';


const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <CartDropDownContainer>
            {cartItems.length ? (<CartItems> 
                {cartItems.map((item) =>( <CartItem key={item.id} cartItem={item} />))}
            </CartItems>):(
                <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
            </CartDropDownContainer>
    );
};

export default CartDropdown;