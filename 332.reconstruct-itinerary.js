/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

var findItinerary = function (tickets) {
    let start = "JFK";
    let master = [start]
    let visited = []
    let ans = []
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].includes(start) && tickets[i][0] === start) {
            dp(tickets, tickets[i], master, ans, visited)
            console.log("end", { ans })
        }
        master = [start];
    }
};

const dp = (tickets, current, master, ans, visited) => {
    if (current === null) {
        return;
    }
    master.push(current[1]);
    ans.push(master.concat())
    let found = null;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i][0] === current[1] && !visited[i]) {
            found = tickets[i]
            visited[i] = true
            dp(tickets, found, master, ans, visited);
            visited[i] = false
            master.pop()
        }
    }
}


// findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]])
findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]])
// @lc code=end

