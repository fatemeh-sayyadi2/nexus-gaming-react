interface NavbarProps{
    cartCount: number;
    cartTotal: number;
}

function Navbar({cartCount, cartTotal}: NavbarProps) {
    return (
        <div className="navbar">🛒 سبد خرید: {cartCount} - مجموع: {cartTotal.toLocaleString()}</div>
    );
}

export default Navbar;