import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  return (
    <ButtonIcon onClick={() => navigate("/login")}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
