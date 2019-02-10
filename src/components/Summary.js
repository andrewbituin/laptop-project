import React from 'react';

export default class Summary extends React.Component{
    summary = () => Object.keys(this.props.selected).map(key => (
        <div className="summary__option" key={key}>
          <div className="summary__option__label">{key} </div>
          <div className="summary__option__value">
            {this.props.selected[key].name}
          </div>
          <div className="summary__option__cost">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(this.props.selected[key].cost)}
          </div>
        </div>
      ));

    render(){
        return (
            <div>{this.summary()}</div>
        );
    }
}