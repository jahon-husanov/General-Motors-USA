import { useLang } from '../i18n/LangContext'

export default function Footer({ setPage }) {
  const { t } = useLang()
  return (
    <footer>
      <div className="footer-logo">VELO Motors</div>
      <div className="footer-links">
        <a>{t.footer.privacy}</a>
        <a>{t.footer.terms}</a>
        <a onClick={() => setPage('company')}>{t.footer.careers}</a>
        <a onClick={() => setPage('company')}>{t.footer.newsroom}</a>
        <a onClick={() => setPage('investors')}>{t.footer.investors}</a>
        <a>{t.footer.contact}</a>
      </div>
      <div className="footer-copy">{t.footer.copy}</div>
    </footer>
  )
}
