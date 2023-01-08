import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer_wrapper">
        <div className="footer_wrapper__main">
          <h3 className="footer_wrapper__main__h3">Manuel Ulate Sancho</h3>
        </div>
        <div className="footer_wrapper__secondary">
          <span className="footer_wrapper__secondary__span">Tecnologías utilizadas</span>
          <div className="footer_wrapper__secondary__icons">
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-react"></i>
          </div>
        </div>
    </footer>
  )
}
