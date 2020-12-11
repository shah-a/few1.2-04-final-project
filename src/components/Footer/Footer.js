import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <p>&copy; Ali Shah, {new Date().getUTCFullYear()}</p>
    </div>
  );
}

export default Footer;
