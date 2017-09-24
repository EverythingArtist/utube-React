import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
// import App from './App';
const API_KEY = 'AIzaSyAHZnbe1yAXc2Z_tzRBeMhiIRM_sGS2t80';



class App extends Component{

  constructor(props){
    super(props);

    this.state={videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
    });
  }

  render(){

    return(
      <div>
    <div> <SearchBar/></div>
    <div> <VideoDetail video={this.state.videos[0]}/></div>
      <div><VideoList videos={this.state.videos}/></div>
    </div>)
  }

}

ReactDOM.render(<App />,document.getElementById('root'));
