import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Signin from './pages/Signin';
import Signup from './pages/Signup';

const Routes = createAppContainer(
  createSwitchNavigator({
    Signin,
    Signup,
  }),
);

export default Routes;
