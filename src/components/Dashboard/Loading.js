import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingContainer>
      <img src = "https://www.driven.com.br/wp-content/uploads/2021/11/logo-footer.svg"
        alt = "driven logo" className="spinner"/>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
    position: absolute;
    top: 0;
    left: 25px;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .spinner {
        width: 120px;
        animation: scale .65s linear infinite;
    }

    @keyframes scale {
        from {
            transform: scale(0.5);
        }
        50% {
            transform: scale(0.8);
        }
        to {
            transform: scale(0.5);
        }
    }
`;
