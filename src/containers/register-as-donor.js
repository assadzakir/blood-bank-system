/**
 * Created by Anonmous on 3/2/2017.
 */
import React, { Component } from 'react';
import * as MUI from 'material-ui';
import { connect } from 'react-redux'
import Person from 'material-ui/svg-icons/social/person';
import RaisedButton from 'material-ui/RaisedButton';
import firebase, {firebaseAuth, firebaseDb} from '../config/firebase';



class RegistAsDonor extends Component {


    //user-default
    render() {

        function updateUser(){
           
            firebaseDb.ref().child(`users/${this.props.auth.user.uid}`)
                .update({
                    role:'donor'
                }).then(function (data) {
                alert('Thank you for become a donor')
            })
        }

        return (
            <div style={styles.donerDetailContainer}>
                <MUI.Card>
                    <MUI.CardHeader
                        title="Do you want to become a donor ? Click Yes If You want"
                    />
                    <MUI.CardText >
                        <RaisedButton onClick={updateUser.bind(this)} secondary={true} label="Yes" fullWidth={true} />
                    </MUI.CardText>
                </MUI.Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(RegistAsDonor);



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