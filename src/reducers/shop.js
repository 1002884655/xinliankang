import {
  GOODS_LIST,
  GOODS_DETAIL,
  GOODS_EXCHANGE_RECORDS,
  POINTS_RECORDS,
  POINTS_RULE
} from '@/constants/shop'

const INITIAL_STATE = {
  goods: {},
  goodsDetail: {},
  exchangeRecords: {},
  pointsRecords: {},
  pointsRule:{}
}

export default function shop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GOODS_LIST: {
      return {
        ...state,
        goods: {
          ...action.payload
        }
      }
    }
    case GOODS_DETAIL: {
      return {
        ...state,
        goodsDetail: {
          ...action.payload
        }
      }
    }
    case GOODS_EXCHANGE_RECORDS: {
      return {
        ...state,
        exchangeRecords: {
          ...action.payload
        }
      }
    }
    case POINTS_RECORDS: {
      return {
        ...state,
        pointsRecords: {
          ...action.payload
        }
      }
    }
    case POINTS_RULE: {
      return {
        ...state,
        pointsRule: {
          ...action.payload
        }
      }
    }
    default:
      return state
  }
}
