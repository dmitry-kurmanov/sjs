import { bindActionCreators } from 'redux'
import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as resultActions from "../actions/result";

import Radiogroup from '../components/Radiogroup.jsx';
import Comment from '../components/Comment.jsx';

class ElementsContainer extends Component {
  constructor(props) {
    super(props);

    this.questions = {
        radiogroup: Radiogroup,
        comment: Comment
    };

    this.changeResult = this.changeResult.bind(this);
  }

  changeResult(payload) {
    this.props.resultActions.changeResult(payload);
  }

  generateElements() {
    const elements = this.props.settings.elements.map( (element) => {
        const type = element.type;  
        const Question = this.questions[type] || 'unknown';
       
        if (Question === "unknown") {
            console.error("SJS error: unknown component name: " + type);
            return null;
        }

        return <Question key={element.name} onChange={this.changeResult}/>
    });

    return elements;
  }

  render() {
    const elementsTemplate = this.generateElements();
    
    return <div>
        {elementsTemplate}
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    resultActions: bindActionCreators(resultActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementsContainer)

