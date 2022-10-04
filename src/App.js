
import './App.css';
import { atom, useRecoilState } from 'recoil';
import { CreateView } from './views/CreateView';
import { InfoView } from './views/InfoView';
import { ListView } from './views/ListView';
import { useEffect } from 'react';
import { apiCreateNewBlogPost, getAllBlogPosts } from './api';
import { blogListState, viewState } from './states';




function App() {

  const [view, setView] = useRecoilState(viewState);
  const [blogList, setBlogList] = useRecoilState(blogListState);
  
  useEffect(() => { // Hämtar datan direkt vid rendering
    getAllBlogPosts().then(setBlogList); 
  },[]);


  
  const createNewBlogPost = (title, description) => {
    apiCreateNewBlogPost(title, description).then(newBlogPost => setBlogList([...blogList, newBlogPost]));
  }

  let component;
  if (view === 'list') {
    component = <ListView />
  } else if (view === 'info') {
    component = <InfoView />
  } else if (view === 'create') {
    component = <CreateView
    createNewBlogPost={createNewBlogPost} 
    />
  }




  return (
    <div className='App'>
      {component}
    </div>
  );
}

export default App;
