/**
 * Depth First Search
 *
 * Geeks for Geeks
 * https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/
 *
 */

/**
 * Depth First Search:
 * 
 * In a tree structure it goes deep first from left to right
 */

/* Tree structure
* A tree is made from nodes, each node has a value representing it. Each node can have n children.
*/

class TreeNode{
    constructor(name)
    {
        this.name = name;
        this.children = [];
    }


}


/*Example data

             Adam
            /   \
        Noah      Peter
        / \         |
    Max   Maria   Josef
            |
          Hans



*/
const adam = new TreeNode("adam");
const noah = new TreeNode("noah");
const peter = new TreeNode("peter");
const max = new TreeNode("max");
const maria = new TreeNode("maria");
const josef = new TreeNode("josef");
const hans = new TreeNode("hans");


adam.children.push(noah);
adam.children.push(peter)
noah.children.push(max);
noah.children.push(maria)
peter.children.push(josef);
maria.children.push(hans);


// counter and boolean for status of search
let count = 0;
let foundChild = false;


// The search function starts here with the root


function depthFirstSearch(root, child ){

    
  
        
        checkChildren(root, child);
        if ( foundChild = false){
        console.log("The tree doesnt contain the child you are searching for")
        }
    

}

// if a child is not the searched child it will instantly go deeper to its respective children

function checkChildren(node, child){
    for (let i = 0 ; i<node.children.length ; i++)
    { 
        count++;
        if (node.children[i].name== child)
        {
            console.log("found "+child+" after "+count+" steps");
            foundChild = true;
            return;
        }
        checkChildren(node.children[i],child)
    }

}

// Tests the code

// depthFirstSearch(adam, "hans");   // should result in 4