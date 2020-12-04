const numIslands = (grid) => {
    let islands = 0
    
    for(let i=0; i <grid.length; i++) {
        for(let j=0; j < grid[0].length; j++) {
            if(grid[i][j] == 1) {
                islands++
                checkIsland(grid, i, j)
            }
        }
    }
    return islands
};

const checkIsland = (grid, i, j) => {
    grid[i][j] = 0
    
    if(i > 0 && grid[i-1][j] == 1) {
        checkIsland(grid, i-1, j)
    }
    if(i <= grid.length -2 && grid[i+1][j] == 1){
        checkIsland(grid, i+1, j)
    }
    if(j> 0 && grid[i][j-1] == 1){
        checkIsland(grid, i, j-1)
    }
    if(j <= grid[0].length - 2 && grid[i][j+1] == 1){
        checkIsland(grid, i, j+1)
    }
    
}
