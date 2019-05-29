import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrimaryHeader from '../common/PrimaryHeader';
import PrimaryFooter from '../common/PrimaryFooter';
import HomePage from '../pages/home/HomePage';
import PresentationsContainer from '../pages/presentations/PresentationsContainer';
import DetailsContainer from '../pages/details/DetailsContainer';
import ContactPage from '../pages/contact/ContactPage';
import HotTopicsPage from '../pages/hotTopics/HotTopicsPage';
import ExploreTopicsPage from '../pages/exploreTopics/ExploreTopicsPage';
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

class PrimaryLayout extends Component {
  
  render() {
    return (
      <Route
        render={({ location }) => (
          <div className="primary-layout">
            <PrimaryHeader amount={3}/>
            <main>
              <PoseGroup>
                <RouteContainer key={location.key}>
                  <Switch location={location}>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/home" component={HomePage} key="home" />
                    <Route path="/presentations" component={PresentationsContainer} key="presentations" />
                    <Route path="/contact" component={ContactPage} key="contact"/>
                    <Route path="/hottopics" component={HotTopicsPage} key="hottopics"/>
                    <Route path="/exploretopics" component={ExploreTopicsPage} key="exploretopics"/>
                    <Route path="/details/:id" component={DetailsContainer} key="details"/>
                    <Redirect to="/" />
                  </Switch>
                </RouteContainer>
              </PoseGroup>
            </main>
            <PrimaryFooter />
          </div>
        )}
      />
    );
    
  }
}

export default PrimaryLayout;