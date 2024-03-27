import "./index.css";
import { AppProvider } from "./hooks/AppContext";
import Header from "./components/header/Header";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
      </div>
    </AppProvider>
  );
}

export default App;
