import React from 'react';
import {connect} from 'react-redux';
import RespectiveSchoolForm from './RespectiveSchoolForm';
import { respectiveSchoolThunk } from '../reducers/respectiveSchool';

class RespectiveSchool extends React.Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        console.log(this.props)
        await this.props.respectiveSchool(this.props.schoolId);
    }
    render() {
        return (
            <div>
                {
                    <RespectiveSchoolForm schoolId = { this.props.schoolId } />
                }
            </div>
        )
    }
}

const mapStateToSchoolsProps = state => {
    return {
        respectiveSchool: state.respectiveSchool
    }
}

const mapDispatchToSchoolsProps = {
    respectiveSchool: respectiveSchoolThunk
}

export default connect(mapStateToSchoolsProps, mapDispatchToSchoolsProps)(RespectiveSchool);