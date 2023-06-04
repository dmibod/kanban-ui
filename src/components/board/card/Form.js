import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: !!props.visible,
      title: 'Card',
      yesFn: this.handleClose
    };
  }

  handleClose(fn) {
    if (fn && typeof fn == 'function') {
      fn();
    }
    this.setState({ show: false });
  }

  handleShow(title = 'Card', fn) {
    this.setState({
      show: true,
      title,
      yesFn: () => this.handleClose(fn)
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.visible !== prevProps.visible) {
      this.setState({ show: !!this.props.visible });
    }
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Field
              name="name"
              component={this.renderInput}
              label="Enter Title"
            />
            <Field
              name="description"
              component={this.renderInput}
              label="Enter Description"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.state.yesFn}>
              Yes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'You must enter a name';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({ form: 'cardForm', validate })(Form);
