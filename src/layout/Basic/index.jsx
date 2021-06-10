import React from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import Loading from '@/components/Loading'

import './style.scss'

const BasicLayout = (props) => {
  const {person, children, onProps, ...leftProps} = props
  const loading = !person || !person.personId

  if (onProps) {
    onProps({person, ...leftProps})
  }

  return null
  // return loading ?
  // (
  //   <View className="page-loading-wrapper">
  //     <Loading />
  //   </View>
  // ) : children || null
}

export default connect(({ user }) => ({...user.userInfo || {}}))(BasicLayout)
