import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { viewState } from "../states";

function CreateView(props){

    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('')
    const navigate = useNavigate();


    const create = () => {
        props.createNewBlogPost(title, description);
        navigate('/');
    }


    return <>
        <h1>Create blog post</h1>
        <form>
            <input placeholder="Title..." onChange={event => setTitle(event.target.value)} />
            <input placeholder="Message..." onChange={event => setDescription(event.target.value)} />
            <button onClick={create} type="submit">Save</button>
        </form>
    </>
}

export { CreateView };