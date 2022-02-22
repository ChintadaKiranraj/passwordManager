import './App.css'
import UserDetailsForm from './components/UserDetailsForm'

const App = () => (
  <div className="bg-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      alt="app logo"
      style={{width: '100px'}}
    />
    <UserDetailsForm />
  </div>
)

export default App
