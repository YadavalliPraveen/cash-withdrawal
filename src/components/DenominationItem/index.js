import {Component} from 'react'

import CashWithdrawal from '../CashWithdrawal'

import './index.css'

class DenominationItem extends Component {
  state = {count: 0}

  render() {
    const {count} = this.state
    console.log(count)
    return (
      <div className="container">
        <div className="app-container">
          <div className="profile-container">
            <div className="profile-letter">
              <p className="letter">S</p>
            </div>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="balance-and-rs-container">
              <h1 className="rupees-count">2000</h1>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <h1 className="withdraw-text">Withdraw</h1>
          <p className="sum-text">CHOOSE SUM(IN RUPEES)</p>
        </div>
      </div>
    )
  }
}

export default DenominationItem
