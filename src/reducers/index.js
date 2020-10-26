import {combineReducers} from "redux"
import countreducer from "./countreducer"
import readreducer from "./readreducer"
export default combineReducers({ countreducer, readreducer})