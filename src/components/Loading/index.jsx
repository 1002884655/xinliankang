import Spin from '@/components/Spin'
import logo from '@/assets/logo.png'
import './style.scss'

export default (props) => {
  const { width = '80px', logoVisible } = props
  const height = width

  return (
    <view className="loading" style={{ width, height }}>
      <Spin size={width} />
      {
        logoVisible !== false &&
        (<image className="loading-logo" src={logo} style={{ width, height }} />)
      }
    </view>
  )
}
