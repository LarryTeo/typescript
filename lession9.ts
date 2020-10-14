
class Person{
    run(){
        console.log('Noisy is winner')
    }

}
let p1 = new Person();

console.log(p1.run() ===Person.prototype.run());
console.log(p1.run());

class PersonNoisy{
    constructor(name){
        this.name(name);
        console.log('Noisy yeu dau');
    }
    static talk(){
        console.log('Noisy is winner');
    }
}
let p = new Person("Noisy");
p.run();
Person.talk();