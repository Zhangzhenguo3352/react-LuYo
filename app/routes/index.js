
// 这是 第二步
import React from 'react';

import { Route, IndexRoute } from 'react-router';
import {App,Home,About} from '../containers';

//访问的网站 分别是
// 1, http://localhost:3333/
// 2, http://localhost:3333/about
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
    </Route>
)

