const initialState = [

]

const ADD        = 'searchedCourses/ADD'
const DELETE_ALL = 'searchedCourses/DELETE_ALL'

export const addSearchedCourses       = (data) => ({type : ADD, data})
export const deleteAllSearchedCourses = (    ) => ({type : DELETE_ALL})

export default function searchedCoursesReducer(state=initialState, action){
    switch (action.type) {

        // action.data = []
        // 필요없는거 제거해서 넣어야함
        case ADD :
            return state.concat(action.data)

        case DELETE_ALL :
            return []

        default : 
            return state
    }
}


