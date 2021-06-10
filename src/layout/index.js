import React, { useState, useEffect } from 'react'
import { useRouter } from '@tarojs/taro'
import BasicLayout from './Basic'

export default (Child) => (props) => {
  const [ready, setReady] = useState(false)
  // ext 里面包含的人员等基本信息
  const [info, setInfo] = useState({})
  // 路由信息
  const router = useRouter()

  useEffect(() => {
    // const initedPerson = !!info?.person?.personId
    // const initedRouter = !!router?.path
    // setReady(initedPerson && initedRouter)
    setReady(true)
  })

  return (
    <>
      <BasicLayout onProps={setInfo} />    
      {ready && <Child {...info} {...props} router={router} />}
    </>
  )
}
