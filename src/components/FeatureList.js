import React from "react";
import Options from "./Options";

export default class FeatureList extends React.Component {
  features = () =>
    Object.keys(this.props.features).map(key => {
      return (
        <div className="feature" key={key}>
          <div className="feature__name">{key}</div>
          <ul className="feature__list">
            <Options
              selected={this.props.selected}
              features={this.props.features}
              updateFeature={this.props.updateFeature}
              property={key}
            />
          </ul>
        </div>
      );
    });

  render() {
    return <div>{this.features()}</div>;
  }
}
