import React from "react";
import FeatureList from "./FeatureList";

export default class MainForm extends React.Component {
  render() {
    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        <FeatureList
          selected={this.props.selected}
          features={this.props.features}
          updateFeature={this.props.updateFeature}
        />
      </section>
    );
  }
}
