// this is the root reducers
import {combineReducers} from "redux"
import courses from './courseReducers' // this  is the reducer that handle the state update after the create course action is triggered
const rootReducer = combineReducers({
    courses:courses
})

export default rootReducer;