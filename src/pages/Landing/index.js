import { useState } from "react";

import Modal from "../../components/Modal";
import { Container, Button } from "./styles";

export default function Landing() {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Button onClick={() => setActive(true)}>Open Modal</Button>

      <Modal
        active={active}
        hideModal={() => setActive(false)}
        title="Modal Title Here"
        footer={
          <Button onClick={() => alert("Footer Button")}>Footer Button</Button>
        }
      >
        Modal body content goes here..
      </Modal>
    </Container>
  );
}
