import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { apiCreateNewBlogPost } from "../api";
import { blogListState } from "../states";


function CreateView(){

    // useRecoilStates, useState och useNavigate deklaration (useState används för att uppdatera 'title' och 'description' till det värdet som står i input/textarea-fälten via 'onChange')
    const [blogList, setBlogList] = useRecoilState(blogListState);
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('')
    const navigate = useNavigate();




    const create = () => {  // save-knappen kör funktionen create vid onClick.
                            // apiCreateNewBlogPost tar tar in 'title' och 'description' som argument och lägger till den nya bloggposten i databasen.
                            // sedan körs 'setBlogList' där vi tar alla existerande värden i blogList och lägger till bloggposten som vi fick i responsen,
        apiCreateNewBlogPost(title, description).then(newBlogPost => setBlogList([...blogList, newBlogPost]));
        navigate('/'); // navigerar tillbaka till 'ListView' när blogglistan är uppdaterad
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