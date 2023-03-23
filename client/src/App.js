import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NaBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* permite que solo se vea Home y en las demas pag no se visualice */}
      {location.pathname === "/home" ? <NaBar /> : null}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* permite que solo se vea Home y en las demas pag no se visualice */}
      {location.pathname === "/home" ? <Footer/> : null}
    </div>
  );
}

export default App;
