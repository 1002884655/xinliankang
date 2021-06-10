import {
  NEWS_LIST,
  NEWS_DETAIL
} from '@/constants/news'

const INITIAL_STATE = {
  newsList: {},
  newsDetail: {}
}

export default function news(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEWS_LIST: {
      return {
        ...state,
        newsList: {
          ...action.payload
        }
      }
    }
    case NEWS_DETAIL: {
      return {
        ...state,
        newsDetail: {
          ...action.payload
        }
      }
    }

    default:
      return state
  }
}
