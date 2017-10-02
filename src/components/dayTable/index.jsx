import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class DayTable extends Component {

  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll(element) {
    if (element && this.props.current) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  render() {
    return (
      <div ref={this.scroll} className={`day ${(this.props.current) ? 'day_current' : ''} ${(this.props.next) ? 'day_next' : ''}`}>
        <p className="day__name">{this.props.dayName}</p>
        {this.props.lessons.map((lesson) => (
          <div className="day__lesson" key={lesson.lesson_id}>
            <div className="day__lesson-number">{lesson.lesson_number} пара</div>
            <div className="day__lesson-time">
              <p className="day__time-item">{lesson.time_start.slice(0, 5)}</p>
              <p className="day__time-item">{lesson.time_end.slice(0, 5)}</p>
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
  }
}

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
