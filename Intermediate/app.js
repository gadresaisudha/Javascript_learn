let message = `The quick
brown fox
jumps over
the lazy dog`;
console.log(message);

const fname = 'sudha';
const lname ='gadre';
console.log(`${fname+lname}`);

greet = (name)=>{
    return `hello ${name}`;
}
console.log(greet("Sudha"));

function getPersionES6(name, age, height) {
    return {
      name,
      age,
      height,
    };
  }
  
  getPersionES6("Zachary", 23, 195);