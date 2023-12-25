// Three-step nested object
const data = {
    key1: {
      key2: {
        value1: 10,
        value2: 20,
      },
      key3: {
        value3: 30,
        value4: 40,
      },
    },
    key5: {
      value5: 50,
      value6: 60,
    },
  };


  function iterableValue(useData){
    for(let key in useData){
        const values =  useData[key]
        if(typeof values == 'object'){
                iterableValue(values)
        }else{
            console.log(`Key: ${key} and Value : ${values}`)
        }
    }
  }

  iterableValue(data)