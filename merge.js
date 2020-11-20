const merge = (nums1, m, nums2, n) => {
    let res = new Array(m + n);
    let i = 0
    let j = 0
    let k = 0
    
    while(i < m && j < n) {
        
        if(nums1[i] < nums2[j]) {
            res[k] = num1[i]
            k++
            i++
        } else {
            res[k] = num2[j]
            k++
            j++
        }
    }
};
