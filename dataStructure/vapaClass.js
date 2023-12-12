class Vapa {
    constructor(data){
        this.narkel = data.narkel,
        this.gurTukra =  data.gurTukra
    }
}

let myPitha = new Vapa({ narkel: 10, gurTukra: 4 });

console.log(myPitha)

class Valentines {
    constructor(data){
        this.rose = data.rose;
        // this.blackRose = data.blackRose,
        // this.togor =  data.togor,
        // this.kodomFul = data.kodomFul
    }
}


let loveFlower = new Valentines({rose: 'Hasna'})
console.log(loveFlower)