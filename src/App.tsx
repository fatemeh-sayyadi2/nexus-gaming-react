import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartItem{
  product: Product;
  quantity: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("shopping_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    async function fetchProducts() {
      try {
      const response = await fetch("./products.json");
      const data = await response.json();
      setProducts(data as Product[]);
      setIsLoading(false);
      }
      catch (err) {
        console.error(err);
        setError("خطا در دریافت محصولات");
        setIsLoading(false);
      }
    }
    fetchProducts();
  },[]
  );
  useEffect(() => {
  localStorage.setItem("shopping_cart", JSON.stringify(cart))
},[cart])

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  function handleAddToCart(product: Product) {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    }
    else {
      setCart([...cart, { product , quantity: 1 }]);
    }
  }

  return (
    <div>
      <Navbar cartCount={cartCount} cartTotal={cartTotal} />
      {isLoading ? <p>در حال بارگذاری محصولات...</p> : null}
      {error ? <p>{error}</p> : null}
          <h2>تعداد محصولات: {products.length}</h2>
    <ul>
        {products.map((product) => (
          <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} onAddToCart={() => handleAddToCart(product)} />
        ))}
    </ul>

</div>
  )

}
export default App;