import './App.css'
import 'boxicons'
import { useSelector } from 'react-redux'
import Navbar from './Components/Navbar/navbar'
import Footer from './Components/Footer/footer'
import AppRouter from './Components/AppRouter/AppRouter'
import AnimationBackground from './UI/animationBackground'

function App() {
  const { loggedIn } = useSelector(state => state.auth)
  return (
    <div>
      <AnimationBackground/>
      <div className='z-10'>
        {loggedIn? <Navbar />:""}
        <div className='grid place-items-center'>
          {loggedIn? <Footer />:""} 
        </div>
        <div className="flex justify-center items-center">
          <AppRouter/>
        </div>
      </div>
    </div>
  )
}

export default App
