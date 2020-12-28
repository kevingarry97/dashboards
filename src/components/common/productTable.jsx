import React from 'react';

const ProductTable = ({products}) => {

    return (
        <div className="table-responsive my-3">
            <table className="table table-hover">
                <tbody>
                    {products && products.map((product) => (
                        <tr key={product.id.toString()}>
                            <td>
                                <small style={{ color: '#98AECA'}}># {product.id}</small>
                            </td>
                            <td>
                                <small>{product.name}</small>
                            </td>
                            <td>
                                <small>Rwf {product.unit_price}</small>
                                <br/>
                                <small style={{ color: '#98AECA'}}>Per Unit</small>
                            </td>
                            <td>
                                <small>{product.remainingQuantity}</small>
                                <br/>
                                <small style={{ color: '#98AECA'}}>Quantity</small>
                            </td>
                            <td>
                                <small>Rwf {product.remainingQuantity * product.unit_price}</small>
                                <br/>
                                <small style={{ color: '#98AECA'}}>Total Price</small>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {!products && <div className="text-center text-danger">No available Product or Loading Product .....</div>}
        </div>
    );
}

export default ProductTable;