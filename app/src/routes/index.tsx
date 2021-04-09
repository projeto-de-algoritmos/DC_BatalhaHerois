import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StartPage from '../pages/StartPage';
import SelectAllies from '../pages/SelectAllies';
import SelectEnemies from '../pages/SelectEnemies';
import Winner from '../pages/Winner';

const Routes: React.FC = () => {
  return (
    <Switch>
        <Route path='/' exact component={StartPage} />
        <Route path='/allies' component={SelectAllies} />
        <Route path='/enemies' component={SelectEnemies} />
        <Route path='/winner' component={Winner} />        
    </Switch>
  );
}

export default Routes;