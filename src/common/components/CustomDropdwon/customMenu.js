import React from 'react';
import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper';

class CustomMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: ''
    };
  }
  
  handleRootClose = (event) => {
    this.props.onClose(event, { source: 'rootClose' });
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;

    return (
      <RootCloseWrapper
        disabled={!this.props.open}
        onRootClose={this.handleRootClose}
        event={this.props.rootCloseEvent}
      >
        <div className={"dropdown-menu " + this.props.cutsomClass} style={{ padding: '' }}>
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              child => !value.trim() || child.props.children.indexOf(value) !== -1
            )}
          </ul>
        </div>
      </RootCloseWrapper>
    );
  }
}

export default CustomMenu