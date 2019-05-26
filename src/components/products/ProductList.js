import React, { Component } from 'react'

export default class ProductList extends Component {
    render() {
        var {children} = this.props;
        return (
            <main>
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                        {/* Product */}
                        {children}
                    </div>
                </section>
            </main>
        )
    }
}
