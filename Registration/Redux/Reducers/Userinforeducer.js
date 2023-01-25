import {
    FETCHUSERNFO_FAILURE,
    FETCHUSERNFO_PROGRESS,
    FETCHUSERNFO_SUCCESS
} from "../ActionConstants"

const initalState = {
    isLoading: false,
   userInfopage:{}
  };

  const UserInfopagereducer=(state=initalState,action)=>{
   switch(action.type){
   case  FETCHUSERNFO_PROGRESS:
    return{
        ...state,
        isLoading:true
    }
    case FETCHUSERNFO_SUCCESS:
        return{
            ...state,
            isLoading:false,
            userInfopage:action.payload
        }
        case  FETCHUSERNFO_FAILURE:
        return{
            ...state,
            isLoading:false,
            userInfopage:action.payload
        }
        default:
            return state;
   }
  }

  export default UserInfopagereducer