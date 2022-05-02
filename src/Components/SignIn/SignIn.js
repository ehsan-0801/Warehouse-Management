import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignIn.css'
import google from '../../images/social/google.png';
import github from '../../images/social/github.png';
const Login = () => {
    return (
        <div className="my-5">
            <h2 style={ { color: 'burlywood' } } className="text-center fw-bold fs-1">Login Here Please</h2>
            <Form className="form mx-auto">
                <Form.Group as={ Row } className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={ 2 }>
                        Email
                    </Form.Label>
                    <Col sm={ 10 }>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={ Row } className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={ 2 }>
                        Password
                    </Form.Label>
                    <Col sm={ 10 }>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={ Row } className="mb-3">
                    <Col sm={ { span: 10, offset: 2 } }>
                        <Button type="submit" variant="Loginbtn w-100 mx-auto d-block mb-2">Sign in</Button>
                    </Col>
                </Form.Group>
                <div className="mx-auto d-flex justify-content-center align-items-center">
                    <div className="">
                        <p className="mx-auto">Forget Password?</p>
                    </div>
                    <div className="">
                        <p><button className='mx-auto btn-reset pe-auto text-decoration-none' >Please Reset Here</button></p>
                    </div>
                </div>
                <div className="mx-auto d-flex justify-content-center align-items-center">
                    <div className="">
                        <p className="mx-auto text-primary">Exploring First Time?</p>
                    </div>
                    <div className="">
                        <p><Link to="/signup" className='mx-auto btn-signup pe-auto text-decoration-none' >Sign Up please</Link></p>
                    </div>
                </div>
                <div>
                    <h2 className='border-top border-bottom p-3'>You can also sign in with</h2>
                </div>
                <div className="row">

                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button
                            className='btn btn-light d-flex mx-auto my-2'>
                            <img style={ { width: '30px' } } src={ google } alt="" />
                            <span className='px-2'>Sign in with Google</span>
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button
                            className='btn btn-light d-flex mx-auto my-2'>
                            <img style={ { width: '30px' } } src={ github } alt="" />
                            <span className='px-2'>Sign in with Github</span>
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Login;