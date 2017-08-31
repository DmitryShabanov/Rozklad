import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const DayTable = (props) => (
  <div className="day">
    <p className="day__name">{props.dayName}</p>
    {props.lessons.map((lesson) => (
      <div className="day__lesson" key={lesson.lesson_id}>
        <div className="day__lesson-number">{lesson.lesson_number} пара</div>
        <div className="day__lesson-time">
          <p className="day__time-item">{lesson.time_start}</p>
          <p className="day__time-item">{lesson.time_end}</p>
        </div>
        <div className="day__lesson-info">
          <p className="day__lesson_name">{lesson.lesson_name}</p>
          <p className="day__lesson_teacher">{lesson.teacher_name}</p>
        </div>
        <div className="day__lesson-place">
          <p className="day__lesson-type">{lesson.lesson_type}</p>
          <p className="day__lesson-room">{lesson.lesson_room}</p>
        </div>
      </div>
    ))}
    <div className="day__end" />
  </div>
);

DayTable.propTypes = {
  dayName: PropTypes.string.isRequired,
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
