import React, { Component } from 'react';
import './App.css';
import TeacherList from './TeacherList';

class Teachers extends Component {
    render() {
        return (
            <div className="main-content">
                <h2>Teachers</h2>
                <ul className='group'>
                    {
                        TeacherList.map((item,index)=> {
                            return (
                                <li className='teacher' key={item.id} style={{marginLeft:index%2?'2.54%':''}}>
                                    <img className='teacher-img' src={item.img_src} alt='teacher' />
                                    <h3>{item.name}</h3>
                                    <p>{item.bio}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Teachers;