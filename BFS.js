function BFS(root){

    let queue=[]
    let data=[]
    let node=root;
    //we push root node
    queue.push(root.value);
    
    
    while(queue.length){
        
        node=queue.shift() //removes first variable in array
        data.push(node.value) //pushes the value into queue

        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }

    return data;
}