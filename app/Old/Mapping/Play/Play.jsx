import * as React from 'react';
import { Link } from 'react-router-dom';

import { PlayPage, LHImage, RHImage, PageBody, Tile } from '../Styled/general.jsx';


class Play extends React.Component {
    constructor(props) {
        super(props);
        console.log('Play Page Props: ', this.props)
        let thepages = this.getPages(this.props.match.params.storyId)
        this.state = {
            StoryId: this.props.match.params.storyId,
            Pages: thepages,
            thisPageId: this.props.match.params.pageId,
            thisPage: thepages[this.props.match.params.pageId],
            player: {},
            previous: ''
        };
        console.log('Play Page State: ', this.state);
    }

    getChoices(page) {
        let options = [];
        for (let choice of page.options) {
            options.push(
                <Link key={choice.target} to={`/play/${this.state.StoryId}/${choice.target}`} onClick={(e)=>this.goto(e)}>
                    <Tile perRow={2}>
                        {choice.text}
                    </Tile>
                </Link>
            );
        }
        return options;
    }

    goto(){
        console.log('clicked', e);
        this.setState({previous:this.state.thisPageId});
        console.log(this.state.previous);
    }

    getPages(id) {
        return require(`../fakedata/${id}.json`);
    }

    getImages(target){
        try{
            if(target === 'l'){
                let img = require('../img/play/story1/start/lhimg.jpg')
                return img;
            } else if(target ==='r'){
                let img = require('../img/play/story1/start/rhimg.jpg')
                return img;
            }
            return null;
        } catch (e){
            return null;
        }
    }

    render() {
        return (
            <PlayPage>
                <h1>{this.state.thisPage.title}</h1>
                <LHImage image={this.getImages('l')} />
                <PageBody>
                    <p>{this.state.thisPage.body}</p>
                    {this.getChoices(this.state.thisPage)}
                </PageBody>
                <RHImage image={this.getImages('r')} />
            </PlayPage>
        );
    }
}
export default Play;
