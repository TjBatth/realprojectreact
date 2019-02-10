import React from 'react'
import  * as style from'./UserImage.css'


export default (props)=>{
    return(
        <img className={style.imageStyle} alt="image is goes" src={props.url}/>
    )
}