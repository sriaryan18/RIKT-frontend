import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Dashboard from './Dashboard';
import Profile from './Profile';
import TalkScreen from './TalkScreen';


const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'dashboard', title: 'Dashboard', icon: 'queue-music' },
    { key: 'talk', title: 'Talk', icon: 'album' },
    { key: 'profile', title: 'Profile', icon: 'history' },
  ]);
    
  const renderScene = BottomNavigation.SceneMap({
    dashboard: Dashboard,
    talk: TalkScreen,
    profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;