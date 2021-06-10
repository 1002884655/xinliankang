import { mergeNotNull } from '@/utils/tools'

import {
  USER_INFO,
  // USER_QUERY_INFO,
  USER_SIGNIN,
  ASSIGN_UNREADNUM,
  INCREASE_UNREADNUM,
  DECREASE_UNREADNUM,
  UPDATE_USER_INFO,
} from '@/constants/user'

const INITIAL_STATE = {
  userInfo: {
    person: {},
    extraInfo: {},
    miniApp: {},
  },
  unReadNum: 0
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_INFO: {
      if (!(state.userInfo || {}).person) {
        return {
          ...state,
          userInfo: {
            ...action.payload
          }
        }
      } else {
        const { person, extraInfo, miniApp } = action.payload || {}
        const newPerson = mergeNotNull(state.userInfo.person, person)
        const newExtraInfo = mergeNotNull(state.userInfo.extraInfo, extraInfo)
        const newMiniApp = mergeNotNull(state.userInfo.miniApp, miniApp)
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            ...action.payload,
            person: newPerson,
            extraInfo: newExtraInfo,
            miniApp: newMiniApp,
          }
        }
      }
    }
    // case USER_QUERY_INFO: {
    //   const { person } = state.userInfo
    //   return {
    //     ...state,
    //     userInfo: {
    //       person,
    //       extraInfo: {
    //         ...action.payload
    //       }

    //     }
    //   }
    // }
    case UPDATE_USER_INFO: {
      // debugger
      const { person, extraInfo, miniApp = {} } = state.userInfo
      const newPerson = mergeNotNull(person, action.payload)

      return {
        ...state,
        userInfo: {
          extraInfo,
          person: newPerson,
          miniApp,
        }
      }
    }
    case USER_SIGNIN: {
      let { person, extraInfo, miniApp = {} } = state.userInfo
      return {
        ...state,
        userInfo: {
          person: {
            ...person,
            points: (person.points + 1)
          },
          extraInfo: {
            ...extraInfo,
            havaSigned: 1
          },
          miniApp,
        }
      }
    }
    case ASSIGN_UNREADNUM: {
      let { unReadNum } = action.payload
      return {
        ...state,
        unReadNum
      }
    }
    case INCREASE_UNREADNUM: {
      let { unReadNum } = state
      return {
        ...state,
        unReadNum: unReadNum + 1
      }
    }
    case DECREASE_UNREADNUM: {
      let { unReadNum } = state

      if (action.payload === undefined) {
        unReadNum = 0
      } else {
        unReadNum = unReadNum - action.payload
        if (unReadNum < 0) {
          unReadNum = 0
        }
      }

      return {
        ...state,
        unReadNum,
      }
    }
    default:
      return state
  }
}
