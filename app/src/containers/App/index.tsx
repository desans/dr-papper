import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Components;
import MenuBar from "../../components/MenuBar";
import NavigationBar from "../../components/NavigationBar";
import TagBar from '../../components/TagBar';

// Containers;
import Board, { predicateCompose }  from '../Board';

import * as ROUTES from "../../constants/routes";
import SignInPage from '../../components/Auth/SignIn';
import { SignUpPage } from 'src/components/Auth/SignUp';
import HomePage from '../Home';
import Search from '../../components/Search'
import { withTags } from 'src/components/Tag';
import { ReviewPredicate } from "../Board";

const App = () => (
  <HashRouter>
    <NavigationBar />
    <Container className="full-width">
      <Row>
        <Col sm="2">
          <MenuBar />
        </Col>
        <Col sm="10">
          <TagBar />
          <Switch>
            <Route exact={true} path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SEARCH} component ={Search} />
            <Route
              path={ROUTES.READ}
              render={(props) =>
                <Board
                  {...props}
                  boardType="Read"
                  boardPredicate={predicateCompose(
                    ReviewPredicate.Read,
                    ReviewPredicate.Alive)}
                />}
            />
            <Route
              path={ROUTES.TO_READ}
              render={(props) =>
                <Board
                  {...props}
                  boardType="ToRead"
                  boardPredicate={predicateCompose(
                    ReviewPredicate.ToRead,
                    ReviewPredicate.Alive)}
                />}
            />
            <Route
              path={ROUTES.PINNED}
              render={(props) =>
                <Board
                  {...props}
                  boardType="Pinned"
                  boardPredicate={predicateCompose(
                    ReviewPredicate.Pinned,
                    ReviewPredicate.Alive)}
                />}
            />
            <Route
              path={ROUTES.DELETED}
              render={(props) => <Board {...props} boardType="Deleted" boardPredicate={ReviewPredicate.Deleted} />}
            />
          </Switch>
        </Col>
      </Row>
    </Container>
  </HashRouter>
);

export default withTags(App);