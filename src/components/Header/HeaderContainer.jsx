import React from 'react';
import Header from './Header';
import { getAuthUserData } from '../../redux/reducers/authReducer';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />;
    }
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);
