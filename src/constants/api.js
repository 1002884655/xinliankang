/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
/* eslint-disable */
export const host = HOST
export const wss_host = WSS_HOST

/* eslint-enable */

export const pathname = '/api/wx'

const resolvePath = api => `${host + pathname}/${api}`

// common
export const API_PRELOAD = resolvePath('preload')
export const API_QRCODE = resolvePath('qrcode')
export const API_BANNER_LIST = resolvePath('extendContent')
export const API_QUERY_CODE_SCENE = resolvePath('qrcode/scene')

// user
export const API_USER_LOGIN = resolvePath('login')
export const API_USER_INFO = resolvePath('signup')
export const API_USER_SIGNIN = resolvePath('user/signin')
export const API_USER_PHONE = resolvePath('userPhone')
export const API_QUERY_USER_INFO = resolvePath('user/info')
export const API_QUERY_USERINFO_BYID = resolvePath('onePerson')
export const API_QUERY_CUSTOMER_INFO = resolvePath('customer/myCustomer')
export const API_QUERY_MYREPORT = resolvePath('customer/myReport')
export const API_QUERY_DOCUMENTVERIFY = resolvePath('documentVerify')

export const API_QUERY_DOCUMENTVERIFY_list = resolvePath('documentVerify/list')
export const API_QUERY_TADRAINGE = resolvePath('taDrainage')


// chat
export const API_CHAT_HISTORY = resolvePath('chat/history')
export const API_CHAT_SEND = wss_host + '/wx/chat'
export const API_CHAT_FRIENDS = resolvePath('chat/with')
export const API_UPLOAD_IMAGE = resolvePath('image')
export const API_CHAT_READED = resolvePath('chat/message')

// card
export const API_CARDS_LIST = resolvePath('cards')
export const API_CARDS_APPLY = resolvePath('cards/apply')
export const API_FORM_ID = resolvePath('formid')
export const API_UPDATE_PHOTO = resolvePath('userInfo/updatePhoto')

// project
export const API_INDEX_CUSTOMER = resolvePath('indexCustomer')
export const API_ITEMS_LIST = resolvePath('building/list')
export const API_ITEMS_DETAIL = resolvePath('buildingSelectId')
export const API_ITEMS_TYPE = resolvePath('tdBuildingType')
export const API_ACTIVITY_GROUP = resolvePath('helpActivityAndGroup')
export const API_LOCATION_CITYP = resolvePath('location/city')
export const API_TACUSTOMIMG = resolvePath('taCustomImg')
export const API_INDEX_PROJECTS = resolvePath('building/main')
export const API_INDEX_ICONS = resolvePath('taMiniappOrgIcon')



export const API_HOUSE_LIST = resolvePath('listHousingResources')
export const API_PRESELECTION_RECORD = resolvePath('listPreselectionRecord')
export const API_RAISE_CHECK = resolvePath('check/raise')
export const API_RAISE_PROFILE = resolvePath('taRaise')
export const API_SAVE_RAISE_RECORD = resolvePath('taRaiseRecord')
export const API_RATSE_RECORD = resolvePath('taRaiseRecord/list')
export const API_RATSE_DETAIL = resolvePath('taRaiseRecord')
export const API_RATSE_ORDER = resolvePath('unifiedOrder')
export const API_CANCEL_ORDER = resolvePath('cancel')
export const API_HOUSE_DETAIL = resolvePath('getHousingDetailById')
export const API_ADD_PRESELECTION = resolvePath('taPreselectionRecord')
export const API_CANCEL_PRESELECTION = resolvePath('taPreselectionRecordCancel')
export const API_APARTMENT_TYPE = resolvePath('listBuildApartmentBySalesBatchId')
export const API_SALESBATCH_LIST = resolvePath('taSalesBatch/choice')
export const API_NOTICE_INFO = resolvePath('getNoticeInfo')
export const API_SALES_BATCH = resolvePath('taSalesBatch')
export const API_ADDLIVE_NUM = resolvePath('addVisitNum')
export const API_LIVE_DEATIL = resolvePath('taLiveActivity')
// /wx/location/city?location=lon,lat

//sign
export const API_CONTRACT_USER = resolvePath('contract/user/add')
export const API_CONTRACT_GET = resolvePath('contract/user/get')
export const API_CONTRACT_AUTO = resolvePath('contract/auto')
export const API_CONTRACT_MANUAL = resolvePath('contract/manual')
export const API_CONTRACT_CHECK = resolvePath('contract/check')

// shop
export const API_GOODS_LIST = resolvePath('goods')
export const API_GOODS_BUILDING = resolvePath('goodsToBuilding')
export const API_GOODS_EXCHANGE = resolvePath('goods/exchange')
export const API_GOODS_EXCHANGE_RECORDS = resolvePath('taPointsExchange')
export const API_POINTS_RECORDS = resolvePath('taPointsRecords')
export const API_POINTS_RULE = resolvePath('tdPointsRules')
export const API_POINTS_ADRESS = resolvePath('person/city')
export const API_GOODS_BELONGS = resolvePath('goodsToBuilding')

// client
export const API_CLIENT_LIST = resolvePath('customer/recommend/mine')
export const API_RECOMENT_CLIENT = resolvePath('customer/new')
export const API_CLIENT_PROGRESS = resolvePath('customer')
export const API_TYPE_DATA = resolvePath('awesome/dict/recommendcustomer')

// report
export const API_REPORT_LIST = resolvePath('myReport')
export const API_REPORT_CLIENT = resolvePath('customer/report')
export const API_RECOMMEND_GET = resolvePath('customer/recommend/get')
export const API_RECOMMEND_EDIT = resolvePath('customer/recommend/edit')

