import { UPDATE_PRELOAD, SYNC_SYSTEMINFO } from "@/constants/common";

// 初始数据
const INITIAL_STATE = {
  cityList: [],
  miniappInfo: {},
  orgInfo: {},
  userInfo: {},
  settings: [],
  systemInfo: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_PRELOAD: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SYNC_SYSTEMINFO: {
      return {
        ...state,
        systemInfo: action.payload
      };
    }

    default:
      return state;
  }
}
