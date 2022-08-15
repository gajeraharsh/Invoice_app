import "./App.css";
import Auth from "./Components/Auth/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import BillFormat from "./Components/BillFormat/BillFormat";
function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <BillFormat /> */}
    </div>
  );
}

export default App;
