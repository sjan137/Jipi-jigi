import React from 'react';
import Table from 'react-bootstrap/Table';

export default function KoreaSalesTable() {
    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th></th>
            <th>coef</th>
            <th>t</th>
            <th>P&gt;|t|</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>단계</td>
            <td>-6.492e+08</td>
            <td>-7.724</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>5.141e+05</td>
            <td>2.457</td>
            <td>0.014</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 1.965e+09</td>
            <td>R-squared: 0.093</td>
            <td>F-statistic: 53.08</td>
            <td>Prob: 1.15e-22</td>
            </tr>
        </tbody>
        </Table>
    )
}