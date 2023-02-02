import { Field, Form, Formik } from 'formik'
import Button from '../../../components/_common/Button';
import css from './Forms.module.css'
import InputBlock from './FormsParts/InputBlock';

const PassChange = () => {
  
  return (
    <>
    <Formik
        initialValues={{ newPass: "", passCopy: "", oldPass: "" }}
        onSubmit={(values)=>console.log(values)}
        >
        {({ errors, touched, isValid, dirty }) => (
        <Form className={css.auth_form}>
        <div className={css.auth_page_block}>
            <InputBlock name='newPass' validateFunc={()=>{}} label='Новый пароль' placeholder='Пароль' specType='password' errors={errors} touched={touched}/>
            <InputBlock name='pass' validateFunc={()=>{}} label='Подтверждение пароля' placeholder='Пароль' specType='password' errors={errors} touched={touched}/>
            <InputBlock name='passCopy' validateFunc={()=>{}} label='Старый пароль' placeholder='Пароль' specType='password' errors={errors} touched={touched}/>
        </div>
        <div className={css.auth_page_content_footer}>
          <Button style={{'width':'572px'}} customClasses={`${!(dirty && isValid) && css.reg_btn_disabled}`} buttonStyle={'gradBtn'} content={'Изменить пароль аккаунта'} disabled={!(dirty && isValid)}/>
          <div className={css.auth_comment}>Я передумал! <a className={css.auth_page_link} href="#">Вернуться назад</a></div>
        </div>
        </Form>)}
      </Formik>
      </>
  )
}

export default PassChange