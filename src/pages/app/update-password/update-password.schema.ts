import * as Yup from "yup";

export type FormDataUpdatePassword = {
  old_password: string;
  new_password: string;
  confirm_new_password: string;
};

export const updatePasswordSchema = Yup.object()
  .shape({
    old_password: Yup.string()
      .min(6, "A senha deve possuir pelo menos 6 caracteres")
      .required("Campo obrigatório"),
    new_password: Yup.string()
      .min(6, "A senha deve possuir pelo menos 6 caracteres")
      .required("Campo obrigatório"),
    confirm_new_password: Yup.string()
      .min(6, "A senha deve possuir pelo menos 6 caracteres")
      .required("Campo obrigatório")
      .test("passwords-match", "As senhas devem ser iguais", function (value) {
        return this.parent.new_password === value;
      }),
  })
  .required();
