import React, { Component } from 'react';
 
export default class Report extends Component {
    render() {
        return (
            <div className="container mt-5 text-muted">
                <div className="clearfix">
                    <div className="float-left">
                    <h4 className="mb-0">My Company</h4>
                    <small>Company Slogan</small>
                    </div>
                    <div className="float-right">
                    <h3>Statement</h3>
                    <small><strong>Date: </strong></small>
                    <br />
                    <small><strong>Amount: </strong></small>
                    <br />
                    <small><strong>Customer ID: </strong></small>
                    </div>
                </div>
                <div className="clearfix mt-3">
                    <div className="float-left">
                    <h5 className="mb-0 bg-primary px-3 py-1 mb-2 text-white">Bill To</h5>
                    <small><strong>[Name]: </strong></small>
                    <br />
                    <small><strong>[Company name]: </strong></small>
                    <br />
                    <small><strong>[Street Adress]: </strong></small>
                    <br />
                    <small><strong>[Phone number]: </strong></small>
                    </div>
                    <div className="float-right">
                    <h5 className="mb-0 bg-primary px-3 py-1 mb-2 text-white">Account summary</h5>
                    <small><strong>Previous Balance: </strong></small>
                    <br />
                    <small><strong>Credits: </strong></small>
                    <br />
                    <small><strong>New Charges: </strong></small>
                    <br />
                    <u><small><strong>Total Balances: </strong></small></u>
                    <br />
                    <small style={{ fontSize: 12}}>Payment Due date:</small>
                    </div>
                </div>
                <div className="table-responsive mt-3">
                    <table class="table table-bordered">
                    <thead className="table-sm">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            
                <div className="bg-primary pb-4 pt-1 pr-3 my-3">
                    <h6 className="float-right text-white">Account Current balance <span className="mx-4">$</span> 17,000</h6>
                </div>
                <div className="text-center">
                    <h4 className="font-weight-light">Make all checks payable to My Company name</h4>
                    <h5>Thank you for your business</h5>
                    <p className="font-weight-light">Should you have any enquiries concerning this statement, Please contact John Doe on 0-000-000-0000</p>
                    <hr />
                    <p className="font-weight-light">111 Streets, Town/City. Country, St, 0000</p>
                    <p className="font-weight-light">Tel: 0-000-000-0000 Fax: 0-000-000-0000 Email: info@companysite.com Web: www.my-admins.herokuapp.com</p>
                </div>
            </div>
        );
    }
    
};