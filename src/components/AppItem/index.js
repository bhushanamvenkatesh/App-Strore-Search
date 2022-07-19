// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appId, appName, imageUrl, category} = eachApp

  return (
    <li className="each-project-container">
      <img src={imageUrl} className="project-image" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
