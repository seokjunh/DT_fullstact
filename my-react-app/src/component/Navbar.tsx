import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import viteLogo from "/vite.svg";
import { useState } from "react";

export const Navbar = () => {
  const [ShowSignIn, setShowSignIn] = useState(false);
  const [ShowSignUp, setShowSignUp] = useState(false);

  const openSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const openSignUp = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const closeModal = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <>
      <div className="flex items-center justify-between h-20 text-white text-2xl z-10">
        <img src={viteLogo} className="h-10 mx-20 cursor-pointer" />
        <div className="flex mx-20 space-x-6 cursor-pointer">
          <div onClick={() => setShowSignIn(true)}>로그인</div>
          <div onClick={() => setShowSignUp(true)}>회원가입</div>
        </div>
      </div>

      {(ShowSignIn || ShowSignUp) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            {ShowSignIn && <SignIn onClose={closeModal} onSwitchToSignUp={openSignUp}/>}
            {ShowSignUp && <SignUp onClose={closeModal} onSwitchToSignIn={openSignIn}/>}
          </div>
        </div>
      )}
    </>
  );
};
