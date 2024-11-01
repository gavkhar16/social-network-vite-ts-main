import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/Header/Heading";
import * as yup from "yup";
import { Linktext } from "../../components/Header/Typography/LinkText/Linktext";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/container.style";
import { RegistrationInfo } from "../../components/UI/RegistrationInfo/RegistrationInfo";
import { Input } from "../../components/UI/Input/InputWord";
import { StyleLoginPage } from "./LogiPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { useLoginUserMutation } from "../../store/Api/authApi";



interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormScheme = yup.object({
  useremail: yup
    .string()
    .required("Обязательное поле")
    .email("Неверный формат эл почты"),
  userpassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен содержать не менее 4 символов"),
});

export const LoginPage = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);
  const navigate = useNavigate();
  const [loginUser, { data: newData }] = useLoginUserMutation();
  console.log(user);

  useEffect(() => {
    if (newData?.user_id) {
      console.log(newData);
    }
  }, [newData, navigate]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    // resolver: yupResolver(loginFormScheme),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    loginUser({ email: data.useremail, password: data.userpassword });
  };

  return (
    <Container>
      <StyleLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Электронная почта"
                errorText={errors.useremail?.message}
                isError={!!errors.useremail}
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Введите пароль"
                errorText={errors.userpassword?.message}
                isError={!!errors.userpassword}
                {...field}
              />
            )}
          />
          <Button $isPrimary buttonText="Войти" />
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
