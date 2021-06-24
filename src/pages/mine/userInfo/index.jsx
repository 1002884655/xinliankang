import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Input } from '@tarojs/components'
import '../../../assets/css/iconfont.css'

export default withLayout((props) => {

  // const [PageProps] = useState(props)

  return (
    <view className='Page UserInfo'>

      <ScrollView scroll-y={true} refresher-enabled={false} refresher-background='#fff'>
        <view className='PageContent'>

          <text>姓名</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入姓名'></Input>
            </view>
          </view>

          <text>昵称</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入昵称'></Input>
            </view>
          </view>

          <text>手机号码</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入手机号码'></Input>
            </view>
          </view>

          <text>性别</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <text>请选择</text>
            </view>
            <text className='iconfont icon-jiantoudown'></text>
          </view>

          <text>家庭住址</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入家庭住址'></Input>
            </view>
          </view>

          <text>工作地址</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入工作地址'></Input>
            </view>
          </view>

          <text>年龄段</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <text>请选择</text>
            </view>
            <text className='iconfont icon-jiantoudown'></text>
          </view>

          <text>职业</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入职业'></Input>
            </view>
          </view>

          <text>家庭年收入范围</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <text>请选择</text>
            </view>
            <text className='iconfont icon-jiantoudown'></text>
          </view>

          <text>家庭成员数</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入家庭成员数'></Input>
            </view>
          </view>

          <text>已有房产数</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入已有房产数'></Input>
            </view>
          </view>

          <text>已有车辆数</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入已有车辆数'></Input>
            </view>
          </view>

          <text>预计购房时间</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <text>请选择</text>
            </view>
            <text className='iconfont icon-jiantoudown'></text>
          </view>

          <text>客户咨询重点</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请填写  如：地段、交通、社区配套、户型、价格等；'></Input>
            </view>
          </view>

          <text>购房动机</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <text>请选择</text>
            </view>
            <text className='iconfont icon-jiantoudown'></text>
          </view>

          <text>客户抗性分析</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请填写  如：地段、交通、社区配套、户型、价格等；'></Input>
            </view>
          </view>

          <text>客户对项目认可点</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请填写  如：地段、交通、社区配套、户型、价格等；'></Input>
            </view>
          </view>

          <text>备注</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='补充说明（选填）'></Input>
            </view>
          </view>

          <view className='Btn'>
            <text>提交</text>
          </view>

        </view>
      </ScrollView>

    </view>
  )
})
