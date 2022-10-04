import { useState } from "react";
import { useRecoilState } from "recoil";
import { viewState } from "../states";

function CreateView(props){

    const [view, setView] = useRecoilState(viewState);
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('')


    const create = () => {
        props.createNewBlogPost(title, description);
        //setView('list');
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