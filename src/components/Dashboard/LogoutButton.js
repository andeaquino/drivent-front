import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { useHistory } from "react-router";

export default function LogoutButton() {
  const history = useHistory();

  function logout() {
    const confirmation = window.confirm("Tem certeza que deseja sair?");
    if (confirmation) {
      localStorage.removeItem("userData");
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
