import { Route, Routes } from "react-router";
import { SignIn } from "./component/SignIn";
import { SignUp } from "./component/SignUp";
import { Home } from "./component/Home";
import { Dashboard } from "./component/Dashboard";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
