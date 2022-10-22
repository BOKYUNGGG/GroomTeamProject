const initialState = [
    
    // 
    //     couseId : "", 
    //     department : "", 
    //     title : "", 
    //     credit : "", 
    //     numberOfStudents : "", 
    //     spare : "", 
    //     capacity : "", 
    //     year : "", 
    //     semester : "", 
    //   
    
]
const ADD         = 'professorCourses/ADD';
const DELETE_ALL  = 'professorCourses/DELETE_ALL'

export const addProfessorCourses    = (data) => ({type : ADD, data})
export const deleteProfessorCourses = (    ) => ({type : DELETE_ALL})

export default function professorCoursesReducer(state=initialState, action){
    switch (action.type) {

        case ADD :
            return state.concat(action.data)

        case DELETE_ALL :
            console.log('교수강의 목록 초기화')
            return []

            
        default : 
            return state
    }
}