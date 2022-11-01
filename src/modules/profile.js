// action type 정의
const UPDATE = 'profile/UPDATE'
const DELETE = 'profile/DLETE'

// reducer 로직 명령을 수행시킬 함수
export const updateProfileInfo = (data) => ({type : UPDATE, data})
export const deleteProfileInfo = (    ) => ({type : DELETE      })


// 초기 state 설정
const initialState = null
// {
//   studentId :20142058,
//   name : '김예준',
//   email : 'rladpwns12@gmail.com',
//   password : 'qwer1234',
//   department : 'ACCOUNTING',
// } 


// 업데이트 로직 정의
export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE:
          console.log('프로필 정보를 업데이트 합니다.',action.data)
          return action.data
        case DELETE:
          return null
        default:
          return state;
      }
}
