// src/App.tsx

import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg'
import { fetchList } from './action/index';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const mapStateToProps = (storeState: IStoreState) => ({
  list: storeState.list,
})

type IStateProps = ReturnType<typeof mapStateToProps>

const mapDispatchToProps = {
  fetchList,
  push,
}

type IDispatchProps = typeof mapDispatchToProps

type IProps = IStateProps & IDispatchProps

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
} */

class App extends Component<IProps> {

  componentDidMount() {
    this.props.fetchList()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Check List</h1>
        </header>
        <u1>
          {this.props.list.map((item) => (
            <li>{item.isChecked ? '完成' : '未完成' - {item.content}}</li>
          ))}
        </u1>
      </div>
    )
  }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(App)
