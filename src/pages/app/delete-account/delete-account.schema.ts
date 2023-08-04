import * as Yup from "yup";

export type FormDataDeleteAccount = {
  password: string;
  confirm_password: string;
};

export const deleteAccountSchema = Yup.object()
  .shape({
    password: Yup.string()
      .min(6, "A senha deve possuir pelo menos 6 caracteres")
      .required("Campo obrigatório"),
    confirm_password: Yup.string()
      .min(6, "A senha deve possuir pelo menos 6 caracteres")
      .required("Campo obrigatório")
      .test("passwords-match", "As senhas devem ser iguais", function (value) {
        return this.parent.password === value;
      }),
  })
  .required();
