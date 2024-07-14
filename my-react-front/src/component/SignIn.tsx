import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SignInResponse {
  access_token: string;
  token_type: string;
}

const InputField = ({
  label,
  type,
  placeholder,
  id,
  value,
  onChange,
}: InputFieldProps) => (
  <div className="mb-4">
    <div>{label}</div>
    <div className="border-2 border-blue-500 h-14 rounded-xl flex items-center p-4">
      <input
        type={type}
        placeholder={placeholder}
        required
        className="w-full outline-none"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginCheck, setLoginCheck] = useState(false); // 로그인 상태 체크

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signUp')
  }

  const handleSignIn = async () => {
    try {
      const response = await axios.post<SignInResponse>(
        "http://127.0.0.1:8000/signIn",
        `username=${username}&password=${password}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status == 200) {
        setLoginCheck(false);
        sessionStorage.setItem("token", response.data.access_token);
        alert("로그인이 성공했습니다.")
        navigate("/");
        // 여기에 로그인 성공 후 처리 로직 추가 (예: 상태 업데이트, 페이지 리다이렉트 등)
      }
    } catch (error) {
      setLoginCheck(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <div className="text-center text-3xl font-bold mb-8">SEOKJUN</div>

        <InputField
          label="이름"
          type="text"
          placeholder="username"
          id="이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <InputField
          label="비밀번호"
          type="password"
          placeholder="password"
          id="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {loginCheck && (
          <div className="text-red-600 mb-4">
            이메일 혹은 비밀번호가 틀렸습니다.
          </div>
        )}

        <div className="bg-blue-500 h-14 flex items-center justify-center rounded-xl mb-4 hover:bg-sky-700">
          <button
            onClick={handleSignIn}
            className="text-white font-bold text-2xl"
          >
            로그인
          </button>
        </div>

        <div>
          <p>
            회원이 아니신가요?
            <a
              onClick={handleSignUpClick}
              className="cursor-pointer hover:text-blue-500 ml-2"
            >
              회원가입
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
