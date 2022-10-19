import { combineReducers } from "redux";
import tabMenuReducer from "./tabMenu";
import profileReducer from "./profile";
import createdCoursesReducer from "./createdCourses"
import reservedCoursesReducer from "./reservedCourses"
import searchedCoursesReducer from "./searchedCourses"
const rootReducer = combineReducers({
    tabMenuReducer, 
    profileReducer, 
    createdCoursesReducer, 
    reservedCoursesReducer,
    searchedCoursesReducer
})

export default rootReducer