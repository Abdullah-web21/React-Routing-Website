import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { Outlet } from "react-router-dom";



function App() {

  return (
    <>
    
    <Header/>
    <main className="-mt-25">
    <Outlet />
    </main> 
    <Footer />

    </>
  )
}

export default App
