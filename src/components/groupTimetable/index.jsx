import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DayTable from './../dayTable';

import './index.scss';

let inWeek;
let nextDay;

function getTimetable(week, isCurrent, weekNumber) {
  let currentDay = -1;
  if (isCurrent) {
    currentDay = new Date().getDay();
    if (currentDay > 0 && currentDay < 6) {
      nextDay = currentDay + 1;
      inWeek = weekNumber;
    } else {
      nextDay = 1;
      inWeek = (weekNumber === 1) ? 2 : 1;
    }
  }
  return (
    <div className="col-12 group__week">
      {week.map((day) => (
        <DayTable
          key={day.day_number}
          dayName={day.day_name}
          lessons={day.lessons}
          current={(day.day_number === currentDay)}
          next={(weekNumber === inWeek && day.day_number === nextDay)}
        />))}
    </div>
  );
}

const GroupTimetable = ({ data, currentWeek }) => {
  const groupName = data.group.group_full_name;
  const firstWeek = Object.values(data.weeks[1].days);
  const secondWeek = Object.values(data.weeks[2].days);
  return (
    <section className="container group">
      <h1 className="col-12 group__title">Timetable for group {groupName}</h1>
      <div className="col-12">
        <h2 className="group__week-title">First week</h2>
      </div>
      {getTimetable(firstWeek, (currentWeek === 1), 1)}
      <div className="col-12">
        <h2 className="group__week-title">Second week</h2>
      </div>
      {getTimetable(secondWeek, (currentWeek === 2), 2)}
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
