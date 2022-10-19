// created courses
// 개설된 강의를 state로 저장하여 사용하기 위한 module

// 기능 : 강의 개설, 개설된 강의 취소 요청 후 제거
// 기능에 따른 업데이트 로직 : 목록 가져오기, 모두 제거

const initialState = [
    {
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
    }
]
const ADD         = 'createdCourses/ADD';
const DELETE_ALL  = 'createdCourses/DELETE_ALL'

export const addCreatedCourses        = (data) => ({type : ADD, data})
export const deleteAllCreatedCourses  = (    ) => ({type : DELETE_ALL})

export default function createdCoursesReucer(state=initialState, action){
    switch (action.type) {

        case ADD :
            return state.concat(action.data)

        case DELETE_ALL :
            return state.filter(()=>false)

            
        default : 
            return state
    }
}