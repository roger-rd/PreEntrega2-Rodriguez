import "../assets/css/navFooter.css";

export default function Footer() {
  return (
    <footer className="text-center text-light p-2" id="footer">
      <p className="fs-4">Roger Rodriguez © 2024. Todos los derechos reservados.</p>
      <div className="d-flex justify-content-end mx-5">
        <a className="p-2 text-decoration-none text-light fs-4" href="https://www.facebook.com/settings?tab=account&section=username" target="_blank">
          <i className="fa-brands fa-square-facebook fa-2x pe-2"></i>
        </a>
        <a className="p-2 text-decoration-none text-light fs-4" href="https://www.instagram.com/roger_david.r/" target="_blank">
          <i className="fa-brands fa-instagram fa-2x pe-2"></i>
        </a>
        <a className="p-2 text-decoration-none text-light fs-2" href="https://www.linkedin.com/in/roger-rodriguez-rdrp/" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}