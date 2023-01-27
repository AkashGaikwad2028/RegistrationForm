import {
    FETCHUSERNFO_FAILURE,
    FETCHUSERNFO_PROGRESS,
    FETCHUSERNFO_SUCCESS,
    FETCHUSERPICS_FAILURE,
    FETCHUSERPICS_SUCCESS,
    FETCHUSERPICS_PROGRESS
} from "../ActionConstants"

const initalState = {
    isLoading: false,
   userInfopage:{},
   userPics:{}
  };

  const UserInfopagereducer=(state=initalState,action)=>{
    console.log("picpayload",action)
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

//   const initalState1 = {
//     isLoading: false,
//    userPics:{}
//   };

  export default UserInfopagereducer

 export  const UserInfoPicsReducer=(state=initalState,action)=>{
    switch(action.type){
        case  FETCHUSERPICS_PROGRESS:
            return{
                ...state,
                isLoading:true
            }
            case FETCHUSERPICS_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    userPics:action.payload
                }
                case  FETCHUSERPICS_FAILURE:
                return{
                    ...state,
                    isLoading:false,
                    userPics:action.payload
                }
                default:
                    return state ;
    }
  }

