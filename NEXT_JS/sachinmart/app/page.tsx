
export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">

        {/* Brand */}
        <a href="/" className="navbar-brand fw-bold fs-4">
          <i className="bi bi-bag-fill me-2"></i>
          SachinMart
        </a>

        {/* Navigation Content */}
        <div id="mainNavbar" className="navbar-collapse show">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>

            <li className="nav-item">
              <a href="/products" className="nav-link">Products</a>
            </li>

            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>

            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="input-group ms-lg-3 mt-3 mt-lg-0">
            <input
              type="search"
              className="form-control"
              placeholder="Search products"
              aria-label="Search products"
            />
            <button className="btn btn-warning" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}
