import React from 'react';
import { connect } from 'react-redux'
import fectchUser from './actions';
import * as style from '../users/user.css'
import UserList from './UserList'

class User extends React.Component{

    render(){ 
       return(
               <React.Fragment>
               <div className={style.userOuter}>
                 <UserList {...this.props}/>
                </div>
                 <button onClick={this.props.fectchData}>Fetch</button>
               </React.Fragment>
             )
    }
}

const mapStateToProps=(state)=>({
    name:state
})
const mapDispatchToProps=(dispatch)=>(
    {
    fectchData:()=>{dispatch({type:'USER_FETCH_REQUESTED'})}
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(User);

 