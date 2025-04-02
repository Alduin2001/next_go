import * as yup from 'yup'

export const userSchemaValid = yup.object().shape({
    name:yup.string().required('Обязательно для заполнения'),
    surname:yup.string().required('Обязательно для заполнения'),
    email:yup.string().required('Обязательно для заполнения').email('Некорректный формат почты'),
    password:yup.string().required('Обязательно для заполнения')
})