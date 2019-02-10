import React, { Component } from "react";
import "./App.css";
import MainForm from "./components/MainForm";
import Summary from './components/Summary';
import Total from './components/Total';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  updateFeature = (feature, newValue) => {
    console.log(this.state);
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    // const summary = Object.keys(this.state.selected).map(key => (
    //   <div className="summary__option" key={key}>
    //     <div className="summary__option__label">{key} </div>
    //     <div className="summary__option__value">
    //       {this.state.selected[key].name}
    //     </div>
    //     <div className="summary__option__cost">
    //       {new Intl.NumberFormat("en-US", {
    //         style: "currency",
    //         currency: "USD"
    //       }).format(this.state.selected[key].cost)}
    //     </div>
    //   </div>
    // ));

    // const total = Object.keys(this.state.selected).reduce(
    //   (acc, curr) => acc + this.state.selected[curr].cost,
    //   0
    // );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>
        </header>
        <main>
          <MainForm
            selected={this.state.selected}
            features={this.props.features}
            updateFeature={this.updateFeature}
          />
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {/* {summary} */}
            <Summary
            selected={this.state.selected}
            />
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
                {/* {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(total)} */}
                <Total 
                selected={this.state.selected}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
