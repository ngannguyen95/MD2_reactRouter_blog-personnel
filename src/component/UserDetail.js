import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Params, useParams } from 'react-router-dom';

export default function UserDetail(props) {
    const [selectUser, setSelectUser] = useState("");
    const userId = useParams.userId;

    const { users } = props;

    useEffect(() =>
        users.forEach((user) => {
            if (userId === users.id) {
                setSelectUser(user)
            }
        }), []
    )

    return (
        <div>
            <Navbar></Navbar>
            <h1>User Details</h1>
            <div className="content row">
                <div className="col-6">
                    <h4>{selectUser.name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Username :{selectUser.name}</li>
                        <li className="list-group-item">Email:{selectUser.email} </li>
                        <li className="list-group-item">
                            <h5>Address Details</h5>
                            <ul>
                                <li>Street</li>
                                <li>Suite</li>
                                <li>City</li>
                                <li>ZipCode</li>
                            </ul>
                        </li>
                        <li className="list-group-item">{selectUser.email}</li>
                        <li className="list-group-item">Website</li>
                        <li className="list-group-item">
                            <h5>Company Details</h5>
                            <ul>
                                <li>Name</li>
                                <li>Catch Phrasey</li>
                                <li>BS</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-6">
                    <img
                        src="https://tse4.mm.bing.net/th?id=OIP.-EgxmN52qH7_v62klUUgMgE8DF&pid=Api&P=0"
                        className="img-fluid"
                        alt="road"
                    />
                    <p className="text-center">{selectUser.name + 'photo'}</p>
                </div>
            </div>
        </div>
    )
}
