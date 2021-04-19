import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import '../styles.scss'

const Header = ({ siteTitle }) => ( 
  <header class="NavBar">
    <h2>
      <Link to='/' class='AnchorLink'>
        {siteTitle}
      </Link>
    </h2>
    <h2>
      <Link class='NavLink' to='/about'>About Me</Link>
    </h2>
    <h2>
      <Link class='NavLink' to='/about'>Projects</Link>
    </h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header