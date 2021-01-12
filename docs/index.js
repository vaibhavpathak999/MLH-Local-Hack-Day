document.querySelector('button').addEventListener("click",function(){
  var maxRange = Number(document.getElementById('inputBox').value);
  var today = new Date();
  let timeSeconds = today.getSeconds();
  let randomZeroToOne = timeSeconds/60;
  document.getElementById('outputBox').value = Math.floor(randomZeroToOne*maxRange);
  console.log(maxRange);
  console.log(Math.floor(randomZeroToOne*maxRange));
});
