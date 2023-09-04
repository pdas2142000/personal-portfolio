import "./scss/app.scss"
import Intro from './Compunents/intro/Intro'
import Skills from "./Compunents/skills/Skills"
import Portfolio from "./Compunents/portfolio/Portfolio"
import Blogs from "./Compunents/blogs/Blogs"
import Contact from "./Compunents/contact/Contact"
import Footer from "./Compunents/footer/Footer"

function App() {
  return (
    <div>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
