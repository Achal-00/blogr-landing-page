export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-logo">
        <img src="logo.svg" alt="logo" />
      </div>
      <div className="content">
        <p>Product</p>
        <div className="links">
          <p>Overview</p>
          <p>Pricing</p>
          <p>Marketplace</p>
          <p>Features</p>
          <p>Integrations</p>
        </div>
      </div>
      <div className="content">
        <p>Company</p>
        <div className="links">
          <p>About</p>
          <p>Team</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="content">
        <p>Connect</p>
        <div className="links">
          <p>Contact</p>
          <p>Newsletter</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </section>
  );
}
