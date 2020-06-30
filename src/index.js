import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GloblaStyles from './styles/GlobalStyles'
import ToDoPage from './pages/ToDoPage';
import PostPage from './pages/PostPage';
import AlbunsPage from './pages/AlbumsPage';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
    <GloblaStyles />   
      <Switch>        
        <Route path="/" exact={true} component={App}/>
        <Route path="/posts" component={PostPage}/>
        <Route path="/albuns" component={AlbunsPage}/>
        <Route path="/toDos" component={ToDoPage}/>       
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

