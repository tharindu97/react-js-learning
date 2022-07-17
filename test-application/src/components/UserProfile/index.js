import PropTypes from 'prop-types';


function UserProfile(props) {
    const handelOnClick = () => {
        props.onUpdatedClicked("Hello", 25);
    }
    return (
        <div> 
            <h1>{props.name}</h1>
            <h3>{props.title}</h3>
            <button onClick={handelOnClick}>Update</button>
        </div>
    )
}


//  prop-types - package
UserProfile.prototype = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string,
    address:  PropTypes.shape({
        zipCode: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
    }).isRequired,
    onUpdatedClicked: PropTypes.func,
}

export default UserProfile;