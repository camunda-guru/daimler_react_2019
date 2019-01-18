import { connect } from 'react-redux';
import { createPost} from '../store/actions'
import {NewRequest} from "../NewRequest/NewRequest";

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => {
            dispatch(createPost(post));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(NewRequest);