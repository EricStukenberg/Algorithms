var combinationSum = function(candidates, target) {
    let res = [];
    helper(target, 0, candidates, [], res);
    console.log(res);
    return res;
    
};

function helper(target, start, candidates, sol, res) {
    if (target < 0) { return; }

    if (target == 0) {
        let temp = sol;
        res.push(temp.slice());
        return;
    }

    for (let i = start; i < candidates.length; i++) {
        sol.push(candidates[i]);
        helper(target - candidates[i], i, candidates, sol, res);
        sol.pop();
    }
}