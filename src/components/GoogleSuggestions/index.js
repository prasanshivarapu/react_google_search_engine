// Write your code here
import {Component} from 'react'
import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {result: ''}

  getsearch = event => {
    this.setState({result: event.target.value})
  }

  getting = suggestion => {
    this.setState({result: suggestion})
  }

  render() {
    const {result} = this.state
    const {suggestionsList} = this.props

    const finalresult = suggestionsList.filter(each =>
      each.suggestion.includes(result),
    )

    return (
      <div className="greet">
        <div className="greet1">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="googlelogo"
          />
          <div className="greet3">
            <div className="greet6">
              <img
                alt="search"
                className="image2"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              />
              <input
                className="greet2"
                type="search"
                placeholder="search google"
                value={result}
                onChange={this.getsearch}
              />
            </div>

            <div className="greet4">
              {finalresult.map(each => (
                <SuggestionItem eachitem={each} getting={this.getting} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
