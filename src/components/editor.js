import {React} from 'react';
import Codemirror from 'codemirror';

export class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.editor = undefined;
  }
  componentDidMount() {

  }
  getClasses() {
    return {

    };
  }
  getStyles() {
    return {

    };
  }
  render() {
    let classes = this.getClasses();
    let styles = this.props.defaultStylingDisabled ? {} : this.getStyles();
    return (
      <div className={classes.outer} styles={styles.outer}>
        <textarea ref={(textarea) => this.textArea = textarea} id="" cols="30" rows="10"></textarea>
      </div>
    );
  }
}


MarkdownEditor.propTypes = {
  defaultStylingDisabled: React.PropTypes.bool
};

MarkdownEditor.defaultProps = {
  defaultStylingDisabled: false
};
