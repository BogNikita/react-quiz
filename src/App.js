import Loyout from './hoc/Loyout/Loyout';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import Auth from './containers/Auth/Auth';
import QuizList from './containers/QuizList/QuizList';
import { connect } from 'react-redux';
import Logout from './components/Logout/Logout';
import { useEffect } from 'react';
import { autoLogin } from './store/actions/auth';


function App(props) {

  useEffect(() => {
    props.autoLogin()
  })

  let routes = (
    <Switch>
      <Route path='/auth' component={Auth}/>
      <Route path='/quiz/:id' component={Quiz}/>
      <Route path='/' exact component={QuizList}/>
      <Redirect to="/"/>
    </Switch>
  )

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/quiz-creator' component={QuizCreator}/>
        <Route path='/quiz/:id' component={Quiz}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/' exact component={QuizList}/>
        <Redirect to="/"/>
      </Switch>
    )
  }

  return (
    <Loyout	>
      {routes}
    </Loyout>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  };
};

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
