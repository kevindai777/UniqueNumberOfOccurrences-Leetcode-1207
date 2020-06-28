//Objective is to see whether a 1-D array has unique occurrences for each
//unique element in the array.

let nums = [1,2,2,1,1,3]

//O(n) solution that uses a hashmap to get the frequencies of each element
//and a hashset to make sure no frequency happens twice.

let map = {}

for (let num of nums) {
    if (map[num] == undefined) {
        map[num] = 1
    } else {
        map[num]++
    }
}

let set = new Set()

for (let frequency of Object.values(map)) {
    if (!set.has(frequency)) {
        set.add(frequency)
    } else {
        return false
    }
}

return true