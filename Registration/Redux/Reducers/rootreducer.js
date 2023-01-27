import { combineReducers } from "redux";
import UserInfopagereducer from "./Userinforeducer";
import { UserInfoPicsReducer } from "./Userinforeducer";

const Rootreducers=combineReducers({
    UserInfopagereducer:UserInfopagereducer,
    userInfoPicReducer:UserInfoPicsReducer
})

export default Rootreducers