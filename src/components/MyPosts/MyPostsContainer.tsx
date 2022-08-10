import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profileReducer
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        sendPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        },
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer