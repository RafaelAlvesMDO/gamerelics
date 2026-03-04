import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("E-mail obrigatório"),
    password: Yup.string()
        .required("Senha obrigatória"),
});