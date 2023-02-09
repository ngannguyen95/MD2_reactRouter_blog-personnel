import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'

export default function User(props) {
    const { users } = props;

    return (
        <div>
            <Navbar></Navbar>
            <h1>User Page</h1>
            <div className="row">
                {
                    users.map((user) =>

                        <div className="col-3 card my-4" key={user.id}>
                            <img
                                src="https://sm.mashable.com/t/mashable_in/news/c/constantly/constantly-stressed-at-work-it-might-actually-be-changing-yo_cqv3.1200.jpg"
                                className="card-img-top"
                                alt="Csdvd"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Usename :{user.name}</li>
                                <li className="list-group-item">Email:{user.email}</li>
                                <li className="list-group-item">Phone:{user.phone}</li>
                            </ul>
                            <div className="card-body">
                                <NavLink className="btn btn-primary" to={`/user/${user.id}`}>Show more details</NavLink>
                            </div>
                        </div>

                    )

                }

            </div>
        </div>
    )
}
