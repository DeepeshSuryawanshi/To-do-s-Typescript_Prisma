import { BrowserRouter as Routers, Routes , Route } from "react-router-dom"
import { Login,SigneUp } from "./pages"
function App() {
  return (
    <>
      <Routers>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/sign-up" element={<SigneUp/>} />
          </Routes>
      </Routers>
    </>
  )
}

export default App
