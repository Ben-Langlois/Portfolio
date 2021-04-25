import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import '../style/styles.css'

const Header = ({ siteTitle }) => ( 
  <header class="NavBar">
    <h2>
      <Link to='/' class="AnchorLink">
        {siteTitle}
      </Link>
    </h2>
    <div id="Links">
      <Link class="NavLink" to='/about'>About Me</Link>

      <Link class="NavLink" to='/about'>Projects</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header