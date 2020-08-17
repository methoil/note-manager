import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { ConnectedTaskList } from './task-list';

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

export const ConnectedDashboard = withRouter(connect(mapStateToProps)(Dashboard));
