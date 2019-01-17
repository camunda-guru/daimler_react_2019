import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
const modal=({show,hide})=>(
    <Dialog
        open={show}
        onClose={hide}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">User Form</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Add User
            </DialogContentText>

        </DialogContent>
        <DialogActions>
            <Button onClick={hide} color="primary">
                Close
            </Button>

        </DialogActions>
    </Dialog>
);

export default modal