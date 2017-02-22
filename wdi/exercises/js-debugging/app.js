console.log('Hello from app.js');

function createListItem(text) {
  let li = document.createElement('li');
  let content = document.createTextNode(text);
  li.appendChild(content);
  return li;
}
function addNodeLater(parent, child, delay) {
  setTimeout(function() {
    parent.appendChild(child);
  }, delay);
}


function fizzbuzz(max, parentNode) {
  var delay = 500;
  for (var n = 1; n <= max; n++) {
    if (n % 15 === 0) {
      addNodeLater(parentNode, createListItem('FizzBuzz'), delay * n);
    }
    else if (n % 3 === 0) {
      addNodeLater(parentNode, createListItem('Fizz'), delay * n);
    }
    else if (n % 5 === 0) {
      addNodeLater(parentNode, createListItem('Buzz'), delay * n);
    }
    else {
      addNodeLater(parentNode, createListItem(n), delay * n);
    }
  }
}

function play() {
  let ul = document.getElementById('fizzbuzz');
  fizzbuzz(100, ul);
}

function reset() {
  let ul = document.getElementById('fizzbuzz');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}
