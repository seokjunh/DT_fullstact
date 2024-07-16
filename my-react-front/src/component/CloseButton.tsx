import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";

export const CloseButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-end">
      <button onClick={handleClick} className="hover:bg-gray-200">
        <AiOutlineClose />
      </button>
    </div>
  );
};
