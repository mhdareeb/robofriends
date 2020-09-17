import React,{Component} from 'react';
import {connect} from 'react-redux';
import {change} from '../Actions/actions';

const mapDispatchToProps = (dispatch) => ({onInputChange:(event)=>dispatch(change(event.target.value))})

class SearchBox extends Component {
    render()
    {
        let {onInputChange} = this.props;
        return (
            <input className='br3 pa2 ma3' type='search' placeholder='search robots' onChange={onInputChange} />
        )
    }
}

export default connect(null,mapDispatchToProps)(SearchBox);