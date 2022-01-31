import Loader from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
  return <Load type="ThreeDots" color="#134090" height={51} width={81} />;
}

const Load = styled(Loader)`
  position: absolute;
  left: 50%;
  top: calc(50% - 25px);
`;
