import {Component} from 'react'
import './index.css'

class MyContainer extends Component {
  renderEachPassword = () => {
    const {eachItem, onClickDelete, showPassword} = this.props

    const {name, password, url, id} = eachItem
    const Delete = () => {
      onClickDelete(id)
    }

    return (
      <li className="each-item">
        <div className="name-initial-container">
          <p>{name[0]}</p>
        </div>
        <div className="user-details-container">
          <p>{url}</p>
          <p>{name}</p>
          {showPassword ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-image"
            />
          )}
        </div>
        <div>
          <button
            type="button"
            onClick={Delete}
            testid="delete"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              style={{width: '20px'}}
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }

  render() {
    return <div>{this.renderEachPassword()}</div>
  }
}

export default MyContainer
