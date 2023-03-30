import './index.css'

const CashWithdrawal = props => {
  const {denominationsList} = props
  const {value} = denominationsList

  return (
    <li className="list-item">
      <button className="button" type="button">
        {value}
      </button>
    </li>
  )
}

export default CashWithdrawal
