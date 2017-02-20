
import "../../../src/less/about.less";

import React from "react";
import ReactDOM from "react-dom";
import ContentHeader from "../components/contentHeader";
import Section from "../components/section";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="app">
                <ContentHeader title="Amenities"/>
                <Section title="Deporset Fees"/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("content")
);
