import { useState } from 'react';
import { useRecoilState } from 'recoil';
import '../css/editModal.css'
import { editDataState, modalState } from '../states';


// *EGEN NOTERING* Läs in blogPost-datan i input-fälten. Lägg till en Save-knapp som sparar den uppdaterade blogPosten i databasen och uppdaterar InfoView med den nya blogPosten

function EditModal(){

    const [editData, setEditData] = useRecoilState(editDataState);
    const [modalShow, setModalShow] = useRecoilState(modalState);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    if (modalShow === false){
        return null;
    }

    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title"> Här ska title ins</h4>
                    <input placeholder={editData.title} onChange={event => setTitle(event.target.value)} />
                </div>
                <div className="modal-body">
                    <h4>Här ska discription in</h4>
                    <input placeholder={editData.description} onChange={event => setDescription(event.target.value)} />
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={() => setModalShow(false)}>Close</button>
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default EditModal;

