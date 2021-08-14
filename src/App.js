import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Tvshows from './Tvshows'
import Movies from './Movies'
import Mylist from './Mylist'
import Navbar from './Navbar'


// const API = "http://localhost:3001/vtopia"
const API = "https://jaechung77.github.io/ReactProject/vtopia"
const PUBLIC_URL = "https://jaechung77.github.io/ReactProject"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      vods: [],
      selected: '',
    }
  }

  componentDidMount(){
    this.fetchVod()  
  }

  fetchVod = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(vods =>{
      this.setState({
        vods,
        selected: ''
      })    
    })
  }




  handleVodClick = (id) => {

    fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id-1,
        category: this.state.vods[id-1].category,
        genre: this.state.vods[id-1].genre,
        name: this.state.vods[id-1].name,
        image: this.state.vods[id-1].image,
        price: this.state.vods[id-1].price,
        selected: !this.state.vods[id-1].selected,
      })
    }) 
    
      .then(() =>{
         this.fetchVod()


      })
  }
  render(){
    return (
        <div className="App">
          <Router basename={process.env.PUBLIC_URL}>
                <div>            
                    <Navbar />
                    <Switch>
                        <Route exact path="/"><Home vods={this.state.vods} handleVodClick ={this.handleVodClick}/></Route>
                        <Route path="/tvshows"><Tvshows vods={this.state.vods} handleVodClick ={this.handleVodClick} /></Route>
                        <Route path="/movies"><Movies vods={this.state.vods} handleVodClick ={this.handleVodClick} /></Route>
                        <Route  path="/mylist"><Mylist vods={this.state.vods} handleVodClick ={this.handleVodClick}/></Route>
                    </Switch>
                </div>
          </Router>
        </div>
    )
  }    
}

export default App;
