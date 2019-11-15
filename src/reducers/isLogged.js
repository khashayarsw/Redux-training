const Logger = (state=false,action)=>{
    switch(action.type){
        case 'IS_LOG_IN':
            return !state;
        default : return state;
    }
}
export default Logger;