import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; 

const Header = () => {
  return (
    <div className="bg-color">
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <h3 align='center'>Subhikhsha Voluntary Organization</h3>
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <div className="d-flex align-items-center">
              

              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
                <button type="button" className="btn btn-outline-light me-2">
                  Sign-up
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
