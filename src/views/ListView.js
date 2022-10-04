import '../css/listView.css';
import { useRecoilValue, useRecoilState } from "recoil";
import { blogListState, blogPostDataState, viewState } from '../states';
import { useNavigate } from 'react-router-dom';
import { apiGetAllBlogPosts } from '../api';
import { useEffect } from 'react';




function ListView() {

    const [blogList, setBlogList] = useRecoilState(blogListState);
  
    useEffect(() => { // Hämtar datan direkt vid rendering
      apiGetAllBlogPosts().then(setBlogList); 
    },[]);
    
    const [data, setData] = useRecoilState(blogPostDataState);
    
    const navigate = useNavigate();
    
    const mappingFunction = (blogPost) => {
        const handleClick = () => {
            setData({
                blogPost
            });
            navigate('/info/' + blogPost.id)
        }

        return  <div key={blogPost.id} className="blog-post-container">
                    <div className="blog-post" onClick={handleClick}>
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
                </div>
    }







    return <>
        <h1>List of blog posts</h1>
        <button onClick={() => navigate('/create')}>CREATE NEW BLOG POST</button>
        {blogList.map(mappingFunction)}        
        </>
        
}

export { ListView };


