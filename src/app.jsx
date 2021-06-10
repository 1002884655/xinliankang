import { Component } from 'react'
import { Provider } from 'react-redux'
import Taro from '@tarojs/taro'
import { getLocation, getRouterParams } from '@/utils/tools'
import login from '@/utils/login'
import store from './store'

import './app.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}
  
  onLaunch (options) {
    getLocation().then((loc) => {
      getRouterParams(options).then(router => {
        Taro.setStorageSync('router', router)
        const { query: payload } = router

        payload.path = router.path
        payload.scene = router.scene

        if (loc) {
          payload.lon = loc.lon
          payload.lat = loc.lat
        }

        // login
        login(payload).then((res) => {
          // const { person: { personId } } = res

          // socket.createSocket({ id: personId });
          // socket.onMessage(data => {
          //   store.dispatch({ type: INCREASE_UNREADNUM })
          // })
          // // 埋点
          // trackUserSource(router.params).then(r => this.updateTrack = r)
        })
      })
    })
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
