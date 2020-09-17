import React,{Component} from 'react';
import {connect} from 'react-redux';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from '../Components/Scroll';
import {request} from '../Actions/actions';
import './App.css';
import 'tachyons';

const mapStateToProps = (state) => {
  return {
    isPending : state.request.isPending,
    error : state.request.error
  }
}

const mapDispatchToProps = (dispatch) => ({requestRobots : () => dispatch(request())})

class App extends Component
{
  render()
  {
    let {isPending, error} = this.props;
    if(error)
      return <div className='f2 tc'><h1>Oops Error...</h1></div>
    else if(isPending)
      return <div className='f2 tc'><h1>Loading...</h1></div>
    else return (
      <div className='tc' id='app'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox />
        <Scroll>
          <CardList />
        </Scroll>      
      </div>
    );
  }
  componentDidMount()
  {
    this.props.requestRobots();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);