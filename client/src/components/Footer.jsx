const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Your Company Name</p>
        <p className="mb-0">
          <a href="#" className="text-decoration-none text-light mx-2">Privacy Policy</a> |
          <a href="#" className="text-decoration-none text-light mx-2"> Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;