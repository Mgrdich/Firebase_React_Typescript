import React from 'react';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import {firebaseMatches} from "../../../Firebase";
import AdminLayout from "../../../HOC/AdminLayout";
import {useFetchFirebase} from "../../../reusableHooks/useFetchFirebase";

function renderTableBody(element: Array<any>): Array<JSX.Element> | JSX.Element { //TODO make this general
    if (element.length === 0) {
        return (
            <>
            </>
        )
    }

    return element.map((element, index) => {
        return (
            <TableRow key={index}>
                <TableCell>
                    {element.date}
                </TableCell>
                <TableCell>
                    <Link to={`admin_mathces/edit_match/${element.id}`}>
                        {element.away} <strong>-</strong> {element.local}
                    </Link>
                </TableCell>
                <TableCell>
                    {element.resultAway} <strong>-</strong> {element.resultLocal}
                </TableCell>
                <TableCell>
                    {
                        element.final === 'Yes' ?
                            <span className="matches_tag_red">Final</span> :
                            <span className="matches_tag_green">Not Played yet</span>
                    }
                </TableCell>
            </TableRow>
        );
    })
}

const AdminMatches = () => {
    const data = useFetchFirebase(firebaseMatches);

    return (
        <AdminLayout>
            <>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Match</TableCell>
                            <TableCell>Result</TableCell>
                            <TableCell>Final</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {renderTableBody(data.data)}
                    </TableBody>


                </Table>
                <div className="admin_progress">
                    {
                        data.isLoading ? <CircularProgress thickness={5} style={{color: '#98c5e9',margin:'0 auto'}} /> : null
                    }
                </div>


            </>
        </AdminLayout>

    );
};

export default AdminMatches;