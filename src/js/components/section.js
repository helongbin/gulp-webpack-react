
import React from "react";

export default class Section extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="component-section">
                <div className="section-header">
                    <h3>{this.props.title}</h3>
                    <span>icon</span>
                </div>
                <div className="section-content">main content</div>
            </div>
        );
    }
}
