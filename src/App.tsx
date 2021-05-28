import './styles.css'
import ReactLogoImage from '../react.png'
import ReactLogoSvg from '../React-icon.svg'
import { ClickCounter } from './Counter'

export const App = () => {
  return (
    <>
      <h1>
        React Ts App Comp - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={ReactLogoImage} width="300px" alt="React logo" />
      <img src={ReactLogoSvg} width="300px" alt="React logo" />
      <ClickCounter />
    </>
  )
}
