import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form/immutable";
import FormCard from './Card';
import Input from './Input';
import Row from './Row';
import Button from './Button'
import AddClass from './AddClass';
import Label from "./Label";

const ReportForm = ({ handleSubmit, pristine, onSubmitForm, submitting, error }) => (
  <FormCard onSubmit={handleSubmit(onSubmitForm)}>

    <Row>
      <Field component={Input} placeholder="date" name="date" type="date" />
      <Field component={Input} placeholder="Name" name="name" />
      <Field component={Input} placeholder="Type" name="type" />
    </Row>

    <AddClass />

    <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
      {error && <Label children={error} />}
    </Row>

    <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Button children='Save' type="submit" disabled={pristine || submitting} />
    </Row>


  </FormCard>
);

ReportForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmitForm: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string
}

export default reduxForm({ form: 'reportFormData' })(ReportForm)