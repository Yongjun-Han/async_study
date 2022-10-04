let name = "한용준";

function printer(value) {
  return new Promise(function(resolve, reject) {
  console.log('승현이미남');

    resolve(value);
    // 매개변수를 이행(resolve)했다.
  })
}

printer(name).then(function(data) {

  test(data);

  console.log(data);
  return new Promise(function(resolve, reject) {
    resolve(data);
  })
}).then((data) => {
  console.log('욱재미남');  
})