
export default (state='',action)=>{
   switch (action.type) { 
       case 'FETCH':
        return 'FETCH SUCCESSFULLY'
       default:
        return state="Test Again";
   }
}