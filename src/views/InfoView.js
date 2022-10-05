import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { apiGetSpecificBlogPost } from "../api";
import EditModal from "../components/EditModal";
import { blogPostDataState, modalState } from "../states";


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
        <h1> InfoView </h1>
        <div>
            <button onClick={() => navigate('/')}>tillbaka</button>
            <div>Id: {data.id}</div>
            <div>Title: {data.title}</div>
            <div>Description: {data.description}</div>
            <div>Created: {data.created_date}</div>
        </div>
        <button onClick={editPost}>Edit</button>
        <EditModal blogPost={data} />
        <button onClick={() => deletePost(data)}>Delete</button>
    </>
}
 

export { InfoView };