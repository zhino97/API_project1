import "./App.css";
import Quote from "./component/Quote";
import TheNavbar from "./component/TheNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component/Quote.css";

function App() {
  return (
    <div className="App">
      <Router>
        <TheNavbar />
        <Routes>
          <Route path="/" />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
