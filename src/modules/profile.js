const ADD     = 'profile/ADD'
const SIGNIN    = 'profile/SIGNIN'
const LOGOUT    = 'profile/LOGOUT'

export const addProfileInfo  = (data) => ({type : ADD , data})
export const signin = (data) => ({type : SIGNIN, data})
export const logout = (    ) => ({type : LOGOUT      })


const initialState = {
    logined : false,
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
          return {
            ...state,
            logined : true,
            profileInfo : action.data
          };
        case SIGNIN:
          return {
            ...state,
            logined : true,
            profileInfo : action.data          
        };
        case LOGOUT:
          return {
            ...state,
            logined : false,
            profileInfo : null   
          };
        default:
          return state;
      }

}
