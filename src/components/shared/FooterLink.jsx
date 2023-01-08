import PropTypes from 'prop-types'; 

export const FooterLink = ({url, children}) => {
  return (
    <a 
        target="_blank"
        href={url}
    >
        {children}
    </a>
  )
}

FooterLink.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.object
}