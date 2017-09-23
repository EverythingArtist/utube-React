import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
// import App from './App';
const API_KEY = 'AIzaSyAHZnbe1yAXc2Z_tzRBeMhiIRM_sGS2t80';

const App = () =>{
  return(<div>
<SearchBar/>
  </div>)
}

ReactDOM.render(<App />,document.getElementById('root'));
