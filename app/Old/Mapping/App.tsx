import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//my bits
import Home from './Home/Home';
import PlayArea from './Play/PlayArea';
import Play from './Play/Play';
import { AppProps, AppState } from './CustomTypes/types';
import AllPages from './CreateScreen/AllPages';
import { Menu, NavItem, SubMenu, SubMenuItem, Tile } from './Styled/general.jsx';

const stories = require('./fakedata/stories.json');

class App extends React.Component<AppProps, AppState> {
  public constructor(Config: any) {
    super(Config);
    this.state = {
      config: Config,
      showCreateSubMenu: false,
      createStories: this.createStories(),
    };
  }

  createStories(): any[] {
    let storyBits: Array<any> = [];
    {
      for (const storyId in stories) {
        if (stories.hasOwnProperty(storyId)) {
          const story: any = stories[storyId];
          storyBits.push(
            <SubMenuItem key={storyId}>
              <Link to={`/create/${storyId}`}>
                {story.title}
              </Link>
            </SubMenuItem>
          );
        }
      }
    }
    storyBits.push(
      <SubMenuItem key='000000000000'>
        <Link to={`/create/new-story`}>
          New Story
      </Link>
      </SubMenuItem>
    );
    return storyBits;
  }

  handleCreateClick() {
    this.setState({ showCreateSubMenu: this.state.showCreateSubMenu ? false : true })
  }

  public render() {
    return (
      <Router>
        <div className="App">
          <Menu>
            <NavItem>
              <Link to="/">
                Home
            </Link>
            </NavItem>
            <NavItem>
              <Link to="/play">
                Storytime
            </Link>
            </NavItem>
            <NavItem onClick={() => this.handleCreateClick()}>
              Create
              {this.state.showCreateSubMenu &&
                <SubMenu>
                  {this.state.createStories}
                </SubMenu>}
            </NavItem>
          </Menu>

          <Switch>
            <Route path='/play/:storyId/:pageId' component={Play} />
            <Route path="/create/:storyId" component={AllPages} />
            <Route path="/play" render={props => <PlayArea {...props} stories={stories} ></PlayArea>} />
            <Route path="/" exact component={Home} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;