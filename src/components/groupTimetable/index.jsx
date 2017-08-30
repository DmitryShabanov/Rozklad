import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DayTable from './../dayTable';

import './index.scss';

function getTimetable(week) {
  return (
    <div className="col-12">
      {week.map((day) => (
        <DayTable
          key={day.day_number}
          name={day.day_name}
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
      <h1 className="col-12 group__title">Розклад групи {groupName}</h1>
      <h2 className="col-12">Перша неділя</h2>
      {getTimetable(firstWeek)}
      <h2 className="col-12">Друга неділя</h2>
      {getTimetable(secondWeek)}
      <div className="col-12 group__back"><Link to="/">back</Link></div>
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
