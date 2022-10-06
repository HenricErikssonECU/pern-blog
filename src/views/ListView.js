import '../css/listView.css';
import { useRecoilState, useSetRecoilState } from "recoil";
import { blogListState, blogPostState } from '../states';
import { useNavigate } from 'react-router-dom';
import { apiGetAllBlogPosts } from '../api';
import { useEffect } from 'react';




function ListView() {

    // useRecoilStates och useNavigate deklaration
    const [blogList, setBlogList] = useRecoilState(blogListState); // värdet i atomen 'blogListState' uppdaterar värdet i 'blogList' (samt alla andra Recoil-states som är kopplade till samma atom) 
                                                                   // och 'setBlogList' uppdaterar värdet i 'blogListState' (samt alla andra Recoil-states som är kopplade till samma atom)
    const setData = useSetRecoilState(blogPostState); // setData sätter värdet på 'blogPostState'
    const navigate = useNavigate(); // för att smidigt kunna navigera till olika routes
  
    
    useEffect(() => { // useEffect kör 'apiGetBlogPosts'-funktionen som hämtar alla bloggposter som finns i databasen och uppdaterar 'blogListState' med respons-datan direkt efter rendering.
      apiGetAllBlogPosts().then(setBlogList); 
    },[setBlogList]);
     


    
    const handleClick = (blogPost) => {
        setData(blogPost);
        navigate('/info/' + blogPost.id) //navigerar till 'info/(denSpecifikaBlogPostensID)
    }

    /*
    "blogList.map(mappingFunction)" mappar ut en array av bloggposter där varje blogpost 
    består av en div som i sin tur innehåller div'ar med h- eller p-element där varje bloggposts 
    title, description och created date visas
    */

    const mappingFunction = (blogPost) => {

        return  <div key={blogPost.id} className="blog-post-container" onClick={() => handleClick(blogPost)}>
                    <div className="blog-title">
                        <h3>{blogPost.title}</h3>
                    </div>
                    <div className="blog-description">
                        <p>{blogPost.description}</p>
                    </div>
                    <div className="blog-created-date">
                        <p>Created: {blogPost.created_date}</p>
                    </div>
                </div>
    }



    return <>
        <div className='header'>List of blog posts</div>
        <button className='create-btn' onClick={() => navigate('/create')}>CREATE NEW BLOG POST</button>
        {blogList.map(mappingFunction)}       
        </>
        
}

export { ListView };


