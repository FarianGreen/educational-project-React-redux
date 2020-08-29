import React from 'react';
import {addPostActionCreator,updateNewPostActionCreator} from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapStateToProps =(state)=> {
    return{
        posts: state.profilePage.PostMessage,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps =(dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch (addPostActionCreator(newPostText));
        },
       /* onPostChange: (text) =>{
            dispatch(updateNewPostActionCreator(text));
        }*/
    }
}

const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps) (MyPosts)

export default MyPostsContainer;