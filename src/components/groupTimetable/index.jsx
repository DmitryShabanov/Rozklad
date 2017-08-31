import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DayTable from './../dayTable';

import './index.scss';

function getTimetable(week) {
  return (
    <div className="col-12 group__week">
      {week.map((day) => (
        <DayTable
          key={day.day_number}
          dayName={day.day_name}
          lessons={day.lessons}
        />
      ))}
    </div>
  );
}

const GroupTimetable = ({ data }) => {
  const groupName = data.group.group_full_name;
  const firstWeek = Object.values(data.weeks[1].days);
  const secondWeek = Object.values(data.weeks[2].days);
  return (
    <section className="container group">
      <h1 className="col-12 group__title">Timetable for group {groupName}</h1>
      <div className="col-12">
        <h2 className="group__week-title">First week</h2>
      </div>
      {getTimetable(firstWeek)}
      <div className="col-12">
        <h2 className="group__week-title">Second week</h2>
      </div>
      {getTimetable(secondWeek)}
      <div className="col-12"><Link className="group__back" to="/">back</Link></div>
    </section>
  );
};

GroupTimetable.propTypes = {
  data: PropTypes.shape({
    group: PropTypes.objectOf(PropTypes.any).isRequired,
    weeks: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default GroupTimetable;
