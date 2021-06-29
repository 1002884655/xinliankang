import React, { useState, useEffect } from 'react'
import './index.scss'
import Taro from '@tarojs/taro'
import { ScrollView, Image } from '@tarojs/components'
import EditUserDetailBasicInfo from '../EditUserDetailBasicInfo/index'

export default function UserDetailBasicInfo (props) {
  const { Data = {} } = props
  const [ShowEditPopup, setShowEditPopup] = useState(false)
  const [IsPull, setPull] = useState(false)
  const [PullTimer, setPullTimer] = useState(null)

  const PageRefresh = () => { // 页面下拉刷新回调
    setPull(true)
  }

  useEffect(() => { // 下拉刷新触发
    if (IsPull) {
      clearTimeout(PullTimer)
      setPullTimer(setTimeout(() => {
        setPull(false)
      }, 2000))
    }
  }, [IsPull])

  return (
    <view className='components UserDetailBasicInfo'>
      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
        <view className='PageContent'>

          <view className='Content'>
            <view className='flex-h'>
              <text>姓名</text>
              <text>：</text>
              <view className='flex-item'>
                <text>范丞丞</text>
              </view>
              <text className='iconfont icon-xiugai active' onClick={() => {setShowEditPopup(true)}}></text>
              <text className='active' onClick={() => {setShowEditPopup(true)}}>修改</text>
            </view>
            <view className='flex-h'>
              <text>昵称</text>
              <text>：</text>
              <view className='flex-item'>
                <text>Tomorrow</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>手机号码</text>
              <text>：</text>
              <view className='flex-item'>
                <text>13613949434</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>性别</text>
              <text>：</text>
              <view className='flex-item'>
                <text>男</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>家庭住址</text>
              <text>：</text>
              <view className='flex-item'>
                <text>江苏省南京市雨花台区铁心桥街道韩府坊小区</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>工作地址</text>
              <text>：</text>
              <view className='flex-item'>
                <text>江苏省南京市雨花台区</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>年龄段</text>
              <text>：</text>
              <view className='flex-item'>
                <text>18-25</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>职业</text>
              <text>：</text>
              <view className='flex-item'>
                <text>演员</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>家庭年收入</text>
              <text>：</text>
              <view className='flex-item'>
                <text>10万以下</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>家庭成员数</text>
              <text>：</text>
              <view className='flex-item'>
                <text>5人</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>已有房产数</text>
              <text>：</text>
              <view className='flex-item'>
                <text>2</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>已有车辆数</text>
              <text>：</text>
              <view className='flex-item'>
                <text>2</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>预计购房时间</text>
              <text>：</text>
              <view className='flex-item'>
                <text>1月以内</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>咨询重点</text>
              <text>：</text>
              <view className='flex-item'>
                <text>江苏省南京市雨花台区</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>购房动机</text>
              <text>：</text>
              <view className='flex-item'>
                <text>结婚</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>抗性分析</text>
              <text>：</text>
              <view className='flex-item'>
                <text>交通</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>项目认可点</text>
              <text>：</text>
              <view className='flex-item'>
                <text>户型</text>
              </view>
            </view>
            <view className='flex-h'>
              <text>备注</text>
              <text>：</text>
              <view className='flex-item'>
                <text>暂无</text>
              </view>
            </view>
          </view>

          <view className='Btn'>
            <text className='active'>添加跟进</text>
            <text>变更状态</text>
          </view>

        </view>
      </ScrollView>
      {
        ShowEditPopup &&
        <view className='EditUserInfo'>
          <view>
            <view>
              <EditUserDetailBasicInfo close={() => {setShowEditPopup(false)}}></EditUserDetailBasicInfo>
            </view>
          </view>
        </view>
      }
    </view>
  )
}
