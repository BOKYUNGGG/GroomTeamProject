// searched courses
// 검색한 강의들을 state로 관리하기 위한 module

// 기능 : 묶음으로 요청된 검색결과 저장, 단일로 요청된 검색결과 저장, 모두 지우기


// 업데이트 종류 : 하나 혹은 묶음 더하기, 전체 없애기
const initialState = [
    {
    //     couseId : "", 
    //     department : "", 
    //     title : "", 
    //     professorName : "",      
    //     credit : "", 
    //     numberOfStudents : "", 
    //     spare : "", 
    //     capacity : "", 
    //     year : "", 
    //     semester : "", 
    }
]

const ADD        = 'searchedCourses/ADD'
const DELETE_ALL = 'searchedCourses/DELETE_ALL'

export const addSearchedCourses       = (data) => ({type : ADD, data})
export const deleteAllSearchedCourses = (    ) => ({type : DELETE_ALL})

export default function searchedCoursesReucer(state=initialState, action){
    switch (action.type) {

        case ADD :
            return state.concat(action.data)


        case DELETE_ALL :
            return state.filter(()=>false)

            
        default : 
            return state
    }
}