// Importing Child Components Search, CardList
import CardList from '../../components/card-list/card-list.component';
import Search from '../../components/search/search.component';

// App Styles
import './App.css'
import React from 'react'

class App extends React.Component{
 /**Step 1 */
 constructor(){
    super()
    this.state = {
      users: []
    }
  }
  /**Step 4 */
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    /** return result => result.json() => Array[] */
    .then(result =>result.json())
    /** return Array[] => this.state = {users:monsters} **/
    .then(monsters => this.setState(
          {
            users:monsters
          }
        )
    )
  }

  /**Step 2 */
  render(){
    /**Step 3 */
    return(
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <Search />
        <CardList monsters={this.state.users}/>
      </div>
    )
  }
}

export default App


