import React, {useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getData, getSinglePost} from './redux/actions';
//pages
import Base from './pages/Base';


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

  input, textarea{
    outline: none;
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
    getSinglePost = () => { },
    posts = [],
    singlePost ={}

  }) {

   useEffect(() => {
    getData();
    getSinglePost(3);
   },[]); //eslint-disable-line

   console.log('singlePost',singlePost);

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
      singlePost:state.singlePost
    }
);

const DTP = dispatch => ({
    getData: () => dispatch(getData()),
    getSinglePost : (id) => dispatch(getSinglePost(id))});

export default connect(STP, DTP,)(App);
