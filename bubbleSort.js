function BubbleSort(items){
    var length = items.length
    for(let i = 0; i< length; i++){
        for(let j=0; j< (length -i-1); j++){
            if(items[j]> items[j+1]){
                let temp = items[j]
                items[j] = items[j+1]
                items[j+1]= temp
            }
        }
    }
    console.log(items)
}

items = [9,3,6,1,6,7,10,25,23]
BubbleSort(items)