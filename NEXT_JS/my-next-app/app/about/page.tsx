export default function Card() {
  return (
    <div className="min-vh-100 bg-light d-flex justify-content-center align-items-center  p-4">
       <div className=" w-50 mx-auto bg-white border-top border-3 border-primary border-start-0 border-end-0 border-bottom-0 rounded-4 shadow p-4 d-flex flex-column align-items-center">
         <span className=" bi bi-people-fill bg-info-subtle rounded-circle text-primary p-4 mb-3"></span>
          <h1 className="fw-bold text-dark fs-3 mb-2">About Us</h1>
          <p className="text-secondary text-center mb-4 ">Learn more about our website and team .</p>
          <button className="btn btn-primary px-4 py-2 rounded-pill fw-semibold">
  Explore <i className="bi bi-arrow-right ms-2"></i>
</button>
    </div>
      
 </div>
  )
}
