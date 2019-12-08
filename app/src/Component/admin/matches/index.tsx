import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import {firebaseMatches} from "../../../Firebase";
import {firebaseLooper} from "../../../utilities/funcions";
import AdminLayout from "../../../HOC/AdminLayout";

const AdminMatches = () => {
    const [loading,setLoading] = useState<boolean>(false);
    const [mathces,setMatches] = useState<Array<any>>([]);
    useEffect(()=>{ //TODO in the custom hook do it with the if condition if there is the error for the []
        setLoading(true);
        firebaseMatches.once('value').then(snapshot=>{
            const matches = firebaseLooper(snapshot.val());
            setMatches(matches);
            setLoading(false);
        });
    },[]);

    console.log("hello");
    console.log(mathces,loading);
    return (
        <AdminLayout>
            <div>
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
                        </TableBody>
                    </Table>
                </>
                <div className="admin_progress">
                </div>
            </div>
        </AdminLayout>

    );
};

export default AdminMatches;