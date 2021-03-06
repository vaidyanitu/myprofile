import './App.css';
import Navmenu from './Menu/Nav';
import About from './Menu/About';
import Resume from './Menu/Resume';
import Projects from './Menu/Projects';
import Contact from './Menu/Contact';
import { BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';

//For dynamic routing
const menulist=[{name:"About",component:About},
{name:"Resume",component:Resume},
{name:"Projects",component:Projects},
{name:"Contact",component:Contact},
];

const routes =[];
menulist.forEach(item=>routes.push({path:"/"+item.name,comp:item.component}));
const routeComponents = routes.map(({path, comp}, key) => <Route path={path} component={comp} key={key} />);
         

function App() {  

  return (
    <Router>
    <div>
            <Navmenu name="Nitu Vaidya" menu={menulist.map(x=>x.name)}/>
              <Switch>
                <Redirect exact from="/myprofile" to="/About" />
              <Route exact component={About} path="/" />
              {/* <Route  component={Resume} path="/Resume" />
              <Route  component={About} path="/About" />  */}
               {routeComponents}
                {/* <Route exactly component={Page1} pattern="/path1" />
                <Route exactly component={Page2} pattern="/path2" />
                <Route exactly component={Page3} pattern="/path3" />
                <Route component={Page404} /> */}
              </Switch>
            </div>
            </Router>
  );
}

export default App;
