/**
 * 房源相关
 */

 import {
   ADD_CART,
   SUB_CART,
   FLUSH_TO_CART,
   ADD_CONSULTANT,
   CHOOSE_CONSULTANT,
   MY_PRESELECT_RECORD,
   SET_ONLINE_PROTOCOL,
 } from '@/constants/house'

const INITIAL_STATE = {
  // 认筹临时选中房源
  raiseCart: [],

  // 置业顾问列表
  consultantList: [],

  // 认筹选中置业
  chooseConsultant: undefined,

  // 预选房源列表
  mySelectHouses: [],

  //
  onlineProtocol: '',
}

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action

  switch(type) {
    // 加入临时选择
    case ADD_CART:
      return {
        ...state,
        raiseCart: state.raiseCart.filter(x => x.houseId != payload.houseId).concat(payload),
      };

    // 取消临时选择
    case SUB_CART:
      return {
        ...state,
        raiseCart: state.raiseCart.filter(x => x.houseId != payload.houseId),
      };

    //
    case FLUSH_TO_CART:
      return {
        ...state,
        raiseCart: payload,
      };

    case ADD_CONSULTANT:
      return {
        ...state,
        consultantList: payload.records,
      };

    case CHOOSE_CONSULTANT:
      return {
        ...state,
        chooseConsultant: payload,
      };

    case MY_PRESELECT_RECORD:
      return {
        ...state,
        mySelectHouses: payload.records,
      };

    case SET_ONLINE_PROTOCOL:
      return {
        ...state,
        onlineProtocol: payload,
      };

    default:
      return state;
  }
}
