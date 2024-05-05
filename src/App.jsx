import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from './slices/post.slice';

function App() {

  const {posts, post} = useSelector((state) => state.posts)

  console.log(posts)

  const dispatch = useDispatch()

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');


    dispatch(setPosts(await response.json()))
  }


  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
