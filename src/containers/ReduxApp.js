import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';



//this is to provider only
import Login from './Login';

function mapStateToProps(state) {
    const { loading } = state;
    return {
        loading
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ReduxApp;