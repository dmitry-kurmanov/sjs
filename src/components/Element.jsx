import { h, render, Component } from 'preact';

import Radiogroup from './Radiogroup.jsx';
import Comment from './Comment.jsx';

export default class Element extends Component {
    constructor(props) {
        super(props);
        this.elements = {
            radiogroup: Radiogroup,
            comment: Comment
        };
      }

    render() {
       const {type} = this.props;  
       const Component = this.elements[type] || 'unknown';
       
       if (Component === "unknown") {
        console.error("SJS error: unknown component name: " + type);
        return;
       }

       return <Component />
    }
}