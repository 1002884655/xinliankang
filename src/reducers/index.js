import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import project from './project'
import card from './card'
import shop from './shop'
import news from './news'
import city from './city'
import system from './system'
import house from './house'

export default combineReducers({
  counter,
  user,
  project,
  card,
  shop,
  news,
  city,
  system,
  house,
})
