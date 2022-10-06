import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateView(props){

    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('')
    const navigate = useNavigate();


    const create = () => {
        props.createNewBlogPost(title, description);
        navigate('/');
    }


    return <>
        <div className="header">Create blog post</div>
        <p className="view-btn" onClick={() => navigate('/')}>tillbaka</p>
        <form>
        <div className="modal-header">
                    <h4 className="modal-title"> Title</h4>
                    <input onChange={event => setTitle(event.target.value)} />
                </div>
                <div className="modal-body">
                    <h4>Description</h4>
                    <textarea className='input-desc' rows={8} cols="50" onChange={event => setDescription(event.target.value)} /> 
                </div>
                <button className="save-button" onClick={create}>Save</button>
        </form>
    </>

    
}

export { CreateView };