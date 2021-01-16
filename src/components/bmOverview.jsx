import React from 'react';
import ReceivedTable from './common/receivedTable';
import Form from './common/form';
import Joi from 'joi-browser';
import { viewBranchProduct } from '../services/productService';
import { addSubProduct } from '../services/subProduct';
import SuccessMessage from '../components/common/successMessage';
import { Add } from '@material-ui/icons';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { getBranchDistribution } from '../services/distributionService';
import { paginate } from '../utils/paginate';
import BranchDistributionTable from './common/branchDistributionTable';
import Pagination from './common/pagination';

class BmOverview extends Form {
    state = {  
        products: [],
        currentPage: 1,
        pageSize: 2,
        data: { receivedQuantity: '', damagedQuantity: '', product_id: ''},
        distributions: [],
        errors: {},
        error: '',
        open: false
    }

    schema = {
        receivedQuantity: Joi.string().required().label("Received"),
        damagedQuantity: Joi.string().required().label("Damaged"),
        product_id: Joi.string().required().label("Product")
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false});
        this.setState({error: ''})
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    }

    async populateDistribution() {
        const {data} = await getBranchDistribution();
        this.setState({distributions: data});
        
    }

    async populateProducts() {
        const {data} = await viewBranchProduct();
        this.setState({products: data['Products']});
    }

    async componentDidMount() {
        await this.populateProducts();
        await this.populateDistribution();
    }
    
    doSubmit = async () => {
        const {data} = await addSubProduct(this.state.data);
        this.setState({error: data['message']});
        this.setState({data: { receivedQuantity: '', damagedQuantity: '', product_id: ''}})
    }

    render() {
        const {currentPage, pageSize, distributions} = this.state;
        const dists = paginate(distributions, currentPage, pageSize);
        return ( 
            <div>
                <div className="row my-3">
                    <div className="col-12">
                        <div className="card border-0 card-body">
                        <div className="float-left">
                                <h6 className="text-muted mb-3">View Distributed Products</h6>
                            </div>
                            <BranchDistributionTable distributions={dists} />
                            <Pagination itemsCount={this.state.distributions.length} currentPage={currentPage} pageSize={pageSize} handlePageChange={this.handlePageChange} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BmOverview;