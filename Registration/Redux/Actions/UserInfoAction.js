import {
    FETCHUSERNFO_FAILURE,
    FETCHUSERNFO_PROGRESS,
    FETCHUSERNFO_SUCCESS,
    FETCHUSERPICS_SUCCESS,
    FETCHUSERPICS_PROGRESS,
    FETCHUSERPICS_FAILURE
} from "../ActionConstants"

import axios from "axios"

const baseUrl="https://jsonplaceholder.typicode.com/users";
const baseUrl1="https://jsonplaceholder.typicode.com/photos"

// export function getUserInfo() {
//     return async dispatch => {
//         dispatch(
//             UserinfoPageDispatch({ isLoading: true }, FETCHUSERNFO_PROGRESS),
//         );
//         try {
//             const res = await request({ url: '/', method: 'GET' });
//             console.log('getAccount Response', res);
//             dispatch(
//                 UserinfoPageDispatch(res, FETCHUSERNFO_SUCCESS),
//             );
//         } catch (error) {
//             console.log('getAccount error', error);
//             dispatch( UserinfoPageDispatch(error,FETCHUSERNFO_FAILURE));
//         }
//     };

// }

export const getUserInfo=()=>{
    return dispatch =>{
        dispatch(UserinfoPageDispatch({loading: true},FETCHUSERNFO_PROGRESS))
        axios
        .get(baseUrl)
         .then(response =>{
            const data =response;
            console.log("dataaaaaaa",data.data)
            // dispatch(fetchUserSuccessDispatch(data),FETCH_USERS_SUCCESS)
            dispatch(UserinfoPageDispatch(data.data,FETCHUSERNFO_SUCCESS))
         })
        .catch((error)=>{
            console.log('error', error);
            dispatch(error,FETCHUSERNFO_FAILURE)
        })
    
    }
}

 export const getUserPhotos=()=>{
    return dispatch=>{
        dispatch( UserinfoPageDispatch({loading:true},FETCHUSERPICS_PROGRESS))
        axios
        .get(baseUrl1)
        .then(response=>{
            const data= response;
            console.log("picssss",data.data)
            dispatch(UserinfoPageDispatch(data.data,FETCHUSERPICS_SUCCESS))
        })
        .catch((error)=>{
            console.log("error",error),
            dispatch(error,FETCHUSERPICS_FAILURE)
        })
    }
}





 const UserinfoPageDispatch= (data,actionType) => {
    return {
      payload: data,
      type: actionType,
    };
  };