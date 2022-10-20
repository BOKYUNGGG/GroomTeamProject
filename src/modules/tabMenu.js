// Tab Menu state를 관리하기 위한 module입니다.
import produce from "immer";

const ADD     = 'tabs/ADD';
const TOGGLE  = 'tabs/TOGGLE'
const DELETE  = 'tabs/DELETE'

export const addTabMenuItem         = (data) => ({type : ADD,    data})
export const deleteTabMenuItem      = (data) => ({type : TOGGLE, data})
export const toggleTabMenuItem      = (data) => ({type : DELETE, data})

const initialState = {
    total : 1,
    selectedId : 0,
    menuItems : [
        {
            id : 0,
            value : "Search Course",
            color : "indigo"
        }
    ]
}

export default function tabMenuReducer(state=initialState, action){
    switch (action.type) {
        case ADD :
            if (state.menuItems.some(item=>item.value===action.data.value)) return
            else 
                return produce(state, draft => {
                    draft.menuItems.push({
                    id:draft.total,
                    value: action.data.value,
                    color: action.data.color
                    })
                    draft.selectedId = draft.total
                    draft.total += 1
                })
        case TOGGLE :
            return produce(state, draft => {
                draft.selectedId = action.data
            })
        case DELETE : 
            return produce(state, draft => {
                draft.selectedId = 0
                const index = draft.menuItems.findIndex(element => element.id == action.data)
                draft.menuItems.splice(index,1)
                draft.total -= 1
            })
        default : 
            return state
    }
}
