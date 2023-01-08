import './Footer.css'
import { FooterLink } from '.'

export const Footer = () => {
  return (
    <footer className="footer_wrapper">
        <div className="footer_wrapper__main">
          <h3 className="footer_wrapper__main__h3">Manuel Ulate Sancho</h3>
        </div>
        <div className="footer_wrapper__secondary">
          <span className="footer_wrapper__secondary__span">Contacta en</span>
          <div className="footer_wrapper__secondary__icons">
            <FooterLink 
              url="https://www.linkedin.com/in/manuel-ulate-sancho/"
              children={<i className="fa-brands fa-linkedin"></i>}
            />
            <FooterLink
              url="https://github.com/ManuUSS"
              children={<i className="fa-brands fa-github"></i>}
            />
            <FooterLink 
              url="https://www.instagram.com/manuel_ulateee/"
              children={<i className="fa-brands fa-instagram"></i>}
            />
          </div>
        </div>
    </footer>
  )
}
