import React, {useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getData} from './redux/actions';
//pages
import Base from './pages/Base';
import Post from './pages/Post';


const GlobalStyle = createGlobalStyle `
  * {
    box-sizing: border-box;
  }

  *:after, *:before {
    box-sizing: inherit;
  }

  p, ul, li, h1, h2, h3, h4 ,h5 ,h6, html, body{
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4,h5, h6{
    font-weight: normal;
  }

  input, textarea, button{
    outline: none;
    border:none;
  }

  body{
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    color: #000000;
    font-weight: 400;
    min-width: 320px;
    overflow-x: hidden;
    background: #ffffff;
    line-height: normal;
  }

  @media (min-width: 1921px) {
  body {
    font-size: 16px;
  }
}
`;

function App(
  {
    getData = () => { },
    posts = [],

  }) {

   useEffect(() => {
    getData();
   },[]); //eslint-disable-line

    return (
        <> 
          < GlobalStyle /> 
          <Switch>
            <Route
                  path='/'
                  exact
                  render={props => <Base {...{...props, content:posts}}/>
                  }
              />
               <Route
                  path='/posts/:id'
                  render={props => <Post {...props} />
                  }
                />
              <Route
                  path='/posts'
                  render={props => <Base {...{...props, content:posts}}/>
                  }
              />
              
            <Route render={() => <h3 style={{textAlign:'center', marginTop:'200px'}}>Not found</h3>}/>
          </Switch>
        </>
    );
}

const STP = state => (
    {
      posts: state.posts,
    }
);

const DTP = dispatch => ({
    getData: () => dispatch(getData()),
})

export default connect(STP, DTP,)(App);
