import logo from '../assets/logo-par.png';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand bg-dark">
                <div className="container">
                    <ul className="nav">
                        <img src={logo} alt="logo" style={{height: "40px"}} />
                        <li>
                            <a href="/" className="nav-link">Beranda</a>
                        </li>
                        <li>
                            <a href="/manajemen-buku" className="nav-link">Manajemen Buku</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;