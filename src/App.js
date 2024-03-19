import Navbar from "./Navbar";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <App />
      break
    case "/pricing":
      component = <Pricing />
      break
    case "/about":
      component = <About />
      break
    // case "/sun":
    //   component = <Pricing />
    //   break

  }
  return (
    <>
    <Navbar />
    {component}
    </>
  )


}

export default App;
