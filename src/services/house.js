import { fetch, apis } from '@/utils/request'

export const checkRaise = houseIdList => fetch({ url: `${apis.API_RAISE_CHECK}?houseIds=${houseIdList.join(',')}`, method: 'GET' })
