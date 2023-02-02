import { Field, Form, Formik } from 'formik'
import Button from '../../../components/_common/Button';
import css from './Forms.module.css'
import InputBlock from './FormsParts/InputBlock';

const RegainAccess2 = () => {
  
  return (
    <>
    <Formik
        initialValues={{ pass: "", passCopy: "" }}
        onSubmit={(values)=>console.log(values)}
        >
        {({ errors, touched, isValid, dirty }) => (
        <Form className={css.auth_form}>
        <div className={css.auth_page_block}>
            <InputBlock name='pass' validateFunc={()=>{}} label='Придумайте пароль' placeholder='Пароль' specType='password' errors={errors} touched={touched}/>
            <InputBlock name='passCopy' validateFunc={()=>{}} label='Повторите пароль' placeholder='Пароль' specType='password' errors={errors} touched={touched}/>
        </div>
        <div className={css.auth_page_content_footer}>
          <Button style={{'width':'572px'}} customClasses={`${!(dirty && isValid) && css.reg_btn_disabled}`} buttonStyle={'gradBtn'} content={'Сбросить пароль аккаунта'} disabled={!(dirty && isValid)}/>
          <div className={css.auth_comment}>Я забыл кое-что! <a className={css.auth_page_link} href="#">Вернуться назад</a></div>
        </div>
        </Form>)}
      </Formik>
      </>
  )
}

export default RegainAccess2