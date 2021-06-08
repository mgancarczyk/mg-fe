import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/usersActions'
import { getPosts } from '../../actions/postsActions';
import { getPhotos } from '../../actions/photosActions';
import { getComments } from '../../actions/commentsActions';

import { LeftMenu } from '../LeftMenu/LeftMenu';
import { TopNav } from '../TopNav/TopNav';
import { HomePage } from '../HomePage/HomePage';
import { Colors } from '../../styledHelpers/Colors'
import { Entites } from '../Entites/Entities';
import { Ecosystem } from '../Ecosystem/Ecosystem';
import { Workspaces } from '../Workspaces/Workspaces';
import { Profile } from '../Profile/Profile';


const Wrapper = styled.div`
  background-color: ${Colors.mainBackgroundColor};
  min-height: 80vh;
`;
const Content = styled.div`
  min-height: 80vh;
  height: 100%;
  width: 100%;
  min-width: 99vw;
  display: flex;
  flex-direction: row;
  margin-top: 1vh;
`;

type GetUsers = ReturnType<typeof getUsers>
type GetPosts = ReturnType<typeof getPosts>
type GetPhotos = ReturnType<typeof getPhotos>
type GetComments = ReturnType<typeof getComments>

export const MainWrapper: FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      await dispatch<GetPhotos>(getPhotos());
      await dispatch<GetPosts>(getPosts());
      await dispatch<GetUsers>(getUsers());
      await dispatch<GetComments>(getComments());
    }
    fetchData()
      .then(() => {
        setLoading(false);
      })
  }, [])

  return (
    <>
      {
        (loading) ?
          <Wrapper>Loading...</Wrapper> :
          <Wrapper>
            <Router>
              <TopNav />
              <Content>
                <LeftMenu />
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/workspaces" component={Workspaces} />
                  <Route exact path="/ecosystem" component={Ecosystem} />
                  <Route exact path="/entities" component={Entites} />
                  <Route exact path='/profile' component={Profile} />
                </Switch>
              </Content>
            </Router>
          </Wrapper>
      }
    </>
  );
};

