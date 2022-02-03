import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { useHistory } from "react-router";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Modal } from "../../hooks/Modal";

export default function LogoutButton() {
  const history = useHistory();
  const { setUserData } = useContext(UserContext);

  function logout() {
    Modal("Tem certeza que deseja sair?").then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("userData");
        setUserData({});
        history.push("/sign-in");
      }
    });
  }

  return <Button onClick={logout} />;
}

const Button = styled(IoExitOutline)`
  position: absolute;
  top: 26px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
