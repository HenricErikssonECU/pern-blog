import '../css/listView.css';
import { useRecoilState, useSetRecoilState } from "recoil";
import { blogListState, blogPostDataState } from '../states';
import { useNavigate } from 'react-router-dom';
import { apiGetAllBlogPosts } from '../api';
import { useEffect } from 'react';




function ListView() {

    const [blogList, setBlogList] = useRecoilState(blogListState);
  
    useEffect(() => { 
      apiGetAllBlogPosts().then(setBlogList); 
    },[setBlogList]);
    
    const setData = useSetRecoilState(blogPostDataState);
    
    const navigate = useNavigate();
    
    const mappingFunction = (blogPost) => {
        const handleClick = () => {
            setData(blogPost);
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


