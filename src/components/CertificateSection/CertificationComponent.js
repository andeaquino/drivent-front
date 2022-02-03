import styled from "styled-components";
import qrCode from "../../assets/images/qr.png";
import logoDriven from "../../assets/images/logo-footer.svg";

export default function CertificationComponent({ certificateInfo, printRef }) {
  return(
    <CertificateContainer ref={printRef}>
      <img src = {logoDriven} alt = "Driven" className="logo"/>
      <p>Driven.t</p>
      <CertificationMessage>
        <p>Certificamos que</p>
        <CertificateName>
          {certificateInfo.name}
        </CertificateName>
        <p>participou do evento Driven.t, na modalidade {certificateInfo.presenceType}, com o total de {certificateInfo.time} horas de evento.</p>
      </CertificationMessage>
      <SignaturesContainer>
        <Signature>
          <h2>{certificateInfo.name}</h2>
          <p>Student</p>
        </Signature>
        <Signature>
          <h2>Diogo Silva</h2>
          <p>Organizador</p>
        </Signature>
        <Signature>
          <h2>Jade Picon</h2>
          <p>Marketing Expert</p>
        </Signature>
      </SignaturesContainer>
      <img src = {qrCode} alt = "qr code" className="qr"/>
    </CertificateContainer >
  );
};

const CertificateContainer = styled.div`
  font-family: Roboto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 0px 0px 25px;
  width: min(100vw, 600px);
  height: 400px;
  border: 15px #F93F98 inset;
  border-radius: 10px;

  .logo {
    margin-top: 20px;
    height: 40px;
  }

  p {
    color: #777;
    font-size: 14px;
    margin-top: 5px;
  }

  .qr {
    margin-top: 20px;
    width: 40px;
  }

  svg { 
    margin-top: 20px;
  }
`;

const CertificateName = styled.h1`
  text-transform: uppercase;
  font-size: 15px;
  margin: 25px 0;
`;

const CertificationMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;

  p {
    color: #777;
    font-size: 12px;
  }
`;

const SignaturesContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

const Signature = styled.div`
    border-top: 1px #777 solid;
    width: 100px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 15px;

    p {
      color: #777;
      font-size: 10px;
    }

    h2 {
      color: #333;
      font-size: 12px;
    }
`;
