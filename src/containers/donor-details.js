/**
 * Created by Anonmous on 3/2/2017.
 */
import React, { Component } from 'react';
import * as MUI from 'material-ui';
import { connect } from 'react-redux'
import Person from 'material-ui/svg-icons/social/person';



class DonorDetail extends Component {
    //user-default
    render() {

       var donarDetails = this.props.donors.donorDetails;
        console.log(donarDetails);

        return (
            <div style={styles.donerDetailContainer}>
                <MUI.Card>
                    <MUI.CardHeader
                        title={donarDetails.firstName}
                        subtitle={donarDetails.bloodGroup}
                        avatar={<MUI.Avatar icon={<Person />}/>}
                    />
                    <MUI.CardText >
                        <div>Contatct No. : {donarDetails.number}</div>
                        <div>First Name : {donarDetails.firstName}</div>
                        <div>Last Name :{donarDetails.lastName}</div>
                        <div>Email :{donarDetails.email}</div>
                        <div>Phone Number :{donarDetails.number}</div>
                    </MUI.CardText>
                </MUI.Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { donors: state.donorDetailsReducer };
};

export default connect(mapStateToProps)(DonorDetail);



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