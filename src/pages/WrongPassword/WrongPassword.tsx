import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/UI/UI/Container/container.style";
import { Heading } from "../../components/UI/Header/Heading";
import { Input } from "../../components/UI/UI/Input/InputWord";
import { Button } from "../../components/UI/UI/Button/Button";
import { StyleWrongPassword } from "./WrongPassword.style";

export const WrongPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (phoneNumber) {
      navigate("/code-enter");
    }
  };

  
  const containsDigit = /\d/.test(phoneNumber);

  return (
    <Container>
      <StyleWrongPassword>
        <Heading headingText="Забыли пароль?" />
        <p>Укажите свой номер телефона, чтобы получить код для сброса пароля.</p>
        <form onSubmit={handleSubmit}>
          <Input
            type="tel"
            placeholder="Номер телефона"
            value={phoneNumber}
            onChange={handleInputChange}
            required
          />
          <Button
            isPrimary
            buttonText="Отправить"
            disabled={!containsDigit} 
          />
        </form>
      </StyleWrongPassword>
    </Container>
  );
};
