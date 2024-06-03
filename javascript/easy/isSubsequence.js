function isSubsequence(s, t){
    if(s === ""){
        return true
    }

    let s_pointer = 0
    let t_pointer = 0

    while(t_pointer < t.length){
        if(s_pointer === s.length){
            break
        }

        if(t[t_pointer] ==s[s_pointer]){
            s_pointer += 1
        }

        t_pointer += 1
    }

    return s_pointer === s.length
}

module.exports = isSubsequence;
