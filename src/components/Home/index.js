// Write your JS code here

import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = props => {
  const logoutThePage = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="home-main-container">
      <Header />
      <div className="home-container">
        <h1 className="home-heading">Home Route</h1>
        <button type="button" className="logout-button" onClick={logoutThePage}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Home)
