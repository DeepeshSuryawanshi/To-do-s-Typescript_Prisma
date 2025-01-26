import { BrowserRouter as Routers, Routes , Route } from "react-router-dom";
import { Login,SigneUp } from "./pages";
import { Toaster } from "sonner";
function App() {
  return (
    <>
     <Toaster richColors  />
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
