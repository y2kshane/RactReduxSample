import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getEmployees } from '../../redux/actions';

function Employees(props) {
  useEffect(() => {
    props.getEmployees();
  }, []);

  return <div>1234</div>;
}

const mapStateToProps = (state) => ({ employees: state.employees });

const mapDispatchToProps = (dispatch) => ({
  getEmployees: () => dispatch(getEmployees()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
