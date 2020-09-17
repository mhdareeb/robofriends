import React from  'react';
import Card from './Card';

const CardList = ({searchField, robots}) => {
    let filteredRobots = robots.filter(robot=>robot.name.toLowerCase().includes(searchField.toLowerCase()));
    // let cards = robots.map(robot=> <Card id={robot.id} name={robot.name} email={robot.email} />);
    let cards = filteredRobots.map(robot=> <Card id={robot.id} name={robot.name} email={robot.email} />);
    return (
        <div>
            {cards}
        </div>
    );
}

export default CardList;