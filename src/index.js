let counter = 0;

function loop(){
  if (window.spamErrors) {
    console.log('test ' + counter, new Error('test'));
    counter++;
    info.textContent = counter;
  }

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
