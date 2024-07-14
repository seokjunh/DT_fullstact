import { Route, Routes } from "react-router";
import { SignIn } from "./component/SignIn";
import { SignUp } from "./component/SignUp";
import { Home } from "./component/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
