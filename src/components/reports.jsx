import React, {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import Report from './common/report';
import { Print } from '@material-ui/icons';

const Reports = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
    return (
        <div className="card card-body border-0">
            <Report ref={componentRef} />
            <div className="container mt-5">
            <button className="btn btn-primary float-right mb-5" onClick={handlePrint}>
                <Print /> &nbsp;
                Print out!
            </button>
            </div>
        </div>
    );
};

export default Reports;