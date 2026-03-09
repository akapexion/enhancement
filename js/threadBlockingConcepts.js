// callbacks
const parent = (callback) => {
    console.log("ABC");
    callback(asad);
}
function asad(callback1){
    console.log('Asad');
    callback1(khan);
}

function khan(){
    console.log("Khan");
}

parent(asad);

asad(khan);



