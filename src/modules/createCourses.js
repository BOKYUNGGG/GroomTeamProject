

const initialState = [
    {   
        id : 0,
        year : "", 
        credit : "", 
        courseId : "", 
        capacity : "", 
        title : "", 
        semester : "SPRING", 
        department : "ACCOUNTING", 
    }
]
var nextId = 1
const ADD         = 'createCourses/ADD'
const CHANGE      = 'createCourses/CHANGE'
const DELETE      = 'createCourses/DELETE'
const DELETE_ALL  = 'createCourses/DELETE_ALL'

export const addCreateCourses        = (    ) => ({type : ADD})
export const changeCreateCourses     = (data) => ({type : CHANGE, data})
export const deleteCreateCourses     = (data) => ({type : DELETE, data})
export const deleteAllCreateCourses  = (    ) => ({type : DELETE_ALL})

export default function createCoursesReducer(state=initialState, action){
    switch (action.type) {
        case ADD :
            return state.concat({
                id : nextId++,
                year : "", 
                credit : "", 
                courseId : "", 
                capacity : "", 
                title : "", 
                semester : "SPRING", 
                department : "ACCOUNTING", 
            })
            
        case CHANGE :
            return state.map((element)=>{
                if(element.id == action.data.id) return action.data
                else return element
            })
        case DELETE :
            console.log('DELETE create course')
            if (state.length == 1) return state
            else {
                return state.filter((element)=>element.id !== action.data.id)
            }
        case DELETE_ALL :
            console.log('DELETE ALL create course')
            nextId = 1
            return initialState

            
        default : 
            return state
    }
}