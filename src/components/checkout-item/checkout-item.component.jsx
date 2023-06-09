import {CheckoutItemContainer, ImageContainer, Quantity, Arrow, Value, RemoveButton, BaseSpan} from './checkout-item.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({cartItem}) => {
    const {name,imageUrl,price,quantity} = cartItem;
    const {clearItemFromCart,addItemToCart,removeItemToCart} = useContext(CartContext);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan className='name' >{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler} >
                    &#10094;
                </Arrow>
                <Value >{quantity}</Value>
                <Arrow onClick={addItemHandler} >
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan className='price' >{price}</BaseSpan>
            <RemoveButton onClick={() => clearItemFromCart(cartItem)} >&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;