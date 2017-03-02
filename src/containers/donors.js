/**
 * Created by Anonmous on 2/28/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { authActions,signOut,fetchDonorsFromServer } from '../store/actions/auth-action';
import * as MUI from 'material-ui';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Person from 'material-ui/svg-icons/social/person';
import { browserHistory } from 'react-router';



 class Donors extends Component {

     handleDrawerToggle = (id) =>  browserHistory.push('/donors/'+id);

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
            <MUI.List >
                <MUI.Subheader style={styles.subHeader} inset={false}>Donor List</MUI.Subheader>
                {
                    this.props.donors.isloaded ? this.showUsersList(this.props.donors.donorList).map((user,id) =>


                        <div style={styles.donerListContainer} key={id}>

                                <MUI.ListItem
                                    leftAvatar={<MUI.Avatar icon={<Person />} />}
                                    rightIcon={<ActionInfo />}
                                    primaryText={user.firstName}
                                    secondaryText={user.bloodGroup}
                                    onTouchTap={this.handleDrawerToggle.bind(this,user.uid)}
                                />
                                <MUI.Divider />


                        </div>
                        ) : ''
                }

            </MUI.List>
        );
    }
}

const mapStateToProps = (state) => {
    return { donors: state.donorReducer };
};
export default connect(mapStateToProps)(Donors);

const styles = {
    donerListContainer: {
        //marginLeft: 150,
        //marginRight: 150,
        border: 'solid 1px #d9d9d9',
    },
    clear: {
        clear: 'both'
    },

    container: {
        border: 'solid 1px #d9d9d9',

        overflow: 'hidden'
    },

    bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -10,
        width: 360
    },
    subHeader :{
        fontWeight:"Bold"
    }
};