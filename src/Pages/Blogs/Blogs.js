import React from 'react';

const Blogs = () => {
    return (
        <div className='container text-center'>
            <h2>Difference between `authorization` and `authentication`</h2>
            <p>authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.</p>
            <br />
            <h2>Why are you using `firebase`? What other options do you have to implement authentication?</h2>
            <p>Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.</p>
            <br />
            <h2>What other services does `firebase` provide other than authentication</h2>
            <p>When Enterprises Migrate To The Cloud, They Still Have Workload Security Responsibility. SaaS And PaaS Models Each Require A Targeted Cloud Security Strategy To Protect Apps. SaaS security. E-handbook. Native tools. IT procedures.</p>
            <br />
        </div>
    );
};

export default Blogs;