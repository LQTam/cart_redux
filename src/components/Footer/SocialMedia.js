import React, { Component } from 'react'

export default class SocialMedia extends Component {
    render() {
        return (
            <>
                <div className="col-lg-2 ml-auto">
                    <h5 className="title social-section-title">Social Media</h5>
                    <div className="social-section text-md-left">
                        <ul className="text-center">
                            <li>
                                <a href="/" className="btn-floating  btn-fb waves-effect waves-light">
                                    <i className="fa fa-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="/" className="btn-floating  btn-ins waves-effect waves-light">
                                    <i className="fa fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="/" className="btn-floating  btn-tw waves-effect waves-light">
                                    <i className="fa fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="/" className="btn-floating  btn-yt waves-effect waves-light">
                                    <i className="fa fa-youtube" />
                                </a>
                            </li>
                            <li>
                                <a href="/" className="btn-floating  btn-li waves-effect waves-light">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="/" className="btn-floating  btn-dribbble waves-effect waves-light">
                                    <i className="fa fa-dribbble left" />
                                </a>
                            </li>
                            <li>
                                <a href="/" className="btn-floating  btn-pin waves-effect waves-light">
                                    <i className="fa fa-pinterest" />
                                </a>
                            </li>
                            <li>
                                <a href="/" className="btn-floating  btn-gplus waves-effect waves-light">
                                    <i className="fa fa-google-plus" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
