import { Navigation } from 'react-native-navigation';

import HomeScreen from './src/home';
import ProfileScreen from './src/profile';
import PostsComponent from './src/posts';
import SidedrawerComponent from './src/sidedrawer';
import ContactsComponent from './src/contacts';

import HomeIcon from './src/assets/icons/home.png';


Navigation.registerComponent("projectTwo.HomeScreen",()=>HomeScreen);
Navigation.registerComponent("projectTwo.ProfileScreen",()=>ProfileScreen);
Navigation.registerComponent("projectTwo.PostsScreen",()=>PostsComponent);
Navigation.registerComponent("projectTwo.SidedrawerScreen",()=>SidedrawerComponent);
Navigation.registerComponent("projectTwo.ContactsScreen",()=>ContactsComponent);



Navigation.startSingleScreenApp({
  screen:{
    screen: "projectTwo.HomeScreen",
    title:"Home"
  }
})
