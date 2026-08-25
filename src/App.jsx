import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/Home'
import About from './components/about'
import Services from './pages/Services'
import SiteList from './pages/SiteList'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <div className='bg-[#F8FAFF] h-full'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/sitelist' element={<SiteList />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
