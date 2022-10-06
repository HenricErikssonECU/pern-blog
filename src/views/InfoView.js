import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { apiGetSpecificBlogPost } from "../api";
import EditModal from "../components/EditModal";
import { blogPostDataState, modalState } from "../states";
import '../css/infoView.css'


// *EGEN NOTERING* skicka med blogPost-data till EditModal-komponenten 

function InfoView(props){

    let { id } = useParams();

    const [data, setData] = useRecoilState(blogPostDataState);
    const setModalShow = useSetRecoilState(modalState);
    const navigate = useNavigate();



    useEffect(() => { 
        apiGetSpecificBlogPost(id).then((data) => setData(data));
        setModalShow(false); 
      },[id, setData, setModalShow]);

      console.log(data);

    const deletePost = (blogPost) => {
        props.deleteBlogPost(blogPost);
        navigate('/');
    }

    const editPost = () => {
        setModalShow(true);
    }


    if(data === null){
        return <div>loading</div>
    }
    return <>
        <div className="header"> InfoView </div>
            <p className="view-btn" onClick={() => navigate('/')}>tillbaka</p>
        <div className="view-container">
            {/* <div className="view-id">Id: {data.id}</div> */}
            <div className="view-title">
                <h3>{data.title}</h3>
            </div>
            <div className="view-description">
                <p>{data.description}</p>
            </div>
            <div className="view-created-date">Created: {data.created_date}</div>
        </div>
        <div className="btn-container">
        <button className="edit-btn" onClick={editPost}>Edit</button>
        <EditModal blogPost={data} />
        <button className="delete-btn" onClick={() => deletePost(data)}>Delete</button>
        </div>
    </>
}
 

export { InfoView };