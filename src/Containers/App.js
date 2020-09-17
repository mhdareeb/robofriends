import React,{Component} from 'react';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import change from '../Actions/change';
import Scroll from '../Components/Scroll';
import {connect} from 'react-redux';
import './App.css';
import 'tachyons';

const mapStateToProps = (state) => ({searchField:state.searchField})

const mapDispatchToProps = (dispatch) => ({onInputChange:(event)=>dispatch(change(event.target.value))})

class App extends Component
{
  constructor()
  {
    super();
    this.state={robots:[]};
  } 
  render()
  {
    let {searchField, onInputChange}=this.props;
    let {robots} = this.state;
    if(!robots.length)
      return <div className='f2 tc'><h1>Loading...</h1></div>
    else return (
      <div className='tc' id='app'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox onInputChange={onInputChange} />
        <Scroll>
          <CardList searchField={searchField} robots={robots} />
        </Scroll>      
      </div>
    );
  }
  componentDidMount()
  { 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>resp.json()).then((arr)=>this.setState({robots:arr}));
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);