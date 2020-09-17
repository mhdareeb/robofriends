import React,{Component} from  'react';
import Card from '../Components/Card';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({searchField:state.search.searchField, robots:state.request.robots})

class CardList extends Component {
    render() {
        let {robots, searchField} = this.props;
        let filteredRobots = robots.filter(robot=>robot.name.toLowerCase().includes(searchField.toLowerCase()));
        let cards = filteredRobots.map(robot=> <Card id={robot.id} name={robot.name} email={robot.email} />);
        return (
            <div>
                {cards}
            </div>
        );
    }
}

export default connect(mapStateToProps)(CardList);