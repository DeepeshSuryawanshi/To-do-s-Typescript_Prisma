import { BrowserRouter as Routers, Routes , Route } from "react-router-dom";
import { Login, SigneUp, Dashboard } from "./pages";
import { Toaster } from "sonner";
function App() {
  return (
    <>
     <Toaster richColors  />
      <Routers>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/sign-up" element={<SigneUp/>} />
          </Routes>
      </Routers>
    </>
  )
}

export default App
