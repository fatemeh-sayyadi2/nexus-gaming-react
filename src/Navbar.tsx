interface NavbarProps{
    cartCount: number;
}

function Navbar({cartCount}: NavbarProps) {
    return (
        <div>🛒 سبد خرید: {cartCount}</div>
    );
}

export default Navbar;