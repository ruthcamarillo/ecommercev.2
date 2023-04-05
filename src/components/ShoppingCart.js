import React, { useState } from "react";

const ShoppingCart = ({ cartItems, onAddItem, onRemoveItem, products }) => {
  const [showCart, setShowCart] = useState(false);

  const handleToggleCart = () => setShowCart(!showCart);

  const handleAddItem = (item) => {
    onAddItem(item);
    setShowCart(true);
  };

  const handleRemoveItem = (item) => {
    onRemoveItem(item);
    setShowCart(true);
  };

  const totalItems = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <div className="shopping-cart">
      <button onClick={handleToggleCart}>Cart ({totalItems})</button>
      {showCart && (
        <div className="cart-items">
          {cartItems.map((item) => {
            const product = products.find((p) => p.id === item.id);
            return (
              <div key={item.id}>
                <span>{product.title} x {item.quantity}</span>
                <button onClick={() => handleAddItem(item)}>+</button>
                <button onClick={() => handleRemoveItem(item)}>-</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;