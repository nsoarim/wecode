function test(){
let list =[]
for(let i=1;i<51;i++){
list.push(i)
}

let out=[]
for(let i=1;i<list.length;i++){
    if(list[i]%2==0){

        out.push(list[i])
    }
    }

    return out
}