import React, { useState } from 'react'
import css from './css/Button.module.css'

const Button = ({content, link, buttonStyle, customClasses, style, onClickFun, presetActStt=false, actSttCls = '', actCntnt=''}) => {
    const [actStt, setActStt] = useState(presetActStt)
    let onClickFunctions = () => {
        if (onClickFun) onClickFun()
        if (actSttCls||actCntnt) setActStt(!actStt)
    }
    let styleClasses = buttonStyle === 'gradBtn' ? css.gradient_btn : buttonStyle === 'greyBtn'? css.grey_btn : ''
    return (<>
        {link?<a className={`${css.btn} ${styleClasses} ${customClasses} ${actStt?actSttCls:''}`} onClick={()=>onClickFunctions()} style={style} href={link}>{actStt?actCntnt:content}</a>:
        <button className={`${css.btn} ${styleClasses} ${customClasses} ${actStt?actSttCls:''}`} onClick={()=>onClickFunctions()} style={style}>{actStt?actCntnt:content}</button>}
        </>
    )
}

export default Button