import { combineReducers } from "redux";
import profileReducer from "./profile";
import createCoursesReducer from "./createCourses"
import reservedCoursesReducer from "./reservedCourses"
import searchedCoursesReducer from "./searchedCourses"
import studentCoursesReducer from "./studentCourses";
import professorCoursesReducer from './professorCourses'
import tabReducer from "./tab";

const rootReducer = combineReducers({
    tabReducer, 
    profileReducer, 
    createCoursesReducer, 
    reservedCoursesReducer,
    searchedCoursesReducer,
    studentCoursesReducer,
    professorCoursesReducer
})

export default rootReducer
