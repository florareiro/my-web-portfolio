import "./index.css";
import { AppProvider } from "./hooks/AppContext";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import ReactGA from "react-ga4";
ReactGA.initialize("G-VSNY3ZQ1LE");

useEffect(() => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}, []);

function App() {
  return (
    <AppProvider>
      <BrowserRouter basename="/my-web-portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;