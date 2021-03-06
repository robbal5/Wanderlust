import React from 'react';
import LoginFormContainer from '../session_form/login_form_container'
import SignupFormContainer from '../session_form/signup_form_container'
import ReviewFormContainer from '../property_page/review_form_container'
import ReviewEditFormContainer from '../property_page/review_edit_form_container';



class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    stopProp(e) {
        
        e.stopPropagation();
    }

    render() {
        
        if (!this.props.modal) {
            return null
        };
        let component = null;
        switch(this.props.modal) {
            case 'signup':
                component = <SignupFormContainer />
                break;
            case 'login':
                component = <LoginFormContainer />
                break;
            case 'review':
                component = <ReviewFormContainer />
                break;
            case 'review-edit':
                component = <ReviewEditFormContainer reviewId = {this.props.modalData}/>
            
                break;
            default:
                return null;
            
        }
        
        return (
            
            <div className='modal-background' onClick={this.props.closeModal}>
                <div className='modal-child' onClick={this.stopProp}>{component}</div>
            </div>
        )
    }
}

export default Modal;