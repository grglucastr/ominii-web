import React, { Component } from 'react'

import twitterLogo from '../twitter.svg'
import './Login.css'

export default class Login extends Component {

  state = {
    username: ''
  }

  handleInputChange = (e) => {
    this.setState({username: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { username } = this.state
    if(!username.length) return;
    localStorage.setItem('@GoTwitter:username', username)

    this.props.history.push('/timeline')

  }

  render(){
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="logo-man" />
        <form onSubmit={this.handleSubmit}>

          <input
            value={this.state.username} 
            onChange={this.handleInputChange}
            placeholder='Nome de Usuário' />

          <button 
            type="submit"
            className="">
            Entrar
          </button>
        </form>
      </div>
    )
  }
}