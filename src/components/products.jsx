import React from 'react';
import ChartPie from './common/chartPie';
import ProductTable from './common/productTable';
import Clearfix from './common/clearfix';

const Products = () => {
    return (
        <div className="row">
            <div className="col-lg-9">
                <div className="card border-0">
                    <div className="card-body">
                        <Clearfix title="Our Products" />
                        <ProductTable />
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card border-0">
                    <div className="card-body">
                        <Clearfix title="Our Branches" />
                        <ChartPie />
                        <span className="mx-2">
                            <strong style={{ color: '#00C49F', fontSize: 40}}>.</strong>
                            &nbsp; <small style={{ color: '#6C757D', fontSize: 12}}>Rusizi</small> 
                        </span>
                        <span className="mx-2">
                            <strong style={{ color: '#0088FE', fontSize: 40}}>.</strong>
                            &nbsp; <small style={{ color: '#6C757D', fontSize: 12}}>Rubavu</small> 
                        </span>
                        <span className="mx-2">
                            <strong style={{ color: '#FFBB28', fontSize: 40}}>.</strong>
                            &nbsp; <small style={{ color: '#6C757D', fontSize: 12}}>Kigali</small> 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;