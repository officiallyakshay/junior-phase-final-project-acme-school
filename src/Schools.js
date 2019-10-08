import React from 'react';
import {connect} from 'react-redux';
import SchoolForm from './SchoolForm';
import { setSchoolsThunks } from '../reducers/schools';

class Schools extends React.Component {
    constructor() {
        super();
    }
    async componentDidMount() {
        await this.props.setSchools();
    }
    render() {
        return (
            <div>
            {
              <SchoolForm />
            }
            </div>
        )
    }
};

const mapStateToSchoolsProps = state => {
    return {
        schools: state.schools
    }
}

const mapDispatchToSchoolsProps = {
    setSchools: setSchoolsThunks
}

export default connect(mapStateToSchoolsProps, mapDispatchToSchoolsProps)(Schools);