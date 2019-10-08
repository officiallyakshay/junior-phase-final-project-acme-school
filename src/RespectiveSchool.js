import React from 'react';
import {connect} from 'react-redux';
import RespectiveSchoolForm from './RespectiveSchoolForm';
import { respectiveSchoolThunk } from '../reducers/respectiveSchool';

class RespectiveSchool extends React.Component {
    constructor() {
        super();
    }
    async componentDidMount() {
        console.log(this.props)
        await this.props.respectiveSchool()
    }
    render() {
        return (
            <div>
                {
                    <RespectiveSchoolForm />
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