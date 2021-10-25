import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Table,
    Badge,
    Button
} from 'reactstrap';
import * as cartActions from "../../redux/actions/cartActions"
import { bindActionCreators } from "redux"

class CartDetail extends Component {
    render() {
        return (
            <div>
                <h3>
                    <Badge color="warning">Sepet</Badge>
                </h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th scope="row">{cartItem.product.id}</th>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td><Button color="danger" onClick={() => this.props.actions.removeFromCart(cartItem.product)}>X</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)