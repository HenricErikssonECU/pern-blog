
import './App.css';
import { atom, useRecoilState } from 'recoil';
import { CreateView } from './views/CreateView';
import { InfoView } from './views/InfoView';
import { ListView } from './views/ListView';
import { useEffect } from 'react';
import { apiCreateNewBlogPost, apiDeleteBlogPost, apiGetAllBlogPosts, getAllBlogPosts } from './api';
import { blogListState, viewState } from './states';
import { Route, Routes, useNavigate } from 'react-router-dom';




function App() {

  const [blogList, setBlogList] = useRecoilState(blogListState);
  


  // CREATE
  const createNewBlogPost = (title, description) => {
    apiCreateNewBlogPost(title, description).then(newBlogPost => setBlogList([...blogList, newBlogPost]));
  }

  // DELETE
  const deleteBlogPost = (blogPost) => {
    apiDeleteBlogPost(blogPost.id).then((blogPost) => setBlogList(blogList.filter(x => x.id !== blogPost.id)));
  }




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListView />}/>
        <Route path="/info/:id" element={<InfoView deleteBlogPost={deleteBlogPost}/>}/>
        <Route path="/create" element={<CreateView createNewBlogPost={createNewBlogPost} />}/>
      </Routes>
    </div>
  );
}

export default App;
