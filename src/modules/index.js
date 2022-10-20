import { combineReducers } from "redux";
import tabMenuReducer from "./tabMenu";
import profileReducer from "./profile";
import createdCoursesReducer from "./createdCourses"
import reservedCoursesReducer from "./reservedCourses"
import searchedCoursesReducer from "./searchedCourses"
import tabReducer from "./tab";
const rootReducer = combineReducers({
    tabMenuReducer,
    tabReducer, 
    profileReducer, 
    createdCoursesReducer, 
    reservedCoursesReducer,
    searchedCoursesReducer
})

export default rootReducer