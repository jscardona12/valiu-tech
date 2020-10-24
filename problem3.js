

const knightMove = (a,b,c,d) => {

    const movesArray = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[-2,1],[2,-1],[-2,1]]
    let init = {
        x: a,
        y: b,
        dist: 0
    };
    const target = {
        x:c,
        y:d
    }

    let visited = {};
    visited[init.x+''] = {};
    visited[init.x+''][init.y+''] = true;
    let queue = [init];

    while(queue.length > 0){
        const temp = queue.shift();
        if(temp.x === target.x && temp.y === target.y){
            return temp.dist;
        }
        for(let coor of movesArray ){
            const x = temp.x + coor[0];
            const y = temp.y + coor[1];
            if(!(visited[x+''] && visited[x+''][y+''])){
                if(visited[x+'']){
                    visited[x+''][y+''] = true;
                }
                else{
                    visited[x+''] = {};
                    visited[x+''][y+''] = true;
                }
                queue.push({x,y,dist:temp.dist + 1})
            }
        }
    }
}


console.log(knightMove(-5,-5,5,5));
