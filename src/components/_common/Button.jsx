import React, { useEffect, useState } from 'react'
import css from './css/Button.module.css'

const Button = ({dis=false, content, link, buttonStyle, customClasses, style, onClickFun, onClickFunPrms, presetActStt=false, actSttCls, actCntnt=''}) => {
    const [actStt, setActStt] = useState(presetActStt)
    useEffect(() => {
        setActStt(presetActStt)
    }, [presetActStt])
    let onClickFunctions = () => {
        if (onClickFun) onClickFun(onClickFunPrms)
        if (actSttCls||actCntnt) setActStt(!actStt)
    }
    let styleClasses = buttonStyle === 'gradBtn' ? css.gradient_btn : buttonStyle === 'greyBtn'? css.grey_btn : buttonStyle === 'btnAct'? css.btn_act : ''
    return (<>
        {link?<a className={`${css.btn} ${styleClasses} ${customClasses} ${buttonStyle === 'btnAct'?css.bordre_none:''} ${actStt?actSttCls:''}`} onClick={()=>onClickFunctions()} style={style} href={link}>
            {buttonStyle === 'btnAct'?<>
                <span className={css.btn_content_wrap+` ${actStt?css.btn_act:''}`}>{actCntnt}</span>
                <span className={css.btn_content_wrap+` ${actStt?'':css.btn_act}`}>{content}</span>
            </>:actStt?actCntnt:content}
            </a>:
        <button disabled={dis} className={`${css.btn} ${styleClasses} ${customClasses} ${buttonStyle === 'btnAct'?css.bordre_none:''} ${actStt?actSttCls:''}`} onClick={()=>onClickFunctions()} style={style}>
            {buttonStyle === 'btnAct'?<>
                <span className={css.btn_content_wrap+` ${actStt?css.btn_act:''}`}>{actCntnt}</span>
                <span className={css.btn_content_wrap+` ${actStt?'':css.btn_act}`}>{content}</span>
            </>:actStt?actCntnt:content}
            </button>}
        </>
    )
}

export default Button