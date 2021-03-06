import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import A from './A';
import B from './B';
import C from './C';
import registerServiceWorker from './registerServiceWorker';
import { Route,Link,Switch,BrowserRouter,HashRouter} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();


const SliderComponent = () => (
    <Switch>
        <Route exact path='/in*' component={C} />
        <Route exact path='/a' component={A} />
        <Route path="/b" component={B}/>
    </Switch>
)
ReactDOM.render(
    (
        <BrowserRouter>
            <SliderComponent />
        </BrowserRouter>
    ),
    document.getElementById('root'));
registerServiceWorker();
