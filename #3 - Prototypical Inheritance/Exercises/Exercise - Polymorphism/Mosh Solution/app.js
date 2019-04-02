function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  }
}

HtmlElement.prototype.focus = function() {
  console.log('focused');
}

function HtmlSelectElement(items = []) {
  //ES5 WAY
  // this.items = items || [];
  this.items = items;

  this.addItem = function(item) {
    this.items.push(item);
  }

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  this.render = function() {
    //Join converts a array to a string without commas
    return 
    `<select>${this.items.map(item => 
      `<option>${item}</option>`).join('')}
     </select>`;
  }
}

//seting the prototype to a instance because the instance has the click and the focus method
HtmlSelectElement.prototype = new HtmlElement();
//resetting the construvtor
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


function HtmlImageElement(src) {
  this.src = src;

  this.render = function() {
    return `<img src="${this.src}">`;
  }
}

HTMLImageElement.prototype = new HtmlElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;