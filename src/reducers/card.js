import {
  CARD_INFO,
  CARD_LIST,
  CARD_LIKE,
  CARD_UNLIKE
} from '@/constants/card'

const INITIAL_STATE = {
  cardList: [],
  cardInfo: {}
}

export default function card(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CARD_INFO: {
      return {
        ...state,
        cardInfo: {
          ...action.payload
        }
      }
    }
    case CARD_LIKE: {
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          liked: true,
          likeNum: state.cardInfo.likeNum + 1
        }
      }
    }
    case CARD_UNLIKE: {
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          liked: false,
          likeNum: state.cardInfo.likeNum - 1
        }
      }
    }
    case CARD_LIST: {
      return {
        ...state,
        cardList: {
          ...action.payload.records || []
        }
      }
    }

    default:
      return state
  }
}
