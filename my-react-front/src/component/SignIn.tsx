
interface SignInProps {
  onClose: () => void;
  onSwitchToSignUp: () => void;
}

export const SignIn = ({ onClose, onSwitchToSignUp }: SignInProps) => {

  return (
    <div>
      <div className="text-center text-3xl font-bold mb-8">SEOKJUN</div>

      <div className="mb-4">
        <div>이메일</div>
        <div className="border-2 border-blue-500 h-14 rounded-xl flex items-center p-4">
          <input
            type="text"
            placeholder="usermail@example.com"
            required
            className="w-full outline-none"
          />
        </div>
      </div>

      <div className="mb-4">
        <div>비밀번호</div>
        <div className="border-2 border-blue-500 h-14 rounded-xl flex items-center p-4">
          <input
            type="password"
            placeholder="password"
            required
            className="w-full outline-none"
          />
        </div>
      </div>

      <div className="bg-blue-500 h-14 flex items-center justify-center rounded-xl mb-4 hover:bg-sky-700">
        <button onClick={onClose} className="text-white font-bold text-2xl">로그인</button>
      </div>

      <div>
        <p>회원이 아니신가요? <a onClick={onSwitchToSignUp} className="cursor-pointer hover:text-blue-500">회원가입</a></p>
      </div>
    </div>
  );
};
