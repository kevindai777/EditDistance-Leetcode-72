//Objective is to find the minimum number of steps to change one word
//into another, where a step can be deleting, inserting, or replacing
//a single character at a time.


let word1 = "horse", word2 = "ros"

//O(m * n) dynamic programming solution where we map the two words
//into a grid. 

let dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0))
    
for (let i = 0; i < word1.length + 1; i++) {
    dp[i][0] = i
}

for (let j = 0; j < word2.length + 1; j++) {
    dp[0][j] = j
}

for (let i = 1; i < word1.length + 1; i++) {
    for (let j = 1; j < word2.length + 1; j++) {
        let left = dp[i - 1][j] + 1
        let down = dp[i][j - 1] + 1
        let leftDown = dp[i - 1][j - 1]
        
        if (word1[i - 1] != word2[j - 1]) {
            leftDown++
        }
        dp[i][j] = Math.min(left, down, leftDown)
    }
}
        
return dp[word1.length][word2.length]