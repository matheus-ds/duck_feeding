import React from 'react';
import './Stats.css'
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function Stats(){
    const [data, setData] = React.useState();
    const [serverRunning, setServerRunning] = React.useState(true);
    
    React.useEffect(() => {
        async function getAllData(){
            try{
                const result = await fetch("/api/feed/all", {
                    method: "GET"
                })
                if (result.status == 200){
                    setData(await result.json())
                }
            } catch (e){
                console.log(`Failed to get: ${e}`);
                setServerRunning(false);
            }
        }
        getAllData();
    },[])
    // ****************  Table Handlers ****************** //
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <h1>Stats</h1>
            {(data !== undefined && (  // Renders table only after successful fetch
                <Card elevation={3}>
                    <TableContainer style={{maxHeight: "400px"}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Food</TableCell>
                                    <TableCell>Time</TableCell>
                                    <TableCell>Location</TableCell>
                                    <TableCell>Number of Ducks</TableCell>
                                    <TableCell>Food Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) =>
                                    <TableRow hover>
                                        <TableCell>{item.food}</TableCell>
                                        <TableCell>{item.time}</TableCell>
                                        <TableCell>{item.location}</TableCell>
                                        <TableCell>{item.number_of_ducks}</TableCell>
                                        <TableCell>{item.food_amount}</TableCell>
                                    </TableRow> 
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={data ? data.length : 0}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                </Card>
            )) || (  // Could not connect to server:
                ! serverRunning && (
                <h3>Unable to connect to server. Try again later.</h3>
            )) || (  // Displayed while fetching data
                <h3>Loading...</h3>
            )}
        </div>
    )
}

export default Stats;
