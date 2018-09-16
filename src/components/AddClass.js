import React, { Fragment } from 'react';
import { Field, FieldArray } from 'redux-form/immutable';
import Row from './Row';
import Select from './Select';
import TextArea from './TextArea';
import Button from './Button';

const courses = [
  { value: '', label: 'Course:' },
  { value: 'Mathematics', label: 'Mathematics' },
  { value: 'Physics', label: 'Physics' },
  { value: 'DataStructure', label: 'Data structure' },
  { value: 'algorithms', label: 'algorithms' }
];

const grades = [
  { value: '', label: 'Grade:' },
  { value: 'A+', label: 'Very Exellent' },
  { value: 'A', label: 'Exellent' },
  { value: 'B+', label: 'Very good' },
  { value: 'B', label: 'Good' }
]

const RenderNewClass = ({ fields }) => (
  <Fragment>
    {fields.map((classData, index) => (
      <Row key={index}>
        <Field component={Select} name={`${classData}.course`} options={courses} />
        <Field component={Select} name={`${classData}.grade`} options={grades} />
        <Field component={TextArea} name={`${classData}.comment`} />
        <span style={{ padding: '4px 0px', flex: 0.091, textAlign: 'center' }}>
          <Button children='X' onClick={() => fields.remove(index)} fab danger />
        </span>
      </Row>
    ))}
    <Row style={{ justifyContent: 'flex-end' }}>
      <Button children='Add Class' style={{ alignSelf: 'flex-end' }} onClick={() => fields.push()} fab />
    </Row>
  </Fragment>
)

const AddClass = () => <FieldArray name="classess" component={RenderNewClass} />;

export default AddClass;