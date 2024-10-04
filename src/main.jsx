import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './assets/Header'
import Home from './assets/Home/Home'
import Features from './assets/Features/Features'
import Feedback from './assets/Feedback/Feedback'
import Advance from './assets/Advance/Advance'
import New from './assets/NewFeature/New'
import Questions from './assets/Questions/Questions'
import People from './assets/People/People'
import Blog from './assets/Blog/Blog'
import Free from './assets/Free Trial/Free'
import Footer from './assets/Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <Features />
    <Feedback />
    <Advance />
    <New />
    <Questions />
    <People />
    <Blog />
    <Free />
    <Footer />
  </StrictMode>,
)
