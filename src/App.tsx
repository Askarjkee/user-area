import { Routes, Route } from "react-router-dom"
import AuthPage from "./components/auth/AuthPage";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <MainLayout/> }>
              <Route path="login" element={<AuthPage/>}/>
          </Route>
        </Routes>
      </div>
  )
}

export default App;
