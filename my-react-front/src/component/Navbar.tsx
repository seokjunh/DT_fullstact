import { Link, useNavigate } from "react-router-dom";
import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isToken, setIsToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    const token = sessionStorage.getItem("token");
    setIsToken(!!token);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsToken(false);
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-between h-20 text-white text-2xl z-10">
        <img src={viteLogo} className="h-10 mx-20 cursor-pointer" />
        <div className="flex mx-20 space-x-6 cursor-pointer">
          {!isToken ? (
            <>
              <Link to="/signIn">로그인</Link>
              <Link to="/signUp">회원가입</Link>
            </>
          ) : (
            <div onClick={handleLogout}>로그아웃</div>
          )}
        </div>
      </div>
    </>
  );
};
