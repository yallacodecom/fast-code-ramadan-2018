function Thanks(myName){
    this.tutor = 'Medhat Dawoud';
    this.myName = myName;
    this.message = function(){
        console.log(`Thanks ${this.tutor} for your efforts, I'\m ${this.myName}`);
    }
}

const mohamedshawky = new Thanks('Mohamed Shawky');

mohamedshawky.message();

// Anybody can use the same class to instantiate a unique one to Thank Medhat Dawoud via his name for his efforts for us