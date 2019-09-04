import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from "../../redux/actions/courseActions";// importing all the actions from the  actions js file in our redux action folder
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux'
class CoursesPage extends React.Component {
  componentDidMount(){
    this.props.actions.loadCourses().catch((error) => {
      alert("loading courses failed" + error)
    })
  }
  render() {
    return (
      <>
        <h2>Courses</h2>
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </>
    );
  }
}

// prop validation very importants
CoursesPage.propTypes = {
  actions: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};

function mapStateToProps(state) { //determines what part of our state gets exposed to the component
  // ownProps argument is not required on this component for now
  return {
    courses: state.courses,
  };
}
// function mapDispatchToProps () {} // lets us decide which actions we need to expose to our component

// // method one
// function mapDispatchToProps(dispatch) {
//   return {
//     createCourse: course=> dispatch(courseActions.createCourse(course)) // calling the action while passing in the arguments
//   };
  
// }

// method two
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch) //you can pass in all of your course actions if you have more
  };
}

//method three
// const mapDispatchToProps = {
//   createCourse:courseActions.createCourse, //each property is expected to be an action creator fuction
// }



export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // automatic dispatch injections if mapToDispatch is ommited
