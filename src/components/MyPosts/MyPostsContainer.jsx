import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostTextActionCreator} from "../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendPost: () => {
            dispatch(addPostActionCreator());
        },
        updatePost: (text) => {
            dispatch(updatePostTextActionCreator(text));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer