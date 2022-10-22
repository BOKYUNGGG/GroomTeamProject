// reserved courses
// 수강신청 예약된 강의(관심과목)들을 state로 관리하기 위한 module

// 기능 : 수강신청 신청 완료 시 관심과목 목록에서 제거, 선택 강의 관심과목에서 제거, 관심과목 담기
// 기능에 따른 업데이트 로직 : 목록 더하기, 하나 제거

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
const ADD     = 'reservedCourses/ADD';
const DELETE  = 'reservedCourses/DELETE'

export const addReservedCourses     = (data) => ({type : ADD, data})
export const deleteReservedCourses  = (data) => ({type : DELETE, data})

export default function reservedCoursesReducer(state=initialState, action){
    switch (action.type) {


        case ADD :
            console.log(state)
            const newState = state.concat(action.data)

            return newState.filter((item, pos) => newState.indexOf(item) === pos)

        case DELETE :
            return state.filter(element => element.courseId !== action.data.courseId)

            
        default : 
            return state
    }
}

