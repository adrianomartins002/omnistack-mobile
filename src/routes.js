import { createAppContainer} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Route = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions:{
                title:'DevRadar'
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                title: 'Perfil no Github'
            }
        }
    },{
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:'#7D40e7'
            },
            headerTintColor:'#fff',
            headerBackTitleVisible:false
        }
    })
)



export default Route;