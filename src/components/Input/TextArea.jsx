import styled from 'styled-components';

export default function TextArea({ placeholder }) {

  return (
    <Form>
      <InputTextArea placeholder={placeholder} />
    </Form>
  );
}

const Form = styled.form`
  width: 100%;

  .answer {
    height: 186px;
  }

  @media (max-width: 767px) {
    .modal {
      height: 358px;
    }
  }
`;

const InputTextArea = styled.textarea`
  width: 100%;
  color: #000;
  height: 180px;
  background-color: var(--Grayscale-20);
  border-radius: 8px;
  padding: 1.6rem;
  resize: none;

  &:focus {
    border: 1px solid var(--Brown-40);
  }
`;
