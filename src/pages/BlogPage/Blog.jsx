/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Container className='mt-4 border p-3 mb-5'>
                <div>
                    <h1>1. the differences between uncontrolled and controlled components?</h1>
                    <p>ANS: Controlled components are useful when you want to control the behavior of the component from outside of the component. For example, a form component that needs to handle user input, validate the input, and then update the parent component state would be considered a controlled component. This way, the parent component can access and manipulate the data as needed.On the other hand, uncontrolled components maintain their own state internally, and the parent component does not have direct access to it. Instead, the parent component must rely on event handlers to receive updates from the uncontrolled component.

                    </p>
                </div>
                <div>
                    <h1>2.How to validate React props using PropTypes?</h1>
                    <p>ANS:In React, you can use the PropTypes library to define the types of props that a component should receive. This can help you catch errors early and ensure that your code is robust.</p>
                </div>
                <div>
                    <h1>3.the difference between nodejs and express js?</h1>
                    <p>ANS:Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as A platform built on Chromes JavaScript runtime for easily building fast, scalable network applications. </p>
                </div>
                <div>
                    <h1>4.What is a custom hook, and why will you create a custom hook?</h1>
                    <p>ANS:Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
                </div>
                <div className='text-center'>
                <button className='btn btn-primary text-center'>react to pdf</button>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Blog;