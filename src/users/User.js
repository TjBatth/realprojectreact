import React from 'react';
import { connect } from 'react-redux'
import fectchUser from './actions';


class User extends React.Component{

    render(){
       return(
              <div>
                <h1>{this.props.name}</h1>
                <button onClick={this.props.fectchData}>Fetch</button>
              </div>
             )
    }
}

const mapStateToProps=(state)=>({
    name:state
})
const mapDispatchToProps=(dispatch)=>(
    {
    fectchData:()=>{dispatch(fectchUser())}
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(User);

 