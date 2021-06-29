import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Image } from '@tarojs/components'
import '../../../assets/css/iconfont.css'
import ProjectListItem from '../../../components/ProjectListItem/index'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [PageList, setPageList] = useState(['', ''])
  const [IsPull, setPull] = useState(false)
  const [ShowPopup, setShowPopup] = useState(false)
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
    <view className='Page myHomepage'>

      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
        <view className='PageContent'>

          <view className='Card UserInfo'>
            <view className='flex-h Top'>
              <view className='Icon'>
                <Image mode='aspectFill' src={null}></Image>
              </view>
              <view className='flex-item'>
                <view className='flex-h'>
                  <view className='flex-item'>
                    <text>陆毅 13045678976</text>
                  </view>
                  <text className='iconfont icon-dianzan'></text>
                  <text>23赞</text>
                </view>
                <view className='Tag'>
                  <view>
                    <Image mode='heightFix' src={require('../../../assets/mine-icon28.png')}></Image>
                    <text>金牌置业顾问</text>
                  </view>
                </view>
              </view>
            </view>
            <view className='Work flex-h'>
              <view className='flex-item'>
                <text>营销</text>
                <text>部门</text>
              </view>
              <view className='flex-item'>
                <text>营销经理</text>
                <text>职位</text>
              </view>
              <view className='flex-item'>
                <text>香颂·蔚澜半岛</text>
                <text>楼盘</text>
              </view>
            </view>
            <view className='Hot flex-h'>
              <view className='flex-item'>
                {
                  ['', '', '', '', '', ''].map((item, index) => (
                    <view key={`UserItem-${index}`}>
                      <Image mode='aspectFill' src={null}></Image>
                    </view>
                  ))
                }
              </view>
              <text className='iconfont icon-renqi'></text>
              <text>人气值6</text>
            </view>
          </view>

          <view className='Card DetailInfo'>
            <text className='Title'>详细信息</text>
            <view className='flex-h'>
              <text className='iconfont icon-dianhua'></text>
              <text>手机：</text>
              <view className='flex-item'>
                <text>136 1394 9434</text>
              </view>
            </view>
            <view className='flex-h'>
              <text className='iconfont icon-dingwei'></text>
              <text>地址：</text>
              <view className='flex-item'>
                <text>江苏省南京市雨花台区汇智大厦</text>
              </view>
            </view>
            <view className='Btn'>
              <text>分享主页</text>
            </view>
          </view>

          <view className='ProjectList'>
            <view className='flex-h'>
              <view className='flex-item'>
                <text>项目信息</text>
              </view>
              <text>更多</text>
              <text className='iconfont icon-jiantouright'></text>
            </view>
            <view className='List'>
              {
                PageList.map((item, index) => (
                  <ProjectListItem key={`ListItem-${index}`} data={item}></ProjectListItem>
                ))
              }
            </view>
          </view>


          {/* bottom */}
          <view className='PageBottom'>
            <text>已经到底了~</text>
          </view>

          <view className='Share'>
            <text onClick={() => {setShowPopup(true)}}>生成海报分享好友</text>
          </view>

        </view>
      </ScrollView>

      {
        ShowPopup &&
        <view className='SharePopup'>
          <view>
            <view className='flex-v'>
              <view className='Top flex-h'>
                <view className='flex-item'>
                  <text>保存后分享图片</text>
                </view>
                <text className='iconfont icon-guanbi' onClick={() => {setShowPopup(false)}}></text>
              </view>
              <view className='flex-item'>
                <view>
                  <view>
                    <Image className='centerLabel' mode='aspectFill' src={null}></Image>
                  </view>
                </view>
              </view>
              <view className='Btn'>
                <text>保存海报</text>
              </view>
            </view>
          </view>
        </view>
      }

    </view>
  )
})
