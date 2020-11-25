class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

//Avg O log(n), since we cut in half, but if the tree is sided to one side then worst case it would be O(n)
//Space O(1) if done itteratively

  function findClosestValueInBst(tree, target) {
    // Write your code here.
    let current=tree;
    let closest=tree.value;

    while(current!==null){

        if(current.value===target){
            closest=current.value;
            break;
        }
        //if target-current.value is less than target-cloest, then the current value is smaller
        if(Math.abs(target-closest)>Math.abs(target-current.value)){
            closest=current.value;
        }

        //target<current.value then the number to the left has a higher chance being closer to it
        if(target<=current.value){
            current=current.left;
        }else if(target>current.value){
            current=current.right
        }
    }
      
  }

  //recurisve
  function findclosestValueinBst(tree,target){
      return findClosestValueinBSTHelper(tree,target,tree.value)
  }
  //Avg 0(log n) time, space 0(log n)
  //Worst 0(n) time, space 0(n)
  function findClosestValueinBSTHelper(tree,target,closest){
        if(tree===null) return closest;
        
        if(Math.abs(target-closest) > Math.abs(target-tree.value)){
            closest=tree.value
        }
        
        if(target<=tree.value){
            return findClosestValueInBstHelper(tree.left,target,closest)
        }else{
            return findClosestValueInBstHelper(tree.right,target,closest)
        }

  }

  /*
{
  "tree": {
    "nodes": [
      {"id": "10", "left": "5", "right": "15", "value": 10},
      {"id": "15", "left": "13", "right": "22", "value": 15},
      {"id": "22", "left": null, "right": null, "value": 22},
      {"id": "13", "left": null, "right": "14", "value": 13},
      {"id": "14", "left": null, "right": null, "value": 14},
      {"id": "5", "left": "2", "right": "5-2", "value": 5},
      {"id": "5-2", "left": null, "right": null, "value": 5},
      {"id": "2", "left": "1", "right": null, "value": 2},
      {"id": "1", "left": null, "right": null, "value": 1}
    ],
    "root": "10"
  },
  "target": 12
}

  */