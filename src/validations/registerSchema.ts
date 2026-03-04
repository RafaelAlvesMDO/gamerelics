import * as Yup from "yup";
import { nameRegex, passwordRegex } from "../utils/regex";

export const registerSchema = Yup.object().shape({
    name: Yup.string()
        .matches(
            nameRegex,
            "Nome deve conter apenas letras"
        )
        .min(3, "Nome muito curto")
        .required("Nome obrigatório"),
    email: Yup.string().email().required("E-mail obrigatório"),
    password: Yup.string()
        .matches(
            passwordRegex,
            "Senha deve conter pelo menos:\n- 8 caractéres\n- 1 letra maiúscula\n- 1 número\n- 1 caractére especial"
        )
        .required("Senha obrigatória"),
});