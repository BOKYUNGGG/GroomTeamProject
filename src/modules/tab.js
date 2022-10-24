// Tab Menu state를 관리하기 위한 module입니다.
import produce from "immer";

const ADD           = 'tab/ADD'
const TOGGLE        = 'tab/TOGGLE'
const DELETE        = 'tab/DELETE'

export const addTab         = (data) => ({type : ADD,    data})
export const toggleTab      = (data) => ({type : TOGGLE, data})
export const deleteTab      = (data) => ({type : DELETE, data})

const initialState = [
    {
        selected : true,
        className : "selected",
        menu : "Search Course",
        color : "indigo"
    }
]

const returnColor = (menu) => {
    switch (menu){
        case "Search Course":
            return "indigo"
        case "Student's Course":
            return "orange"
        case "Put Enrollment":
            return "mint"
        case "Professor's Course":
            return "purple"
        case "Create Course":
            return "blue"
    }
}
export default function tabReducer(state=initialState, action){
    switch (action.type) {
        // 동작 확인 완료
        case ADD :
            for (let element of state){
                if(element.menu == action.data.menu) return state
            }
            return state.concat({
                selected : false,
                menu : action.data.menu,
                className : "non-selected",
                color : returnColor(action.data.menu)
            })
        // 동작 확인 완료
        case TOGGLE :
            const toggledState = state.map(element => element.selected ? {...element, className : "non-selected", selected : false} : element) 
            return toggledState.map(element => element.menu == action.data ? {...element, className : "selected", selected :true} : element)
        // 동작 확인 완료
        case DELETE : 
            if (state.length == 1) return state
            else {
                const deletedState = state.filter(element => element.menu !== action.data)    
                deletedState[0].selected = true
                deletedState[0].className = "selected"
                return deletedState
            }
        default : 
            return state
    }
}
