import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { useHistory } from "react-router";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function LogoutButton() {
  const history = useHistory();
  const { setUserData } = useContext(UserContext);

  function logout() {
    const confirmation = window.confirm("Tem certeza que deseja sair?");
    if (confirmation) {
      localStorage.removeItem("userData");
      setUserData({});
      history.push("/sign-in");
    }
  };

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
