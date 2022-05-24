const miArray = [24, 60];

for (let i = 0; i < miArray[0]; i++) {

    for (let j = 0; j < miArray[1]; j++) {
        
        
       let prova = i + ":" + j;
       console.log([i] + ':' + [j]);
       if(prova == '7:25'){
           console.log('Desperta');
           //alert('Desperta');
           break;
       }
       
    }
}


 