import React from 'react';

const DashboardCard = ({average, title, symbol, color, percentage}) => {
    return (
        <div className="card border-0">
            <div className="card-body pb-0">
                <div className="clearfix">
                    <aside className="float-left">
                        <p style={{ color: '#aca6ad'}}>{title}</p>
                        <h5 className="font-weight-bold" style={{ color: '#6c757d'}}>36, 827</h5>
                    </aside>
                    <aside className="float-right">
                        <div style={{ backgroundColor: '#DCDEFC'}} className="p-2">
                            {symbol}
                        </div>
                    </aside>
                </div>
                <div className="media mt-4">
                    {percentage} <p style={{ color }}>{average} %</p>
                    <div className="media-body pl-3">
                        <span style={{ color: '#aca6ad'}}>Since last month</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default DashboardCard;