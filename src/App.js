
import './App.css';
import { useRecoilState } from 'recoil';
import { CreateView } from './views/CreateView';
import { InfoView } from './views/InfoView';
import { ListView } from './views/ListView';
import { apiCreateNewBlogPost, apiDeleteBlogPost } from './api';
import { blogListState } from './states';
import { Route, Routes } from 'react-router-dom';




function App() {

  // *EGEN NOTERING* Se vad vi behöver ha kvar på denna nivån och vad vi kan flytta ner

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
