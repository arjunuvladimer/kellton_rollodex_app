// Importing Child Components Search, CardList
import CardList from '../../components/card-list/card-list.component';
import Search from '../../components/search/search.component';
import {connect} from 'react-redux'
import getUsers from '../../redux/user/user.action'

// App Styles
import './App.css'
import React from 'react'

import axios from 'axios'

// Parent Component
class App extends React.Component{

  componentDidMount(){
    const {sendMonsters} = this.props

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => sendMonsters(response.data))
    // .then(response => sendMonsters([{},{}]))
    // .then(response => sendMonsters(monsters))
  }

  // for Onchange Function in Search
  handleOnChange = (event) => {
  }
  
  render(){
    const {getMonsters} = this.props
    // const filteredMonsters = users.filter(
    //   monster => monster.name.toLowerCase().includes(searchValue.toLowerCase())
    // )
    return(
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <Search changing = {this.handleOnChange}/>
        <CardList monsters={getMonsters}/>
      </div>
    )
  }
}

// Fetch the state/data from the store
// we need a function called mapStateToProps inside 
// your connect method that connects the data from 
// react component to redux store
const mapStateToProps = (state) => (
  {
    getMonsters: state.userState.users
  } 
)
// Object is going to be returned to App Component 
// from mapStateProps function which is acting as
// call back function inside connect HOC[Higher Order Component]

const mapDisptachToProps = (dispatch) => (
  {
    sendMonsters: function send(monsters) {
      return dispatch(getUsers(monsters))
    }
  }
)

// Object is going to be returned to App Component 
// from mapStateProps function which is acting as
// call back function inside connect HOC[Higher Order Component]
export default connect(mapStateToProps, mapDisptachToProps)(App)


