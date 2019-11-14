import * as React from 'react';


class EditPage extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            StoryId: this.props.match.params.pageId,
            Pages: this.getPages(this.props.match.params.pageId),
            thisPage: this.pageIs(),
            player: {}
        };
        console.log(this.state);
    }

    getPages(id) {
        return require(`../fakedata/${id}.json`);
    }

    pageIs(){
        return this.state.Pages[this.props.match.pageId];
    }

    render() {
        return (
            <div>
                <p>editing page {this.props.match.pageId}</p>
                <h3>{this.state.thisPage.title}</h3>
                <p>{this.state.thisPage.body}</p>
            </div>
        );
    }
}
export default EditPage;