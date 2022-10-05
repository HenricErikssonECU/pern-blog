import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { apiEditBlogPost } from '../api';
import '../css/editModal.css'
import { modalState } from '../states';


// *EGEN NOTERING* Läs in blogPost-datan i input-fälten. Lägg till en Save-knapp som sparar den uppdaterade blogPosten i databasen och uppdaterar InfoView med den nya blogPosten

function EditModal({ blogPost }){

    const [modalShow, setModalShow] = useRecoilState(modalState);
    const [title, setTitle] = useState(blogPost.title);
    const [description, setDescription] = useState(blogPost.description);

    const navigate = useNavigate();


    if (modalShow === false){
        return null;
    }

    const closeButton = () => {
        setTitle(blogPost.title);
        setDescription(blogPost.description);
        setModalShow(false);
    }

    const saveButton = () => {
        apiEditBlogPost(blogPost.id, title, description).then(() => navigate('/'));
        //navigate('/');
    }


    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title"> Här ska title ins</h4>
                    <input value={title} onChange={event => setTitle(event.target.value)} />
                </div>
                <div className="modal-body">
                    <h4>Här ska discription in</h4>
                    <input value={description} onChange={event => setDescription(event.target.value)} />
                </div>
                <div className="modal-footer">
                    <button className="close-button" onClick={closeButton}>Close</button>
                    <button className="save-button" onClick={saveButton}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default EditModal;

