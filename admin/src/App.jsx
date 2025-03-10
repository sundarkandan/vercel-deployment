import { Routes, Route } from "react-router-dom"
import './App.css'
import Admin from "./admin"
import Add from "./Admin/add"
import './main.css'
import Update from "./Admin/update"
import Delete from "./Admin/delete"


function App() {
  return (
    <>
     <div className="container">
     <Routes>
        <Route path="/" element={<Admin/>}/>
        <Route path="/Add" element={<Add/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/delete" element={<Delete/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App
