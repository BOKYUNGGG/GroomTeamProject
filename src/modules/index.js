import { combineReducers } from "redux";
import profileReducer from "./profile";
import createdCoursesReducer from "./createdCourses"
import reservedCoursesReducer from "./reservedCourses"
import searchedCoursesReducer from "./searchedCourses"
import studentCoursesReducer from "./studentCourses";
import professorCoursesReducer from './professorCourses'
import tabReducer from "./tab";

const rootReducer = combineReducers({
    tabReducer, 
    profileReducer, 
    createdCoursesReducer, 
    reservedCoursesReducer,
    searchedCoursesReducer,
    studentCoursesReducer,
    professorCoursesReducer
})

export default rootReducer
