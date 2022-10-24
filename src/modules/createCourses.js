// created courses
// 개설된 강의를 state로 저장하여 사용하기 위한 module

// 기능 : 강의 개설, 개설된 강의 취소 요청 후 제거
// 기능에 따른 업데이트 로직 : 목록 가져오기, 모두 제거

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