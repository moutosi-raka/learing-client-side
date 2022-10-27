import React from 'react';

const Blog = () => {
    return (
        <div className='w-2/3 mx-auto my-12'>
            <div className='border p-5 mb-8 '>
                <h3 className="text-2xl text-blue-500 mb-4">what is cors?</h3>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='border p-5 mb-8'>
                <h3 className="text-2xl text-blue-500 mb-4">Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections.</p>
                <p>Other authentication option :</p>
                <ul>
                    <li>Auth0</li>
                    <li>MongoDB</li>
                    <li>Passport</li>
                    <li> Okta</li>
                </ul>
            </div>
            <div className='border p-5 mb-8'>
                <h3 className="text-2xl text-blue-500 mb-4">How does the private route work?</h3>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated</p>
            </div>
            <div className='border p-5 '>
                <h3 className="text-2xl text-blue-500 mb-4">What is Node? How does Node work??</h3>
                <p>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</p>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>
    );
};

export default Blog;