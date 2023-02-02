import { Field } from 'formik'
import css from './InputBlock.module.css'

const InputBlock = ({errors, touched, name, validateFunc, label, placeholder, specType}) => {
  return (
    <div className={css.input_block}>
        <label className={css.input_block_label} htmlFor={name}>{label} <span className={css.requiret_filed_star}>*</span></label>
        <Field className={css.input_text + ` ${specType==='login'    && css.input_text_login}
                                             ${specType==='email'    && css.input_text_email}
                                             ${specType==='password' && css.input_text_password}
                                             ${specType==='code' && css.input_text_code}`
                                         + ` ${errors[name]==='Attention' && css.input_text_attention}
                                             ${touched[name] && css.input_text_touched}
                                             ${touched[name] && css.input_text_touched}
                                             ${errors[name] && touched[name] && css.input_text_error}`}
            validate={validateFunc} type="text" id={name} name={name} placeholder={placeholder}/>
    </div>
  )
}

export default InputBlock