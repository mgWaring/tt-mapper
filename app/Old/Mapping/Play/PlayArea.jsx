import * as React from 'react';
import { Link } from 'react-router-dom';

import { SplashImage, TilePage, Tile } from '../Styled/general.jsx';

class PlayArea extends React.Component {
  constructor(Props) {
    console.log(Props);
    super(Props);
    this.state = {
      stories: this.playStories(this.props.stories),
    };
    //use fetch to grab the relevant info and supply it to state
  }

  playStories(stories) {
    let storyBits = [];
    {
      for (const storyId in stories) {
        if (stories.hasOwnProperty(storyId)) {
          const story = stories[storyId];
          storyBits.push(
            <Tile key={storyId} perRow={4}>
              <Link to={`/play/${storyId}/start`}>
                <h3>{story.title}</h3>
                <SplashImage image={story.image} maxWidth={'100%'} />
                <p>The body text for a story would go here</p>
              </Link>
            </Tile>
          );
        }
      }
    }
    return storyBits;
  }

  render() {
    console.log('Match: ' , this.props.match);
    return (
      <div>
        <TilePage>
          <h2>Select a story</h2>
          {this.state.stories}
        </TilePage>
      </div>
    );
  }
}
export default PlayArea;
