
 import React from "react";

 export default class ContentHeader extends React.Component {
     constructor(props) {
         super(props);
     }
     render() {
         return (
             <h2>{this.props.title}</h2>
         );
     }
 }
