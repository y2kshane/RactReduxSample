import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Spin, Button } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { getEmployees } from '../../redux/actions';

import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'employee_name',
    key: 'employee_name',
  },
  {
    title: 'Age',
    dataIndex: 'employee_age',
    key: 'employee_age',
  },
  {
    title: 'Salary',
    dataIndex: 'employee_salary',
    key: 'employee_salary',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Show More</a>
      </Space>
    ),
  },
];

function Employees(props) {
  useEffect(() => {
    props.getEmployees();
  }, []);

  const refreshData = () => {
    props.getEmployees();
  };

  const dataTable = (
    <span>
      <Button type="primary" onClick={refreshData} loading={props.loading}>
        Reload
      </Button>
      <Table dataSource={props.employeeList} columns={columns} />
    </span>
  );
  return <div>{props.employeeList ? dataTable : <Spin />}</div>;
}

const mapStateToProps = (state) => ({
  employeeList: state.employeeReducer.employeeList,
  loading: state.employeeReducer.employeeListPending,
  error: state.employeeReducer.employeeListError,
});

const mapDispatchToProps = (dispatch) => ({
  getEmployees: () => dispatch(getEmployees()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
