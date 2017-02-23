
import React from "react";

export default  class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <fieldset>
                <input type="checkbox" name="bedroom"/>
                <span>1 bedroom</span>
            </fieldset>
        );
    }
}
