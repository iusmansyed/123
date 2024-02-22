import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Protected = (params) => {
    const { Component } = params;
    let navigate = useNavigate();
    useEffect(() => {
        var i = localStorage.getItem("login");
        if (!i ) {
            navigate('/')
        }

    })

    return (
        <>
            <Component />
        </>
    )
}

export default Protected