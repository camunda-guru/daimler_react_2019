import React,{Component} from 'react'
import axios from 'axios'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import OpenIcon from '@material-ui/icons/OpenInNew'
import Modal from '../Modal/Modal'
import { withStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit'
import classes from './Dashboard.css'
/*
const dashboard=()=>(
    <p>Loading Dash Board .....</p>
)

export default dashboard*/
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 18
    },
    body: {
        fontSize: 18,
    },
}))(TableCell);

export class Dashboard extends Component
{
    state={
        users:[],
        show:false,
        user:{}
    }
 // Event
    showDialog=(user)=> {
        console.log(user);
        this.setState({ show: true });
        if(user!=null)
        {
            this.setState({ user: user });

        }
    }
    closeDialog=()=> {
        //console.log(user);
        this.setState({ show: false });

    }

    constructor(props)
    {
        super(props)
        console.log('[Dashboard.js] called from constructor' );
    }

    componentWillMount()
    {
        console.log('[Dashboard.js] called from component will mount' );
    }

    componentDidMount()
    {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response=>{
          //  console.log(response);
            this.setState({users:response.data})
                console.log(this.state.users);
        })

        console.log('[Dashboard.js] called from component did mount' );

    }
    render()
    {
        console.log('[Dashboard.js] render invoked');
        return(
            <div className={classes.Table} >
                <Modal show={this.state.show} hide={this.closeDialog}></Modal>

                <Button onClick={this.showDialog} color="primary">Add User Dialog
                    <OpenIcon></OpenIcon>
                </Button>


        <Table >
            <TableHead >
                <TableRow >
                    <CustomTableCell>
                        Id
                    </CustomTableCell>
                    <CustomTableCell>
                        Name
                    </CustomTableCell>
                    <CustomTableCell>
                        Email
                    </CustomTableCell>
                    <CustomTableCell>
                        Edit
                    </CustomTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    this.state.users.map(user=>(
                        <TableRow key={user.id} className={classes.TableRow}>
                            <CustomTableCell>
                                {user.id}
                            </CustomTableCell>
                            <CustomTableCell>
                                {user.name}
                            </CustomTableCell>
                            <CustomTableCell>
                                {user.email}
                            </CustomTableCell>
                            <CustomTableCell>
                                <Button onClick={()=>{this.showDialog(user)}}>
                                  <EditIcon/>
                                </Button>
                            </CustomTableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
            </div>
        )
    }

}