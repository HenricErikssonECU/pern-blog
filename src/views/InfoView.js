import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { apiEditBlogPost } from "../api";
import EditModal from "../components/EditModal";
import { blogPostDataState, editDataState, modalState, viewState } from "../states";


// *EGEN NOTERING* skicka med blogPost-data till EditModal-komponenten 

function InfoView(props){


    const [editData, setEditData] = useRecoilState(editDataState);
    const [data, setData] = useRecoilState(blogPostDataState);
    const [modalShow, setModalShow] = useRecoilState(modalState);
    const navigate = useNavigate();

    useEffect(() => { 
        setModalShow(false); 
      },[]);

    const deletePost = (blogPost) => {
        props.deleteBlogPost(blogPost);
        navigate('/');
    }

    const editPost = (blogPost) => {
        setEditData(blogPost);
        setModalShow(true);
    }



    return <>
        <h1> InfoView </h1>
        <div>
            <button onClick={() => navigate('/')}>tillbaka</button>
            <div>Id: {data.blogPost.id}</div>
            <div>Title: {data.blogPost.title}</div>
            <div>Description: {data.blogPost.description}</div>
            <div>Created: {data.blogPost.created_date}</div>
        </div>
        <button onClick={() => editPost(data.blogPost)}>Edit modal</button>
        <EditModal />
        <button onClick={() => deletePost(data.blogPost)}>Delete</button>
    </>
}
 

export { InfoView };