self.onmessage = function(){
    var sum = 0;
        for(var i=0;i<10000000000;i++){
            sum += i
        }
        self.postMessage(sum)
}