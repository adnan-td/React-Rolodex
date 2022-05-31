import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

// this class name should start with capital letter
// return should have its items filled in a single parent div
// whenever props change this re-renders
class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
