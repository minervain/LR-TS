
import { object, string, ref} from 'yup';

let userSchema = object({
    email: string().email("Gecerli bir e-mail girin").required(),
    password: string().min(5, "Parolaniz en az 5 karakter olmalidir").required(),
   passwordConfirm: string().oneOf([ref("password")]).required()
})

export default userSchema;