import React, { useState } from 'react'
import css from '../../css/InstallPathSlider.module.css'
import diskAR from '../../../../../../../_data/Disks.json'
import InstallPathSlide from './InstallPathSlide'


const InstallPathSlider = () => {
    const [strtSld, setStrtSld] = useState(1)

    let diskList = diskAR.diskList
    let diskListMap = diskList.map(d => 
        <InstallPathSlide strt={strtSld===d.id?true:false} name={d.key} space={d.space} chosen={d.chosen} id={d.id} key={d.key}/>
        )
    return (
        <div className={css.ipth_slider_wrap}>
            <button onClick={()=>setStrtSld(strtSld===1?strtSld:strtSld-1)} className={css.ipth_slider_nav+' '+css.ipth_slider_prev+` ${strtSld===1?css.ipth_slider_prev_dsbd:''}`}><img src={'/imgs/icons/main_page/disk_b-left-right.svg'} alt="" /></button>
                <div className={css.ipth_slider}>
                    {diskListMap}
                </div>
            <button onClick={()=>setStrtSld(strtSld+3===diskList.length?strtSld:strtSld+1)} className={css.ipth_slider_nav+' '+css.ipth_slider_next+` ${strtSld+3===diskList.length?css.ipth_slider_next_dsbd:''}`}><img src={'/imgs/icons/main_page/disk_b-left-right.svg'} alt="" /></button>
        </div>
    )
}

export default InstallPathSlider