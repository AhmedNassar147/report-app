import React, { Component } from 'react';
import { SubmissionError } from 'redux-form/immutable';
import { Main, Container, ResultView } from './styledComponents';
import { ReportForm } from './components';

const requiredMsg = name => `Please fill out the ${name} field`;

class App extends Component {

  state = {
    shouldRenderResult: false,
    data: {}
  }

  validateFormSubmision = values => {
    const { name, type, date } = values;

    if (!date) {
      throw new SubmissionError({ date: requiredMsg('date') })
    } else if (!name) {
      throw new SubmissionError({ name: requiredMsg('name') })
    } else if (!type) {
      throw new SubmissionError({ type: requiredMsg('type') })
    } else {
      this.setState({ data: values, shouldRenderResult: true })
    }
  }

  handleSubmitForm = values => this.validateFormSubmision(values.toJS())

  renderResultView = data => (
    <ResultView children={JSON.stringify(data)} />
  );

  render() {
    const { shouldRenderResult, data } = this.state;
    return (
      <Main>
        <Container>
          <ReportForm onSubmitForm={this.handleSubmitForm} />

          {shouldRenderResult ? this.renderResultView(data) : null}
        </Container>
      </Main>
    );
  }
}

export default App;
