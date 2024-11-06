import Modal from "react-modal";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IPost } from "../../store/Api/postApi";
import { SPostForm, SPostButtonContainer } from "./PostPage.style";
import { Input } from "../../components/UI/Input/InputWord";
import { Button } from "../../components/UI/Button/Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
  },
};

const AddNewPostScheme = yup.object({
  mainText: yup.string().required("Введите содерхимое поста"),
});

interface IAddNewPostProps {
  openModal: boolean;
  onCloseModal: () => void;
  post?: IPost;
}
interface IAddNewPostSubmit{
    main_text:string
}
export const AddNewPost = ({
  openModal,
  onCloseModal,
  post,
}: IAddNewPostProps) => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(AddNewPostScheme),
    defaultValues: {
      mainText: "",
    },
  });

  const addNewPostSubmit=SubmitHandler<IAddNewPostSubmit>(data)=>{
    console.log(data)
  }
  return (
    <Modal isOpen={openModal} style={customStyles}>
      <SPostForm onSubmit={handleSubmit(addNewPostSubmit())}>
        <h3>Ваш пост</h3>
        <Controller
          name="mainText"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Электронная почта"
              errorText={errors.mainText?.message}
              isError={Boolean(errors.mainText)}
              {...field}
            />
          )}
        />

        <SPostButtonContainer>
          <Button buttonText="Сохранить" type="submit" />
          <Button
            buttonText="Отменить"
            onClick={() => {
              onCloseModal;
            }}
          />
        </SPostButtonContainer>
      </SPostForm>
    </Modal>
  );
};
