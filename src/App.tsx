import DemoPage from "./app/payments/page";
import { Button } from "./components/ui/button"
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  

  return (
    
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<DemoPage/>}/>
        
      </Routes>
    
  </BrowserRouter>
    
  )
}

export default App
