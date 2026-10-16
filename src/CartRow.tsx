interface CartRowProps {
  title: string;
  price: number;
  image: string;
  quantity: number;
  onRemoveFromCart: () => void;
}

function CartRow({ title, price, image, quantity, onRemoveFromCart }: CartRowProps) {
  return (
    <div className="cart-row">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>تعداد: {quantity}</p>
      <p>{(price * quantity).toLocaleString()} تومان</p>
      <button onClick={onRemoveFromCart}>−</button>
    </div>
  );
}

export default CartRow;