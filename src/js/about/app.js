
import "../../../src/less/about.less";

import React from "react";
import ReactDOM from "react-dom";
import ContentHeader from "../components/contentHeader";
import Section from "../components/section";
import ajax from "../components/ajax";

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

ajax("GET", "/api/total", function (response) {
    console.log(response);
});