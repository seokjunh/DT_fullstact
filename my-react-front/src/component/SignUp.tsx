import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { CloseButton } from "./CloseButton";
import { InputField } from "./InputField";

export const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = password === confirmPassword && password != "";

  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/SignIn");
  };

  const handleSignUp = async () => {
    try {
      if (passwordsMatch) {
        const response = await axios.post("http://127.0.0.1:8000/signUp", {
          username: username,
          email: email,
          password: password,
        });

        if (response) {
          alert("회원가입이 성공했습니다.");
          navigate("/signIn");
        }
      }
    } catch {
      alert("회원가입이 실패했습니다.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <CloseButton />
        <div className="text-center text-3xl font-bold mb-8">SEOKJUN</div>
        <InputField
          label="이름"
          type="text"
          placeholder="username"
          id="이름"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <InputField
          label="이메일"
          type="email"
          placeholder="email@example.com"
          id="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="비밀번호"
          type="password"
          placeholder="password"
          id="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          label="비밀번호 확인"
          type="password"
          placeholder="password"
          id="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {password && confirmPassword && (
          <div
            className={`mb-2 ${
              passwordsMatch ? "text-green-600" : "text-red-600"
            }`}
          >
            {passwordsMatch
              ? "비밀번호가 일치합니다."
              : "비밀번호가 일치하지 않습니다."}
          </div>
        )}

        <div className="bg-blue-500 h-14 flex items-center justify-center rounded-xl mt-4 mb-2 hover:bg-sky-700">
          <button
            onClick={handleSignUp}
            className="text-white font-bold text-2xl"
          >
            회원가입
          </button>
        </div>

        <div>
          <p>
            회원이신가요?
            <a
              onClick={handleSignInClick}
              className="cursor-pointer hover:text-blue-500 ml-2"
            >
              로그인
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
