import "./Header.css";

function Navbar() {
  return (
    <header>
        <p className="kiri">MedConnect</p>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#tentangkami">About</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
