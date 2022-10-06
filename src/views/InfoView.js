import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { apiDeleteBlogPost, apiGetSpecificBlogPost } from "../api";
import EditModal from "../components/EditModal";
import { blogListState, blogPostState, modalState } from "../states";
import '../css/infoView.css'




function InfoView(){

    let { id } = useParams(); // id't på den specifika bloggpost vi är inne på (för att kunna skicka med id't till 'apiGetSpecificBlogPost'-funktionen)

    //useRecoilStates och useNavigate deklaration
    const [blogList, setBlogList] = useRecoilState(blogListState);
    const [data, setData] = useRecoilState(blogPostState);
    const setModalShow = useSetRecoilState(modalState);
    const navigate = useNavigate();



    useEffect(() => {   // hämtar data om den specifika blogposten som vi är inna på, genom att skicka en get-query till databasen med bloggpostens id som argument
                        // i funktionen 'apiGetSpecificBlogPost', sedan sätts 'data' till responsen.
                        // värdet i 'modalState' sätts till false genom 'setModalShow' för att edit-modalen inte ska komma vara uppe när man går in på en bloggpost (om
                        // man har råkat gå ur InfoView'n utan att stänga ner modalen genom att trycka på 'close'-knappen)
        apiGetSpecificBlogPost(id).then((x) => setData(x));
        setModalShow(false); 
      },[id, setData, setModalShow]);



    const deletePost = (blogPost) => {  // delete-knappen kör funktionen deletePost vid onClick och den specifika bloggposten vi är inne på (ligger i 'data') skickas med som argument.
                                        // apiDeleteBlogPost tar bort den specifika blogposten från databasen baserat på bloggpostens id som skickas med som argument.
                                        // sedan körs 'setBlogList' där vi uppdaterar värdet på blogList så alla bloggposter _utom_ den borttagna bloggposten ska visas,
                                        // och det gör vi genom att filtrera blogList och släppa igenom alla bloggposter som inte har ett id som matchar den bloggpostens id som vi fick tillbaka i responsen.
        apiDeleteBlogPost(blogPost.id).then((blogPost) => setBlogList(blogList.filter(x => x.id !== blogPost.id)));
        navigate('/'); // navigerar tillbaka till 'ListView' när blogglistan är uppdaterad
    }

    const editPost = () => { // öppnar 'EditModal'-modalen genom att sätta 'modalState' till true, som görs med 'setModalShow' 
        setModalShow(true);
    }


    if(!data){ // om datan inte hinner laddas in vid refresh (felet har kunnat återskapas genom att ta bort det här if-statementet)
        return ('Error loading blog post in InfoView');
    }



    return <>
        <div className="header"> InfoView </div>
        <p className="view-btn" onClick={() => navigate('/')}>tillbaka</p>
        <div className="view-container">
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