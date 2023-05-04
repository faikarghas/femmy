export function customId(nr:number){
    var str = "" + nr
    var pad = "FB000000"
    var ans = pad.substring(0, pad.length - str.length) + str
    return ans
}

