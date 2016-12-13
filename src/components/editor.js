import {React} from 'react';
import CodeMirror from 'codemirror';

export class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.editorNode = undefined;
  }
  componentDidMount() {
    this.editorNode = CodeMirror.fromTextArea(this.textEditor, this.props.codeMirrorOptions);
  }
  getClasses() {
    return {
      preview: [
        ...this.props.previewClasses, 'markdowneditor__preview',
      ].join(''),
      outer: [
        ...this.props.outerClasses, 'markdowneditor__outer',
      ].join(''),
    };
  }
  getStyles() {
    return {

    };
  }
  render() {
    const classes = this.getClasses();
    const styles = this.props.defaultStylingDisabled ? {} : this.getStyles();
    const preview = this.props.displayPreview ? (
      <div className={classes.preview}>
        <div style={styles.emptyPreview}><h2>Empty</h2></div>
      </div>
    ) : undefined;
    return (
      <div className={classes.outer} styles={styles.outer}>
        <textarea className={classes.cmeditor} ref={(textarea) => this.textArea = textarea} id="" />
        {preview}
      </div>
    );
  }
}


MarkdownEditor.propTypes = {
  codeMirrorOptions: React.PropTypes.object,
  defaultStylingDisabled: React.PropTypes.bool,
  displayPreview: React.PropTypes.bool,
  outerClasses: React.PropTypes.arrayOf(React.PropTypes.string),
  previewClasses: React.PropTypes.arrayOf(React.PropTypes.string),
};

MarkdownEditor.defaultProps = {
  defaultStylingDisabled: false,
  codeMirrorOptions: {},
  displayPreview: true,
  outerClasses: [''],
  previewClasses: [''],
};
