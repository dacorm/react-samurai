import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profileReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer