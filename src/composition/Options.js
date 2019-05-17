import React, { Component } from 'react';
import '../App.css';
import Features from './Features.js'

class Options extends Component {

    render() {
        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                    <Features 
                        features={this.props.features}
                        selected={this.props.selected}
                        handleUpdateFeature={this.props.handleUpdateFeature}
                    />
            </section>
        )
    }
}

export default Options