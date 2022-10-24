const initialState = []
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

