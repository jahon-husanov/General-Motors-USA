export default function Footer({ setPage }) {
  return (
    <footer>
      <div className="footer-logo">General Motors</div>
      <div className="footer-links">
        <a>Privacy</a>
        <a>Terms</a>
        <a onClick={() => setPage('company')}>Careers</a>
        <a onClick={() => setPage('company')}>Newsroom</a>
        <a onClick={() => setPage('investors')}>Investors</a>
        <a>Contact</a>
      </div>
      <div className="footer-copy">© 2026 General Motors LLC. All Rights Reserved.</div>
    </footer>
  )
}
