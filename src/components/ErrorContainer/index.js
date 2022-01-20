import { styled, Typography } from "@material-ui/core";
import MessageContainer from "./MessageContainer";

export default function ErrorContainer({ pageTitle, errorMessage }) {
  return (
    <>
      <StyledTypography variant="h4">{pageTitle}</StyledTypography>
      <MessageContainer>
        <p>{errorMessage}</p>
      </MessageContainer>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
