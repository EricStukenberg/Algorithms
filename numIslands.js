const numIslands = (grid) => {
    let islands = 0
    
    for(let i=0; i <grid.length; i++) {
        for(let j=0; j < grid[0].length; j++) {
             if(grid[i][j] == 1) {
                islands++
             
            }
        }
    }
};

const checkIsland = (grid, i, j) => {
    grid[i][j] = 0
    
    if(i > 0 && grid[i-1][j] == 1) {
        
    }
    if(i <= grid.length -2 && grid[i+1][j] == 1){
        expand(grid, i+1, j)
    }
    
    
}
