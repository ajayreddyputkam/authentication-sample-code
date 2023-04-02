// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const About = props => {
  const logoutThePage = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="about-main-container">
      <Header />
      <div className="about-container">
        <h1 className="about-heading">About Route</h1>
        <button
          type="button"
          className="logout-button-about"
          onClick={logoutThePage}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(About)
