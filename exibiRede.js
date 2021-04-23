
exibiRede(100);

function exibiRede(exibi) {

  for(i = 0; i <= exibi; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
      console.log("REDE")
    }else if(i % 3 === 0){
      console.log("RE")
    }else if(i % 5 === 0){
      console.log("DE")
    }else {
      console.log("Contando", i);
    }
  }
}

