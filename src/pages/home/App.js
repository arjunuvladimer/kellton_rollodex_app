// Importing Child Components Search, CardList
import CardList from '../../components/card-list/card-list.component';
import Search from '../../components/search/search.component';
// 
import {connect} from 'react-redux'
import {getUsers, searchUser} from '../../redux/user/user.action'

// App Styles
import './App.css'
import React from 'react'

import axios from 'axios'

import { useEffect } from 'react';

// Parent Component
const App = (props) => {

  useEffect(
    () => {
      const {sendMonsters} = props
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => sendMonsters(response.data))
      // .then(response => sendMonsters([{},{}]))
      // .then(response => sendMonsters(monsters))
    }
  )
    

  // for Onchange Function in Search
  const handleOnChange = (event) => {
    const {sendSearchValue} = props
    sendSearchValue(event.target.value)
  }
  
 
    const {getMonsters,getSearchValue} = props
    const filteredMonsters = getMonsters.filter(
      monster => monster.name.toLowerCase().includes(getSearchValue.toLowerCase())
    )
    return(
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <Search changing = {handleOnChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  
}

// Fetch the state/data from the store
// we need a function called mapStateToProps inside 
// your connect method that connects the data from 
// react component to redux store
const mapStateToProps = (state) => (
  {
    getMonsters: state.userState.users,
    getSearchValue: state.userState.searchValue
  } 
)
// Object is going to be returned to App Component 
// from mapStateProps function which is acting as
// call back function inside connect HOC[Higher Order Component]

const mapDisptachToProps = (dispatch) => (
  {
    sendMonsters: monsters => dispatch(getUsers(monsters)),
    sendSearchValue: username => dispatch(searchUser(username)) 
  }
)

// Object is going to be returned to App Component 
// from mapStateProps function which is acting as
// call back function inside connect HOC[Higher Order Component]
export default connect(mapStateToProps, mapDisptachToProps)(App)


