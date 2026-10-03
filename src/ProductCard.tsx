interface ProductCardProps{
    title: string;
    price: number;
    image: string;
    onAddToCart: () => void;
}

function ProductCard({title, price, image, onAddToCart}: ProductCardProps) {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-img" />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">{price}</p>
                <button className="add-to-cart-btn" onClick={onAddToCart}>افزودن به سبد خرید</button>
            </div>
        </div>

    );
}

export default ProductCard;