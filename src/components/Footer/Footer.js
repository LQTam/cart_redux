import React, { Component } from 'react'
import SocialMedia from './SocialMedia';
import Delivery from './Delivery';
import NeedHelp from './NeedHelp';
import Instagram from './Instagram';

export default class Footer extends Component {
    render() {
        return (
            <>
                {/* Footer */}
                <footer className="page-footer center-on-small-only">
                    <div className="container-fluid">
                        <div className="row">
                            <SocialMedia />
                            <Delivery />
                            <NeedHelp />
                            <Instagram />
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container-fluid">
                            © 2016 Copyright:
                            <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
