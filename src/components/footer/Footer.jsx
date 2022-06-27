import { useNavigate } from "react-router-dom";
const Footer = () => {
  let navigate = useNavigate();
  return (
    <footer className="text-center text-lg-start bg-dark text-white ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>

        <div>
          <a onClick={() => navigate("/")} className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a onClick={() => navigate("/")} className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a onClick={() => navigate("/")} className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a onClick={() => navigate("/")} className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a onClick={() => navigate("/")} className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a onClick={() => navigate("/")} className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright: Mostacho
      </div>
    </footer>
  );
};

export default Footer;
