import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/reducers/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageCreator()),
        updateNewMessageBody: (body) => dispatch(updateNewMessageBodyCreator(body))
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
