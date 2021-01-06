import React, {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import Report from './common/report';
import { Print } from '@material-ui/icons';

const DistributionsReports = ({tbs}) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    console.log(tbs);
    return (
        <div className="card border-0 card-body">
            <Report
                title="Distributions Report"
                tbs={
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
                } 
                ref={componentRef} 
            />
            <div className="container mt-5">
            <button className="btn btn-primary float-right mb-5" onClick={handlePrint}>
                <Print /> &nbsp;
                Print out!
            </button>
            </div>
        </div>
    );
};

export default DistributionsReports;