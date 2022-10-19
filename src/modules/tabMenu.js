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



// export default function tabMenuReducer(state=initialState, action){
//     switch (action.type) {
//         // state[] 에서 seleceted==true 인 element를 찾아서 false로 바꾸기
//         case UNSELECTALL_TABMENUITEM: 
//             return state.map((element)=>{
//                 if(element.selected) element.selected=false
//                 return element
//             })
//         // state[] 에서 data를 추가하기
//         case ADD_TABMENUITEM:
//             return state.concat(action.data)
//         // state[] 에서 선택한 메뉴만 찾아서 제거(아닌것만 빼고 배열에 추가)
//         case DELETE_TABMENUITEM:
//             return state.filter(element=>element.menu !== action.menu)
//         // state[] 을 차례로 돌면서 action.data.menu(선택한 메뉴)의 element가 나오면 seleted 상태로 만들기
//         case SELECT_TABMENUITEM:
//             return state.map((element)=>{
//                 if(element.menu == action.menu) element.selected=true
//                 return element
//             })
//         default:
//           return state;
//       }
// }
// action = {
//     type : ADD_TAP | DELETE_TAP | SELECT_TAP,
//     data : {
//         id : ,
//         value : '',
//         color : '',
//     }
// }
// nextId = 2
// state = {
//     selectedId : 0,
//     menuItems : [
//         {   
//             id : 0,
//             value : "내 강의",
//             color : 'indigo',
//         },
//         {   
//             id : 1,
//             value : "수강신청",
//             color : 'mint',
//         }
//     ]
// }