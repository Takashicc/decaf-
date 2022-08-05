import { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;