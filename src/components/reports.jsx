import React, { Component } from 'react';
import { getReports } from '../services/reportService';

class Reports extends Component {
    state = {  }

    async componentDidMount() {
        await getReports();
    }
    

    render() { 
        return ( 
            <div>
                <button className="btn btn-success btn-sm">Get Reports</button>
            </div>
        );
    }
}
 
export default Reports;