import './style.scss'

export default (props) => {
  const { size = '160rpx' } = props
  const wrapperStyle = {
    width: size,
    height: size,
  }

  const leftBarStyle = {
    'border-top-right-radius': size,
    'border-bottom-right-radius': size,
  }

  const rightBarStyle = {
    'border-top-left-radius': size,
    'border-bottom-left-radius': size,
  }

  return (
    <view className="spin" style={wrapperStyle}>
      <view className="mask-left">
        <view className="spin-bar" style={leftBarStyle}></view>
      </view>
      <view className="mask-right">
        <view className="spin-bar" style={rightBarStyle}></view>
      </view>
    </view>
  )
}
