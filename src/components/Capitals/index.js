import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onChangeCountry = event => {
    this.setState({capitalId: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {capitalId} = this.state
    const selectedCapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === capitalId,
    )
    console.log(selectedCapital)
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <select onChange={this.onChangeCountry} value={capitalId}>
            {countryAndCapitalsList.map(eachItem => (
              <option key={eachItem.id} value={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country?</p>
          <h1>{selectedCapital.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
