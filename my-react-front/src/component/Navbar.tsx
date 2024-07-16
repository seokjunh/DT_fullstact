import { Link, useNavigate } from "react-router-dom";
import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isToken, setIsToken] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    checkToken();

    const handleTokenChange = () => {
      checkToken();
    };

    window.addEventListener("tokenChange", handleTokenChange);

    return () => {
      window.removeEventListener("tokenChange", handleTokenChange);
    };
  }, []);

  const checkToken = () => {
    const token = sessionStorage.getItem("token");
    console.log(token);
    setIsToken(!!token);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsToken(false);
    alert("로그아웃 되었습니다.");
    window.dispatchEvent(new Event("tokenChange"));
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="flex items-center justify-between h-20 text-white text-2xl z-10 fixed w-full">
      <Link to="/">
        <img src={viteLogo} className="h-10 mx-20 cursor-pointer" />
      </Link>

      <div className="flex mx-20 space-x-6 cursor-pointer">
        {!isToken ? (
          <>
            <Link to="/signIn" className="hover:underline underline-offset-8">
              로그인
            </Link>
            <Link to="/signUp" className="hover:underline underline-offset-8">
              회원가입
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/dashboard"
              className="hover:underline underline-offset-8"
            >
              대시보드
            </Link>
            <div
              onClick={handleLogout}
              className="hover:underline underline-offset-8"
            >
              로그아웃
            </div>
          </>
        )}
      </div>
    </div>
  );
};
