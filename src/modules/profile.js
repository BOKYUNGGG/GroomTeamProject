// action type 정의
const UPDATE = 'profile/UPDATE'
const DELETE = 'profile/DLETE'

// reducer 로직 명령을 수행시킬 함수
export const updateProfileInfo = (data) => ({type : UPDATE, data})
export const deleteProfileInfo = (    ) => ({type : DELETE      })


const initialState = null

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE:
          return action.data
        case DELETE:
          return null
        default:
          return state;
      }
}
