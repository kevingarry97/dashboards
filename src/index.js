import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useReactToPrint } from 'react-to-print';
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// export class ComponentToPrint extends React.Component {
//   render() {
//     return (
//       <table>
//         <thead>
//           <th>column 1</th>
//           <th>column 2</th>
//           <th>column 3</th>
//         </thead>
//         <tbody>
//           <tr>
//             <td>data 1</td>
//             <td>data 2</td>
//             <td>data 3</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   }
// }

// const Example = () => {
//   const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   return (
//     <div>
//       <ComponentToPrint ref={componentRef} />
//       <button onClick={handlePrint}>Print this out!</button>
//     </div>
//   );
// };

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
