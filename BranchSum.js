//our goal is to sum up the branches in DFS, first from left to right

class BinaryTree{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

function BranchSums(root){
    let arraySum=[]
    DFS(root,0,arraySum)
    return arraySum;
}

function DFS(node,runningSum,arraySum){
    if(node===null){
        return
    }
    //we create a new variable to hold the sum so it can hold the temp value
    let newRunningSum=runningSum+node.value

    if(node.left===null && node.right===null){
        arraySum.push(newRunningSum)
        return
    }

    DFS(node.left,newRunningSum,arraySum)
    DFS(node.right,newRunningSum,arraySum)
}



//[15,16,18,10,11]


/*
{
    "tree": {
      "nodes": [
        {"id": "1", "left": "2", "right": "3", "value": 1},
        {"id": "2", "left": "4", "right": "5", "value": 2},
        {"id": "3", "left": "6", "right": "7", "value": 3},
        {"id": "4", "left": "8", "right": "9", "value": 4},
        {"id": "5", "left": "10", "right": null, "value": 5},
        {"id": "6", "left": null, "right": null, "value": 6},
        {"id": "7", "left": null, "right": null, "value": 7},
        {"id": "8", "left": null, "right": null, "value": 8},
        {"id": "9", "left": null, "right": null, "value": 9},
        {"id": "10", "left": null, "right": null, "value": 10}
      ],
      "root": "1"
    }
  }

  */