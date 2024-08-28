import { Component } from "react";
import Button from "../utilities/button/Button";

import "./Items"
class Items extends Component {
  render() {

    const { date, title, tags, description, imageUrl } = this.props;

    return (
        <div className="col-sm-4">
          <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
              <p className="card-date">{date}</p>
              <h3 className="card-title">{title}</h3>
              <p className="card-tags">{tags}</p>
              <p className="card-description">{description}</p>
              <Button type="button" text="See more ..." />
            </div>
          </div>
        </div>
    );
  }
}

export default Items;