import {
  PROJECT_DETAIL,
  PROJECT_LIST,
  PROJECT_SCREEN,
  SET_SCREEN_SHOWED,
} from '@/constants/project'


const INITIAL_STATE = {
  proList: {},
  projectDetail: {},
  screen: {},
  screenShow: undefined,
}

export default function project(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PROJECT_LIST: {
      return {
        ...state,
        proList: {
          ...action.payload
        }
      }
    }
    case PROJECT_DETAIL: {
      return {
        ...state,
        projectDetail: {
          ...action.payload
        }
      }
    }
    case PROJECT_SCREEN: {
      return {
        ...state,
        screen: (action.payload || [])[0] || {}
      }
    }

    case SET_SCREEN_SHOWED: {
      return {
        ...state,
        screenShow: action.payload,
      }
    }

    default:
      return state
  }
}
