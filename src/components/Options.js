import React from "react";

export default class Options extends React.Component {
  options = () =>
    this.props.features[this.props.property].map((item, index) => {
      const selectedClass =
        item.name === this.props.selected[this.props.property].name
          ? "feature__selected"
          : "";
      const featureClass = "feature__option " + selectedClass;
      return (
        <li key={index} className="feature__item">
          <div
            className={featureClass}
            onClick={e => this.props.updateFeature(this.props.property, item)}
          >
            {item.name}(
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(item.cost)}
            )
          </div>
        </li>
      );
    });
  render() {
    return <div>{this.options()}</div>;
  }
}
