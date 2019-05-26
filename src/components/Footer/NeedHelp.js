import React, { Component } from 'react'

export default class NeedHelp extends Component {
    render() {
        return (
            <>
                <div className="col-lg-2">
                    <h5 className="title">Need help?</h5>
                    <ul>
                        <li>
                            <a href="/">FAQ</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                        <li>
                            <a href="/">Return Policy</a>
                        </li>
                        <li>
                            <a href="/">Product Registration</a>
                        </li>
                    </ul>
                </div>

            </>
        )
    }
}
