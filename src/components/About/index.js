// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="aboutContainer">
    <Header />
    <div className="aboutImageContainer">
      <img
        className="mobileAboutImage"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="About"
      />
      <img
        className="desktopAboutImage"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="About"
      />
    </div>
  </div>
)

export default About
