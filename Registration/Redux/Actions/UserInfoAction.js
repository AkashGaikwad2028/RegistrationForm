import {
    FETCHUSERNFO_FAILURE,
    FETCHUSERNFO_PROGRESS,
    FETCHUSERNFO_SUCCESS
} from "../ActionConstants"


export function getUserInfo() {
    return async dispatch => {
        dispatch(
            UserinfoPageDispatch({ isLoading: true }, FETCHUSERNFO_PROGRESS),
        );
        try {
            const res = await request({ url: '/account', method: 'GET' });
            console.log('getAccount Response', res);
            dispatch(
                UserinfoPageDispatch(res, FETCHUSERNFO_SUCCESS),
            );
        } catch (error) {
            console.log('getAccount error', error);
            dispatch( UserinfoPageDispatch(error,FETCHUSERNFO_FAILURE));
        }
    };

}






 const UserinfoPageDispatch= (data,actionType) => {
    return {
      payload: data,
      type: actionType,
    };
  };