import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/Header/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/container.style";
import { Input } from "../../components/UI/Input/InputWord";
import { StyleForgotPasswordPage } from "./ForgotPasswordPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IForgotPasswordForm {
  userPassword: string;
  confirmPassword: string;
}

const passwordSchema = yup.object({
  userPassword: yup
  .string()
  .required("Обязательное поле")
  .min(8, "Пароль должен содержать не менее 8 символов")
  .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
  .matches(/\d/, "Пароль должен содержать хотя бы одну цифру")
  .matches(/[@$!%*?&]/, "Пароль должен содержать хотя бы один специальный символ"),

  confirmPassword: yup
    .string()
    .required("Обязательное поле")
    .oneOf([yup.ref('userPassword')], "Пароли не совпадают"),
});

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPasswordForm>({
    resolver: yupResolver(passwordSchema),
    defaultValues: {
      userPassword: "",
      confirmPassword: "",
    },
  });

  const onPasswordSubmit: SubmitHandler<IForgotPasswordForm> = (data) => {
    console.log(data); 
    navigate("/");
  };

  return (
    <Container>
      <StyleForgotPasswordPage>
        <Heading headingText="Придумайте пароль" />
        <p>
          Введите новый пароль для вашей учетной записи. Пароль должен содержать
          не менее 8 символов, включая заглавные и строчные буквы, цифры и
          специальные символы.
        </p>
        <form onSubmit={handleSubmit(onPasswordSubmit)}>
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Новый пароль"
                errorText={errors.userPassword?.message}
                isError={!!errors.userPassword}
                {...field}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Повторите пароль"
                errorText={errors.confirmPassword?.message}
                isError={!!errors.confirmPassword}
                {...field}
              />
            )}
          />
          <Button
            isPrimary
            buttonText="Восстановить пароль"
          />
        </form>  
      </StyleForgotPasswordPage>
    </Container>
  );
};
