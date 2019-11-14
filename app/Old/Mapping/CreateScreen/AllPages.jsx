import * as React from 'react';

import { PagesMap, PagesMapElement, ElementJoiner, Tile } from '../Styled/general.jsx';
import { node } from 'prop-types';

class AllPages extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            StoryId: this.props.match.params.storyId,
            User: 'a user ',
            Pages: this.getPages(Props.match.params.storyId),
            DrawnAlready: []
        };
    }

    getPages(storyId) {
        return require(`../fakedata/${storyId}.json`);
    }

    /* to establish a node tree of pages:
    
1| sort the nodes into an appropriate order.
    What about duplication of nodes under parents?
    - Store a count of the number of parents each node has?

OR start at the root node and then traverse the tree based on the relationships expressed
    data structure? Nested arrays?
    it's already ana array of related objects 
    the trouble is in the relating of duplicates
    order is important >> for drawing, x and y vals are importnat
    order is defined by x vals
    assign a random x val to every node, then sort?

///////////////////// A SUGGESTION --------------------------- :
process(array nodes){
    y = 0 
    tally = 0
    mod = 0
    node = nodes.find('start')
    this.recurse(0, node) 
}

recurse(index i, node node){
    tally++
    y = y + mod
    node.x = node.parent.x ? (node.parent.x + 1) : 0
    node.y = y = y + i
    if(i===mod){
        mod = node.childs
        y = 0
    }

    for(index > node in node.children){
        this.recurse(i, node)
    }
}

    */

    assemblePageLinks(nodes) {
        const nodesArray = []
        const display = []
        for (let key in nodes) {
            if (nodes.hasOwnProperty(key)) {
                nodesArray.push(nodes[key])
            }
        }
        const processedNodes = this.process(nodesArray)
        console.log('Processed Nodes:: ', processedNodes)
        for (let e in processedNodes) {
            console.log('OutputNode: id: ' + processedNodes[e].id)
            console.log('      Node:  x: ' + processedNodes[e].x)
            console.log('      Node:  y: ' + processedNodes[e].y)
            let node = processedNodes[e]
            display.push(
                <PagesMapElement key={e} x={node.x} y={node.y}>
                    {node.title}
                </PagesMapElement>
            )
        }
        console.log('Finished?::', display)
        return display
    }

    process(nodes) {
        let numbers = {
            'y': 0,
            'tally': 0,
            'mod': 0,
            'i': 0
        }
        let processedNodes = []
        let node = nodes.find(node => node.id === 'start')
        node.x = 0
        node.y = 0
        this.recurse(node, null, processedNodes)
        return processedNodes
    }

    recurse(node, parent, out) {
        if (parent !== null && parent.x > node.x) {
            //if true then the relationship is recursive => duplicate child do not recurse children
            console.log(`Node ${node.id} is recursive with x:${node.x} and y:${node.y}`)
        } else if (parent !== null && node.id === 'start') {
            node.y = out.filter((node) => node.id === 'start').length
            node.x++
            console.log(`Adding dead end start x:${node.x}, y:${node.y}`)
            out.push(Object.assign({}, node))

        } else if (out.find(Onode => Onode.id === node.id)) {
            //if a node is already in the list => remove an replace
            let toMove = out.find(Onode => Onode.id === node.id)
            /*
            if (toMove.x >= node.x) {
                console.log('got one!')
            } else {
*/
            toMove.x++
            console.log(node.id + ' already exists, shifting it')
        } else {
            //proceed as normal => increment vals and recurse children
            node.y++
            node.x++
            console.log('Process ' + node.id + '  :: ')
            console.log('   Children: ', node.options)
            console.log(`   x:${node.x}, y:${node.y}`)
            out.push(Object.assign({}, node))
            for (let option in node.options) {
                let newNode = this.state.Pages[node.options[option].target]
                newNode.x = node.x
                if (parent !== null && node.y === parent.options.length) {
                    newNode.y = 0
                } else {
                    newNode.y = node.y
                }
                this.recurse(newNode, node, out)
            }
        }
    }

    render() {
        let pageLinks = this.assemblePageLinks(this.state.Pages);

        return (
            <div>
                <PagesMap>
                    <p>pages</p>
                    {pageLinks}
                </PagesMap>
            </div>
        );
    }
}
export default AllPages;
