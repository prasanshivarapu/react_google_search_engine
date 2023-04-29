// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {eachitem, getting} = props
  const {suggestion} = eachitem

  const searchinput = () => {
    getting(suggestion)
  }

  return (
    <div className="greet11">
      <div className="greet12">
        <h1>{suggestion}</h1>

        <button className="greet14" onClick={searchinput} type="button">
          <img
            className="image13"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
          />
        </button>
      </div>
    </div>
  )
}

export default SuggestionItem
