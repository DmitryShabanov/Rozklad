import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const DayTable = (props) => (
  <div>
    {props.name}
    {props.lessons.map((lesson) => (
      <div key={lesson.lesson_id}>
        <div>{lesson.lesson_number}</div>
        <div>{lesson.time_start}</div>
        <div>{lesson.time_end}</div>
        <div>{lesson.lesson_name}</div>
        <div>{lesson.lesson_type}</div>
        <div>{lesson.lesson_room}</div>
        <div>{lesson.teacher_name}</div>
      </div>
    ))}
  </div>
);

DayTable.propTypes = {
  name: PropTypes.string.isRequired,
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      lesson_id: PropTypes.string.isRequired,
      lesson_name: PropTypes.string.isRequired,
      lesson_number: PropTypes.string.isRequired,
      lesson_room: PropTypes.string.isRequired,
      lesson_type: PropTypes.string.isRequired,
      teacher_name: PropTypes.string.isRequired,
      time_start: PropTypes.string.isRequired,
      time_end: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default DayTable;
