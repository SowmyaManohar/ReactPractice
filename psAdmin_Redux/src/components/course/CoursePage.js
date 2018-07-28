import React, {PropTypes} from 'react';
import * as courseActions from '../../actions/courseActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            course:{title:""}
        };
      this.redirectToAddToCoursePage=this.redirectToAddToCoursePage.bind(this);
    }
    redirectToAddToCoursePage(){
        browserHistory.push('/course');
    }
   
    render(){
        return(
            <div>
            <h1>Courses</h1>
            <input type="submit"
            value="Add Course"
            className="btn btn-primary"
            onClick={this.redirectToAddToCoursePage}/>
            <CourseList courses={this.props.courses} />
            </div>
        );
    }
}
CoursePage.propTypes={
    courses:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
};
function mapStateToProps(state,ownProps){
    return{
        courses:state.courses
    };
}
function mapDispatchToProps(dispatch){
    // return{
    //     createCourse: course => dispatch(courseActions.createCourse(course))
    // };
    return{
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);
