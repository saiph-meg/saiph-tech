import React, { FC, useRef } from "react";
import { NextDrupalModal as Modal } from "@ffw/next-drupal-components";

import { Container, Description, Title, Wrap } from "./modal.styles";

const ContactModal: FC<any> = ({ case: _case, onClose }) => {
  const container = useRef<HTMLDivElement>(null);

  const close = () => {
    if (!container.current) return;

    container.current.classList.add("closing");

    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <Modal onEsc={close} onClickOutside={close} enableOutsideTab={false}>
      <Wrap ref={container}>
        <Container title="Escalation Actions">
          <table>
            <tbody>
              <tr>
                <td>
                  <Title>Escalate</Title>
                  <Description>Request a Supervisor.</Description>
                </td>
                <td>
                  <button className="btn btn-primary btn-block">
                    Escalate
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <Title>Request for Information</Title>
                  <Description>
                    Maecenas interdum sapien sit amet gravida sollicitudin.
                  </Description>
                </td>
                <td>
                  <button className="btn btn-primary btn-block">
                    Submit RFI
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <Title>SAR</Title>
                  <Description>
                    Maecenas interdum sapien sit amet gravida sollicitudin.
                  </Description>
                </td>
                <td>
                  <button className="btn btn-primary btn-block">
                    Submit SAR
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <Title>Transfer</Title>
                  <Description>Transfer the case to other user.</Description>
                </td>
                <td>
                  <button className="btn btn-primary btn-block">
                    Transfer
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <Title>Freeze Account</Title>
                  <Description>
                    Maecenas interdum sapien sit amet gravida sollicitudin.
                  </Description>
                </td>
                <td>
                  <button className="btn btn-primary btn-block">Freeze</button>
                </td>
              </tr>
              <tr>
                <td>
                  <Title>Freeze Funds</Title>
                  <Description>
                    Maecenas interdum sapien sit amet gravida sollicitudin.
                  </Description>
                </td>
                <td>
                  <button className="btn btn-primary btn-block">Freeze</button>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </Wrap>
    </Modal>
  );
};

export default ContactModal;
