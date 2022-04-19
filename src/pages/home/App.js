// Importing Child Components Search, CardList
import CardList from '../../components/card-list/card-list.component';
import Search from '../../components/search/search.component';

// App Styles
import './App.css'


const App = () =>  {
  return (
    <div className="App">
      <h1>Monsters Rollodex</h1>
      <Search />
      <CardList />
    </div>
  );
}

export default App


