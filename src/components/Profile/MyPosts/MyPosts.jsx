import React from 'react';
import classes from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post'
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../Utils/VL/Validators';
import { Textarea } from '../../../Utils/FormControl/From';

const maxLength15 = maxLengthCreator(10);

const MyPosts = (props) => {
    
    let PostElements=
    props.posts.map(state=><Post message= {state.message} likesCount={state.likesCount} />)

    let newPostElement =React.createRef();/*создали ссылку*/
    
    let addPost = (values) =>{
        props.addPost(values.newPostText);
    }
    
    /*let onPostChange =()=> {
        let text = newPostElement.current.value;
        props.onPostChange(text);
        
    }
*/    
    return (
        <div>
            <h3>Mine Post</h3>
            <MyPostFormRedux onSubmit= {addPost}/>
            <div className= {classes.My}>
                {PostElements}
            </div>  
    </div>

)
}

const myPostForm=(props)=>{
return(
<form onSubmit= {props.handleSubmit}>
    <div>
        <Field component={Textarea} name={"newPostText"} validate={[required, maxLength15]}/>
    </div>
    <div>
    <button >submit</button>
    </div>
</form>
)
}

const MyPostFormRedux= reduxForm({form: 'PostsForm'
}) (myPostForm)
export default MyPosts;