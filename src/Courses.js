import React, { Component } from 'react';
import './App.css';
import { CSSCourses, HTMLCourses, JSCourses } from './coursesList';
import {
	Route,
	NavLink,
	Redirect
} from 'react-router-dom'

const Course = (props) => {
	let courses = props.array.map(item => {
		return (
			<li className='course media group' key={item.id} >
				<img className='course-img' src={item.img_src} alt='course' />
				<div>
					<h3>{item.title}</h3>
					<p>{item.description}</p>
				</div>
			</li>
		);
	});
	return (
		<ul>
			{courses}
		</ul>
	);
}

class Courses extends Component {
	render() {
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<h2>Courses</h2>
					<ul className='course-nav'>
						<li>  <NavLink exact to="/courses/html"> HTML </NavLink> </li>
						<li>  <NavLink to="/courses/css"> CSS </NavLink> </li>
						<li>  <NavLink to="/courses/javascript"> JavaScript </NavLink> </li>
					</ul>
				</div>
				<Route exact path="/courses"
					render={() => <Redirect to="/courses/html" />} />
				<Route path="/courses/html" render={() => <Course array={HTMLCourses}/>} />
				<Route path="/courses/css"  render={() => <Course array={CSSCourses}/>} />
				<Route path="/courses/javascript"  render={() => <Course array={JSCourses}/>} />
			</div>
		);
	}
}

export default Courses;