// common
export const API_ITEMS_UV = resolvePath('project/hot')
export const API_CARDS_UV = resolvePath('consultant/hot')
export const API_ACTIVITY_UV = resolvePath('activity/pvNum')
export const API_NEWS_UV = resolvePath('taNews/pvNum')

export const API_CARDS_LIKE = resolvePath('consultant/like')
export const API_ITEMS_LIKE = resolvePath('project/like')
export const API_ACTIVITY_LIKE = resolvePath('activity/like')
export const API_NEWS_LIKE = resolvePath('news/like')

export const API_CARDS_SHARE = resolvePath('consultant/share')
export const API_ITEMS_SHARE = resolvePath('project/share')
export const API_ACTIVITY_SHARE = resolvePath('activity/share')
export const API_HELP_SHARE = resolvePath('help/share')
export const API_GROUP_SHARE = resolvePath('group/share')
export const API_HFIVE_SHARE = resolvePath('h5/share')
export const API_NEWS_SHARE = resolvePath('news/share')
export const API_HOUSE_SHARE = resolvePath('houseApp/share')
export const API_HOUSE_POSTER = resolvePath('housePost/share')
export const API_LIVE_SHARE = resolvePath('liveApp/share')
export const API_LIVE_POSTER = resolvePath('livePost/share')

export const API_INDEX_SHARE = resolvePath('main/share')

export const API_ACTIVITY_FAVOR = resolvePath('activity/save')
export const API_NEWS_FAVOR = resolvePath('news/save')
export const API_CARD_FAVOR = resolvePath('card/save')
export const API_PROJECT_FAVOR = resolvePath('project/save')

// 埋点接口
export const API_BURIED_POINT = resolvePath('taPersonVisitRecord')


// activity
export const API_ACTIVITY_LIST = resolvePath('buildingDynamiceList')
//拼团
export const API_GROUP_LIST = resolvePath('taShareRecord')
//助力
export const API_HELP_LIST = resolvePath('helpInitiateRecord')

// save activity
export const API_ACTIVITY_SAVE = resolvePath('save/buildingDynamiceList')

export const API_ACTIVITY_DETAIL = resolvePath('buildingDynamiceInfo')
// signup
export const API_ACTIVITY_SIGNUP = resolvePath('activityDynamicEnlistAdd')
// signin
export const API_ACTIVITY_SIGNIN = resolvePath('taCheckin/activity')

// news
export const API_NEWS_LIST = resolvePath('taNews')


// feedback
export const API_FEEDBACK_SUBMIT = resolvePath('taCustomerMessage')


// getCode
export const API_GET_CODE = resolvePath('captcha')

// checkCode
export const API_CHECK_CODE = resolvePath('check/captcha')


// /wx/registerConsultantOneClick
// registerConsultant
export const API_PUT_REGISTER = resolvePath('registerConsultant')

// registerConsultantOneClick
export const API_PUT_REGISTERCONSULTANT = resolvePath('registerConsultantOneClick')

// city
export const API_CITY_LIST = resolvePath('tdCity')


// policy
export const API_POLICY_LIST = resolvePath('taPolicy')

//agent

export const API_AGENT_LIST = resolvePath('agent/recommend/mine')

export const API_REGISTER_AGENT = resolvePath('registerAgent')

// agent change
export const API_AGENT_CHANNEL = resolvePath('customer/recommend/becomeChannel')

export const API_AGENT_CURRENT = resolvePath('user/current')

export const API_EDIT_AGENT = resolvePath('editPerson')

// 活动列表-新
export const API_ACTNEW_LIST = resolvePath('activity/list')

// 助力
export const API_HELP_DETAIL = resolvePath('helpActivity')
export const API_HELP_CREATE = resolvePath('helpInitiateRecord')
export const API_HELP_FRIEND = resolvePath('helpRecord')

//签到
export const API_CHECKIN_DETAILS = resolvePath('buildingDynamiceEnlistInfo')
export const API_CHECKIN_ACTIVE = resolvePath('buildingDynamicCheckin')

// 拼团
export const API_GROUP_DETAIL = resolvePath('taShareActivity')
export const API_GROUP_CREATE = resolvePath('taShareRecord')
export const API_GROUP_JOIN = resolvePath('taShareChildRecord')

//person
export const API_MY_CUSTOMER = resolvePath('inventory/customer/statistics')
export const API_CUSTOMER_LIST = resolvePath('inventory/customer/statistics')
export const API_CUSTOMER_DETAIL = resolvePath('inventory/customer')
export const API_VISIT_RECORD = resolvePath('taPersonVisitRecord')
export const API_ACTIVITY_LIST_CUSTOMER = resolvePath('customer/activity/list')
export const API_FOLLOW_LIST = resolvePath('taCustomerFollowUpRecord')
export const API_SEX_INFO = resolvePath('genderStatistic')
export const API_ECHERTS_DAILY = resolvePath('customerStatisticDaily')
export const API_ECHERTS_MONTH = resolvePath('customerStatisticMonthly')
export const API_BUILDING_TYPE = resolvePath('getByBuildingIdSelectBuildingProjectType')
export const API_CONSULTANT_VISIT_RECORD = resolvePath('activityVisitRecord')
export const API_MORE_ACTIVITY = resolvePath('visitRecord/activity')
export const API_SHARE_LIST = resolvePath('shareRecords')
export const API_SHARE_INFOLIST = resolvePath('sharePersonInfoList')
export const API_BIND_CUSTOMER = resolvePath('judgeBindCustomer')
// 消息模板
export const API_TEMPLATE_TYPE = resolvePath('template/of/')
