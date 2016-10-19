'use strict';

let list = {
  title: 'list',
  items: ['i1', 'i2', 'i3'],

  showList: function() {
    this.items.forEach(
      item => console.log(this.title + ': ' + item)
    )
  }
}

list.showList();

/*

    list: i1
    list: i2
    list: i3

*/
