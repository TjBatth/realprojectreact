
export default (state='',action)=>{
   switch (action.type) { 
       case 'FETCH':
        return action.user.data.results;
       case 'USER_FETCH_FAILED':
        
         return action.message;
       default:
        return state;
   }
}