import Front from "./Front/Front";
import Back from "./Back/Back";
import Login from "./Back/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" component={Front} exact />
        <Route path="/home" component={Front} />
        <Route path="/admin" component={Back} />
        <Route path="/login" component={Login} />
      </Routes>
    </div>
  );
}

export default App;
