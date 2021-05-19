import React, { Fragment } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import {deleteExperience} from '../../action/profile'

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => {
    return (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td className="hide-sm">{exp.title}</td>
        <td className="hide-sm">
          <Moment format="YYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            "NOW"
          ) : (
            <Moment format="YYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button className="btn btn-danger" onClick={e=>{deleteExperience(exp._id)}} >Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

export default connect(null, { deleteExperience })(Experience);
