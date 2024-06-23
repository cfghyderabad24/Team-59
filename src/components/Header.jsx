import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import chatbot from './images/chatbot.jpg';  

const Header = () => {
    const handleImageClick = () => {
      const message = 'Hello, welcome to our website!';
      const speech = new SpeechSynthesisUtterance("How can we NGO hepl u" );
      window.speechSynthesis.speak(speech);};
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
<div className="btn-group">
  {/* <button type="button" className="btn btn-Secondary">Action</button> */}
  <button type="button" className="btn btn-Secondary dropdown-toggle dropdown-toggle-split btn btn-outline-light me-2" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="">language</span>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">English</a></li>
    <li><a className="dropdown-item" href="#">Telegu</a></li>
    <li><a className="dropdown-item" href="#">Hindi</a></li>
    {/* <li><hr className="dropdown-divider"></li>  */}
    <li><a className="dropdown-item" href="#">Hindi</a></li>
  </ul>
</div>
<img src={chatbot} alt="Logo" className="chatbot_logo"  onClick={handleImageClick} style={styles.image}/>
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </div>
  );
};
const styles = {
  // container: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '100vh',
  // },
  image: {
    cursor: 'pointer',
    // width: '150px',
    // height: '150px',
  },
};
export default Header;
