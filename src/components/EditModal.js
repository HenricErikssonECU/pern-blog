import { useRecoilState } from 'recoil';
import '../css/editModal.css'
import { blogPostDataState, modalState } from '../states';

function EditModal(){

    const [data, setData] = useRecoilState(blogPostDataState);
    const [modalShow, setModalShow] = useRecoilState(modalState);

    if (modalShow === false){
        return null;
    }

    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title"> Här ska title in och sedan modifieras</h4>
                </div>
                <div className="modal-body">
                    Här ska discription in och sedan modifieras
                    
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={() => setModalShow(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default EditModal;

