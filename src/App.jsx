import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/common/Footer'
import Header from './Components/common/Header'
import Home from './Pages/Home'
import Workspaces from './Pages/Workspaces'
import WorkspaceDetail from './Pages/WorkspaceDetail'
import BookingFlow from './Pages/BookingFlow'
import USERDashboard from './Pages/USERDashboard'
import MyBooking from './Pages/MyBooking'
import SavedWorkspace from './Pages/SavedWorkspace'
import ProfileSettings from './Pages/ProfileSettings'
import BookingConformation from './Pages/BookingConformation'
import ModifyBooking from './Pages/ModifyBooking'
import Blog from './Pages/Blog'
import ThankYou from './Pages/ThankYou'
import Contact from './Pages/Contact'
import OurUsers from './Home/OurUsers'
import Faq from './Home/Faq'
import Work from './Home/Work'
import Featured from './Home/Featured'
import About from './Pages/About'
import OurMission from './Pages/OurMission'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/workspaces" element={<Workspaces />}></Route>
          <Route path="/workspacedetail" element={<WorkspaceDetail />}></Route>
          <Route path="/bookingflow" element={<BookingFlow />}></Route>
          <Route path="/userdashboard" element={<USERDashboard />}></Route>
          <Route path="/mybooking" element={<MyBooking />}></Route>
          <Route path="/savedworkspace" element={<SavedWorkspace />}></Route>
          <Route path="/profilesettings" element={<ProfileSettings />}></Route>
          <Route path="/bookingconformation" element={<BookingConformation />}></Route>
          <Route path="/modifybooking" element={<ModifyBooking />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/thankyou" element={<ThankYou />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/ourusers" element={<OurUsers />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/featured" element={<Featured />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/ourmission" element={<OurMission />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
