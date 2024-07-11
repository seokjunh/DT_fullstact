import { useState } from "react";

interface SignUpProps {
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}: InputFieldProps) => (
  <div className="mb-2">
    <div>{label}</div>
    <div className="border-2 border-blue-500 h-14 rounded-xl flex items-center p-4">
      <input
        type={type}
        placeholder={placeholder}
        required
        className="w-full outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export const SignUp = ({ onClose, onSwitchToSignIn }: SignUpProps) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = password === confirmPassword && password != "";

  const handleSignUp = async () => {
    if (passwordsMatch) {
      const response = await fetch("http://127.0.0.1:8000/create_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("회원가입이 성공했습니다.");
        onClose();
      } else {
        alert("회원가입이 실패했습니다.");
      }
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div>
      <div className="text-center text-3xl font-bold mb-8">SEOKJUN</div>
      <InputField
        label="이름"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <InputField
        label="이메일"
        type="text"
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="비밀번호"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        label="비밀번호 확인"
        type="password"
        placeholder="password"
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
          회원이신가요?{" "}
          <a
            onClick={onSwitchToSignIn}
            className="cursor-pointer hover:text-blue-500"
          >
            로그인
          </a>
        </p>
      </div>
    </div>
  );
};
