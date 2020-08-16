import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from './taskList';

export const Dashboard = ({groups}) => (
    <div>
        <h2>Connected Dashboard</h2>
        {groups.map(group => (
            <ConnectedTaskList key={group.id} id={group.id} name={group.name}></ConnectedTaskList>
        ))}
    </div>
)


function mapStateToProps(state) {
    return {
        groups: state.groups,
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);