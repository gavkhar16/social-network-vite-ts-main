import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/Header/Heading";
import * as yup from "yup";
import { Linktext } from "../../components/Header/Typography/LinkText/Linktext";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/container.style";
import { RegistrationInfo } from "../../components/UI/RegistrationInfo/RegistrationInfo";
import { Input } from "../../components/UI/Input/InputWord";
import "./LoginPage.scss";
import { StyleLoginPage } from "./LogiPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/userSlice";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const mockeUser = {
  mail: "gavkhar@gmail.com",
  phone_number: "+998902004040",
  user_id: 1,
  name: "Gap",
  reg_data: new Date(),
  city: "NY",
};

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

const loginFormScheme = yup.object({
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Неверный формат эл почты"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен содержать не менее 4 символов"),
});

export const LoginPage = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);
  const dispatch = useDispatch();
  console.log(user);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = () => {
    dispatch(changeUser(mockeUser));

    useEffect(()=>{
      
    })
    // const savedEmail = localStorage.getItem("userEmail");
    // const savedPassword = localStorage.getItem("userPassword");

    // if (
    //   savedEmail &&
    //   savedPassword &&
    //   data.userEmail === savedEmail &&
    //   data.userPassword === savedPassword
    // ) {
    //   console.log("Успешный вход");
    //   navigate("/main-page");
    // } else {
    //   console.log("Неверный email или пароль");
    //   alert("Неверный email или пароль");
    // }
  };

  return (
    <Container>
      <StyleLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Электронная почта"
                errorText={errors.userEmail?.message}
                isError={!!errors.userEmail}
                {...field}
              />
            )}
          />
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Введите пароль"
                errorText={errors.userPassword?.message}
                isError={!!errors.userPassword}
                {...field}
              />
            )}
          />
          <Button isPrimary buttonText="Войти" />
        </form>
        <Linktext
          linkText="Забыли пароль?"
          onLinkClick={() => navigate("/wrong-password")}
        />
        <RegistrationInfo
          registrationText="У вас нет аккаунта?"
          linkText="Зарегистрироваться"
          onLinkClick={() => navigate("/registration-page")}
          Infotext="Войти с помощью"
        />
      </StyleLoginPage>
    </Container>
  );
};
