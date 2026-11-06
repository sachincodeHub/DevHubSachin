export default function Card() {
  return (
    <div className="min-vh-100 bg-light d-flex justify-content-center align-items-center p-4">

      <div className="card w-100 border-top border-3 border-primary border-start-0 border-end-0 border-bottom-0 rounded-4 shadow p-3"
        style={{ maxWidth: "520px" }}>

        {/* TV Image */}
        <img
          src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=900"
          className="card-img-top img-fluid rounded-3"
          alt="Smart TV"
        />

        <div className="card-body text-center">

          {/* Product Name */}
          <h2 className="fw-bold text-dark fs-3 mb-3">
            Samsung 4K Smart TV
          </h2>

          {/* Rating */}
          <div className="mb-3">
            <span className="text-warning fs-5">
              <i className="bi bi-star-fill"></i>
            </span>
            <span className="fw-bold ms-2">4.5</span>
            <span className="text-secondary">(1.2k reviews)</span>
          </div>

          {/* Price */}
          <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap mb-3">

            <h2 className="text-primary fw-bold mb-0">
              ₹49,999
            </h2>

            <span className="text-secondary text-decoration-line-through">
              ₹69,999
            </span>

            <span className="badge bg-success">
              29% OFF
            </span>

          </div>

          {/* Description */}
          <p className="text-secondary mb-4">
            Stunning 4K display with Smart TV features.
          </p>

          {/* Button */}
          <button className="btn btn-primary rounded-pill px-5 py-3 fw-bold w-100">
            Buy Now <i className="bi bi-cart-fill ms-2"></i>
          </button>

        </div>
      </div>
    </div>
  );
}