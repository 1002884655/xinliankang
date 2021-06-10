import {
  CITY_LIST,
  CITY_SELECTED
} from '@/constants/city'

const INITIAL_STATE = {
  cityList: {},
  curCity: {}
}

export default function news(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CITY_LIST: {
      // console.log(action.payload, "！！action.payload！！")
      return {
        ...state,
        cityList: action.payload
      }
    }

    case CITY_SELECTED: {
      return {
        ...state,
        curCity: action.payload
      }
    }

    default:
      return state
  }
}
