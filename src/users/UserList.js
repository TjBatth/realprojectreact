import React from 'react'
import * as style from './user.css'
import UserImage from './UserImage'
import UserName from './UserName'


export default (props)=>{
    console.log('value of image',props.name);
    return(
        <React.Fragment>
        {
            props.name &&
            props.name.map((userInfo,index)=>( 
                <div className={style.userStyle}>
                 <UserImage url={userInfo.picture.large}/>
                 <UserName name={userInfo.name.first}/> 
                </div>
            ))
        }  
           
        </React.Fragment>

    )
}