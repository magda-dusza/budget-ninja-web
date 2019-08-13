import React from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>Page not found</h3>
                <p>
                    <Link to="/login">Login</Link>
                </p>
            </div>
        );
    }
}