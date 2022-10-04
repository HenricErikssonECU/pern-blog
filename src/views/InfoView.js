import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { apiEditBlogPost } from "../api";
import EditModal from "../components/EditModal";
import { blogPostDataState, modalState, viewState } from "../states";




function InfoView(props){


    const [data, setData] = useRecoilState(blogPostDataState);
    const [modalShow, setModalShow] = useRecoilState(modalState);
    const navigate = useNavigate();

    useEffect(() => { // Hämtar datan direkt vid rendering
        setModalShow(false); 
      },[]);

    const deletePost = (blogPost) => {
        props.deleteBlogPost(blogPost);
        navigate('/');
    }

    const editPost = (blogPost) => {
        apiEditBlogPost(blogPost.id, blogPost.title, blogPost.description).then()
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
        <button onClick={() => setModalShow(true)}>Edit modal</button>
        <EditModal />
        <button onClick={() => deletePost(data.blogPost)}>Delete</button>
    </>
}
 

export { InfoView };