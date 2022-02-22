import {Component} from 'react'
import {v4 as uuid4} from 'uuid'
import MyContainer from '../MyContainer'
import './index.css'

// import {end} from 'worker-farm'

class UserDetailsForm extends Component {
  state = {
    websiteUrl: '',
    userName: '',

    password: '',
    myList: [],
    showPassword: false,
    searchInput: '',
  }

  onSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickDelete = itemID => {
    const {myList} = this.state
    const upDatedList = myList.filter(eachItem => eachItem.id !== itemID)
    this.setState({
      myList: upDatedList,
    })
  }

  onChangeUrl = event => {
    this.setState({
      websiteUrl: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {websiteUrl, userName, password} = this.state
    const personDetails = {
      id: uuid4(),
      url: websiteUrl,
      name: userName,
      password,
    }
    this.setState(prevState => ({
      myList: [...prevState.myList, personDetails],
      websiteUrl: '',
      userName: '',
      password: '',
    }))
  }

  onShowPassword = () => {
    this.setState(prevSta => ({
      showPassword: !prevSta.showPassword,
    }))
  }

  renderFormDetails = (websiteUrl, userName, password) => (
    <form className="my-form" onSubmit={this.onSubmitForm}>
      <h1 style={{fontSize: '20px', color: 'white'}}>Add New Password</h1>
      <div className="input-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            className="logo-image"
          />
        </div>
        <input
          type="text"
          placeholder="Enter Website"
          className="inputElement"
          onChange={this.onChangeUrl}
          value={websiteUrl}
        />
      </div>
      <div className="input-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
            className="logo-image"
          />
        </div>
        <input
          type="text"
          placeholder="Enter Username"
          className="inputElement"
          onChange={this.onChangeUsername}
          value={userName}
        />
      </div>
      <div className="input-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
            className="logo-image"
          />
        </div>
        <input
          type="password"
          placeholder="Enter Password"
          className="inputElement"
          onChange={this.onChangePassword}
          value={password}
        />
      </div>
      <div style={{textAlign: 'right'}}>
        <button type="submit" className="add-button">
          Add
        </button>
      </div>
    </form>
  )

  render() {
    const {
      myList,
      websiteUrl,
      userName,
      password,
      showPassword,
      searchInput,
    } = this.state
    const filteredList = myList.filter(item =>
      item.url.toLowerCase().includes(searchInput),
    )
    console.log(myList)
    return (
      <>
        <div className="form-bgContainer">
          {this.renderFormDetails(websiteUrl, userName, password)}
          <div className="password-manager-logo-container">
            <img
              src="
                 https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-manager-logo"
            />
          </div>
        </div>
        <div className="password-manager-container">
          <div className="password-count-and-search-input">
            <h1 style={{color: 'white', fontWeight: '500px'}}>
              Your passwords <p>{filteredList.length.toString()}</p>
            </h1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: '8px',
              }}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                style={{width: '40px'}}
              />
              <input
                type="search"
                onChange={this.onSearch}
                style={{
                  width: '100%',
                  height: '100%',
                  padding: '9px',
                  paddingLeft: '0px',
                }}
              />
            </div>
          </div>
          <hr />
          <div style={{textAlign: 'end'}}>
            <input
              type="checkbox"
              id="checkbox"
              onClick={this.onShowPassword}
            />
            <label htmlFor="checkbox" className="showPassword-text">
              Show Passwords
            </label>
          </div>
          <div className="password-list-container">
            {filteredList.length >= 1 ? (
              <ul>
                {filteredList.map(eachItem => (
                  <MyContainer
                    eachItem={eachItem}
                    key={eachItem.id}
                    onClickDelete={this.onClickDelete}
                    length={filteredList.length}
                    showPassword={showPassword}
                  />
                ))}
              </ul>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    style={{width: '400px'}}
                  />
                  <p style={{color: 'white', fontFamily: 'Roboto'}}>
                    No Passwords
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
}
export default UserDetailsForm
