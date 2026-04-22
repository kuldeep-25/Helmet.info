import './styles/App.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Routers from './Routers'

function App() {

  return (
    <div className="App">
      <Navbar />

      <div className="main-content">
        <Routers />
      </div>

      <Footer />

    </div>
  )
}

export default App
