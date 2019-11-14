import { match, RouteComponentProps } from 'react-router';


//MyTypes
export type AppProps = {
    Config: any
}
export type AppState = {
    config: any,
    showCreateSubMenu: boolean,
    createStories: any[]
}

export interface CreateAreaState {

}

export interface PlayAreaProps {
    stories: any,
    match: any,
}

export interface PlayAreaState {
    stories: any,
}

export interface StoriesProps extends RouteComponentProps {
    Stories: any
}

export interface PagesProps extends RouteComponentProps {
    match: any
}

export type PagesState = {
    StoryId: string,
    User: any, //maybe user should be an object? depends on how we auth this I guess...
    Pages: any,
    DrawnAlready: any[]
}

export interface PageProps extends RouteComponentProps {
    match: any
}

export interface EditPageProps extends PageProps {
    StoryId: string
}

export interface PageState {
    StoryId: string,
    Pages: any,
    thisPage: any,
    player: any,
}

export type Page = {
    StoryId: string,
    Page: any,
    LeftImg: string,
    RightImg: string,
    BodyText: string,
    Choices: string[]
}

export type Player = {
    Id: any,
}