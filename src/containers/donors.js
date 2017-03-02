/**
 * Created by Anonmous on 2/28/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { authActions,signOut,fetchDonorsFromServer } from '../store/actions/auth-action';



 class Donors extends Component {

     showUsersList(users) {
         if(!users) {
             return [];
         }
         console.log(users);
         return Object.keys(users).reduce(
             (list, uid) => {
                 return [
                     ...list,
                     {
                         uid,
                         ...users[uid]
                     }
                 ];
             }, []);

     }

    render() {
        return (
            <div>
                {
                    this.props.donors.isloaded ? this.showUsersList(this.props.donors.donorList).map((user,id) =>

                            <div style={{width: '300px', marginLeft: '5px', marginRight: '30px'}} key={id}>

                                {user.firstName}
                            </div>
                        ) : ''
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { donors: state.donorReducer };
};
export default connect(mapStateToProps)(Donors);