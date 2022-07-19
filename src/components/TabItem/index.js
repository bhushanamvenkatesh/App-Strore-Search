// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, onChangeTab, isActive} = props
  const {tabId, displayText} = eachTab

  const ChangeTab = () => {
    onChangeTab(tabId)
  }

  const addClass = isActive ? 'under-line' : ' '

  return (
    <li className="each-list-item">
      <button
        className={`button ${addClass} `}
        type="submit"
        onClick={ChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
