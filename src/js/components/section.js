
import React from "react";

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
        this.isExpandSection = this.isExpandSection.bind(this);
    }
    isExpandSection() {
        this.setState({isExpanded: !this.state.isExpanded});
    }
    render() {
        let contentActiveClass = this.state.isExpanded ? "section-content-active" : "section-content-inactive";
        let iconActiveClass = this.state.isExpanded ? "icon-unfold" : "icon-fold";
        return (
            <div id="component-section">
                <div className="section-header" onClick={this.isExpandSection}>
                    <h2>{this.props.title}</h2>
                    <span className={`iconfont ${iconActiveClass}`}></span>
                </div>
                <div className={`section-content ${contentActiveClass}`}>
                    main content
                </div>
            </div>
        );
    }
}
