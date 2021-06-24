import React, { useState, useEffect } from 'react'
import './index.scss'
import '../../../../../assets/css/iconfont.css'
import { Image, Input, Slider, Textarea } from '@tarojs/components'
import SubmitBuyHouseResult from '../SubmitBuyHouseResult/index'

export default function BuyHouse (props) {
  const { change = () => { } } = props

  const [SingleList] = useState([
    { name: '首套', id: 1 },
    { name: '二套', id: 2 }
  ])
  const [CurrnetSingleId, setCurrnetSingleId] = useState(null)

  const [NewOldList] = useState([
    { name: '新房', id: 1 },
    { name: '二手房', id: 2 }
  ])
  const [CurrnetNewOldId, setCurrnetNewOldId] = useState(null)

  const [HouseTypeList] = useState([
    { name: '一室一厅', id: 1 },
    { name: '二室一厅', id: 2 },
    { name: '二室二厅', id: 3 },
    { name: '三室一厅', id: 4 },
    { name: '三室二厅', id: 5 },
    { name: '四室一厅', id: 6 },
    { name: '四室二厅', id: 7 },
    { name: '五室及以上', id: 8 }
  ])
  const [CurrnetHouseTypeId, setCurrnetHouseTypeId] = useState(null)

  const [AreaList] = useState([
    { name: '60㎡以下', id: 1 },
    { name: '60-90㎡', id: 2 },
    { name: '90-110㎡', id: 3 },
    { name: '110-130㎡', id: 4 },
    { name: '130-150㎡', id: 5 },
    { name: '150-200㎡', id: 6 },
    { name: '200㎡以上', id: 7 }
  ])
  const [CurrnetAreaId, setCurrnetAreaId] = useState(null)

  const [PreferenceList] = useState([
    { name: '南北通透', id: 1 },
    { name: '朝南', id: 2 },
    { name: '低楼层', id: 3 },
    { name: '高楼层', id: 4 },
    { name: '精装修', id: 5 },
    { name: '电梯房', id: 6 },
    { name: '近地铁', id: 7 },
    { name: '满五年', id: 8 },
    { name: '满两年', id: 9 },
    { name: '楼龄5年内', id: 10 },
    { name: '楼龄10年内', id: 11 }
  ])
  const [CurrnetPreferenceId, setCurrnetPreferenceId] = useState(null)

  const [GoalList] = useState([
    { name: '刚需', id: 1 },
    { name: '结婚', id: 2 },
    { name: '养老', id: 3 },
    { name: '改善', id: 4 },
    { name: '教育', id: 5 },
    { name: '投资', id: 6 }
  ])
  const [CurrnetGoalId, setCurrnetGoalId] = useState(null)

  const [LongTimeList] = useState([
    { name: '1月内', id: 1 },
    { name: '6个月', id: 2 },
    { name: '1年内', id: 3 },
    { name: '1年后', id: 4 }
  ])
  const [CurrnetLongTimeId, setCurrnetLongTimeId] = useState(null)

  const [StepId, setStepId] = useState(1)

  const [ShowPopup, setShowPopup] = useState(false)

  useEffect(() => {
    change(StepId)
  }, [StepId])

  const CutSingleId = (id) => {
    return () => {
      setCurrnetSingleId(id === CurrnetSingleId ? null : id)
    }
  }

  const CutNewOldId = (id) => {
    return () => {
      setCurrnetNewOldId(id === CurrnetNewOldId ? null : id)
    }
  }

  const CutHouseTypeId = (id) => {
    return () => {
      setCurrnetHouseTypeId(id === CurrnetHouseTypeId ? null : id)
    }
  }

  const CutAreaId = (id) => {
    return () => {
      setCurrnetAreaId(id === CurrnetAreaId ? null : id)
    }
  }

  const CutPreferenceId = (id) => {
    return () => {
      setCurrnetPreferenceId(id === CurrnetPreferenceId ? null : id)
    }
  }

  const CutGoalId = (id) => {
    return () => {
      setCurrnetGoalId(id === CurrnetGoalId ? null : id)
    }
  }

  const CutLongTimeId = (id) => {
    return () => {
      setCurrnetLongTimeId(id === CurrnetLongTimeId ? null : id)
    }
  }

  const PriceRangehange = (e) => {
    console.log(e)
  }

  const NextStep = () => {
    if (StepId < 4) {
      setStepId(StepId + 1)
    }
  }

  const PrevStep = () => {
    if (StepId > 1) {
      setStepId(StepId - 1)
    }
  }

  return (
    <view className='components BuyHouse'>
      {
        ShowPopup && 
        <SubmitBuyHouseResult></SubmitBuyHouseResult>
      }
      {
        StepId === 1 &&
        <view className='Step'>
          <view>
            <text>意向区域</text>
            <view className='Area'>
              <view className='flex-h'>
                <text className='iconfont icon-dingwei'></text>
                <text>不限</text>
                <view className='flex-item'></view>
                <text className='iconfont icon-jiantoudown'></text>
              </view>
            </view>
          </view>

          <view>
            <text>意向楼盘</text>
            <view className='Purpose'>
              <view>
                <Input placeholder="请输入意向楼盘" />
              </view>
            </view>
          </view>

          <view>
            <text>您想购买的是首套房还是二套房？</text>
            <view className='CheckList'>
              {
                SingleList.map((item, index) => (
                  <view key={`SingleItem-${index}`} className={CurrnetSingleId === item.id ? 'active' : ''} onClick={CutSingleId(item.id)}>
                    {item.name}
                    <Image mode='heightFix' src={require('../../../../../assets/findHouse-icon1.png')}></Image>
                  </view>
                ))
              }
            </view>
          </view>

          <view>
            <text>总价预算范围</text>
            <view className='PriceRange'>
              <view className='flex-h'>
                <view className='flex-item'>
                  <Input placeholder="最小面积㎡" />
                </view>
                <text>-</text>
                <view className='flex-item'>
                  <Input placeholder="最大面积㎡" />
                </view>
              </view>
            </view>
          </view>
        </view>
      }

      {
        StepId === 2 &&
        <view className='Step'>
          <view>
            <text>您想购买的是二手房还是新房？</text>
            <view className='CheckList'>
              {
                NewOldList.map((item, index) => (
                  <view key={`NewOldItem-${index}`} className={CurrnetNewOldId === item.id ? 'active' : ''} onClick={CutNewOldId(item.id)}>
                    {item.name}
                    <Image mode='heightFix' src={require('../../../../../assets/findHouse-icon1.png')}></Image>
                  </view>
                ))
              }
            </view>
          </view>
          <view>
            <text>居室要求</text>
            <view className='CheckList'>
              {
                HouseTypeList.map((item, index) => (
                  <view key={`HouseTypeItem-${index}`} className={CurrnetHouseTypeId === item.id ? 'active' : ''} onClick={CutHouseTypeId(item.id)}>
                    {item.name}
                    <Image mode='heightFix' src={require('../../../../../assets/findHouse-icon1.png')}></Image>
                  </view>
                ))
              }
            </view>
          </view>
          <view>
            <text>面积要求</text>
            <view className='CheckList'>
              {
                AreaList.map((item, index) => (
                  <view key={`AreaItem-${index}`} className={CurrnetAreaId === item.id ? 'active' : ''} onClick={CutAreaId(item.id)}>
                    {item.name}
                    <Image mode='heightFix' src={require('../../../../../assets/findHouse-icon1.png')}></Image>
                  </view>
                ))
              }
            </view>
          </view>
        </view>
      }

      {
        StepId === 3 &&
        <view className='Step'>
          <view>
            <text>价格要求</text>
            <view className='RangeList'>
              <Slider activeColor="#193C83" block-color="#193C83" change={PriceRangehange} min="50" max="200" show-value />
            </view>
          </view>
          <view>
            <text>偏好设置</text>
            <view className='CheckList'>
              {
                PreferenceList.map((item, index) => (
                  <view key={`PreferenceItem-${index}`} className={CurrnetPreferenceId === item.id ? 'active' : ''} onClick={CutPreferenceId(item.id)}>
                    {item.name}
                    <Image mode='heightFix' src={require('../../../../../assets/findHouse-icon1.png')}></Image>
                  </view>
                ))
              }
            </view>
          </view>
          <view>
            <text>购房目的</text>
            <view className='CheckList'>
              {
                GoalList.map((item, index) => (
                  <view key={`GoalItem-${index}`} className={CurrnetGoalId === item.id ? 'active' : ''} onClick={CutGoalId(item.id)}>
                    {item.name}
                    <Image mode='heightFix' src={require('../../../../../assets/findHouse-icon1.png')}></Image>
                  </view>
                ))
              }
            </view>
          </view>
        </view>
      }

      {
        StepId === 4 &&
        <view className='Step'>
          <view>
            <text>计划在多久购房？</text>
            <view className='CheckList'>
              {
                LongTimeList.map((item, index) => (
                  <view key={`LongTimeItem-${index}`} className={CurrnetLongTimeId === item.id ? 'active' : ''} onClick={CutLongTimeId(item.id)}>
                    {item.name}
                    <Image mode='heightFix' src={require('../../../../../assets/findHouse-icon1.png')}></Image>
                  </view>
                ))
              }
            </view>
          </view>
          <view>
            <text>您还有哪些需要备注的信息？</text>
            <view className='Textarea'>
              <Textarea placeholder="请说出您的其他需求，让我们更好的为您服务！" />
            </view>
          </view>
        </view>
      }

      <view className='Btn'>
        <text className='active' onClick={NextStep}>下一步</text>
        <text onClick={PrevStep}>返回</text>
      </view>
    </view>
  )
}
