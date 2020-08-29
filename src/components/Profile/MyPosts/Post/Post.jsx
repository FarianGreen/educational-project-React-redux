import React from 'react';
import classes from './Post.module.css'


const Post = (props) => {
    
    return (
        <div className= {classes.post}>
            Post!!!
           <div> {props.message}</div>
            <div>Like {props.likesCount}</div>
            
          
        </div>

       
    )
}
export default Post;