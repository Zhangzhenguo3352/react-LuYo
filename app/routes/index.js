
// ���� �ڶ���
import React from 'react';

import { Route, IndexRoute } from 'react-router';
import {App,Home,About} from '../containers';

//���ʵ���վ �ֱ���
// 1, http://localhost:3333/
// 2, http://localhost:3333/about
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
    </Route>
)

