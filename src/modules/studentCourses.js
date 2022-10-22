// created courses
// 개설된 강의를 state로 저장하여 사용하기 위한 module

// 기능 : 강의 개설, 개설된 강의 취소 요청 후 제거
// 기능에 따른 업데이트 로직 : 목록 가져오기, 모두 제거

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
const ADD         = 'studentCourses/ADD';
const DELETE_ALL  = 'studentCourses/DELETE_ALL'

export const addStudentCourses    = (data) => ({type : ADD, data})
export const deleteStudentCourses = (    ) => ({type : DELETE_ALL})

export default function studentCoursesReducer(state=initialState, action){
    switch (action.type) {

        case ADD :
            return state.concat(action.data)

        case DELETE_ALL :
            console.log('수강신청한 목록 초기화')
            return []

            
        default : 
            return state
    }
}