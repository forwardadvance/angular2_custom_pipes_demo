// var SalutationsPipe = ng.core
//   .Pipe({
//     name:'salutations'
//   })
//   .Class({
//     constructor: function() {},
//     transform: function(val, args) {
//       var greeting = args[0] || "hello there"
//       return [greeting,
//         val,
//         "gfdgfd",
//         val
//       ].join(' ') ;
//     }
//   })

// ary.sort(function(a, b) {return a == b ? 0 : (a > b ? 1 : -1)})

var MinVal = ng.core
  .Pipe( {
    name: 'minVal'
  })
  .Class({
    constructor: function() {},
    transform: function(ary, args) {
      var min = args[0]
      return ary.filter(function(val) {
        return val > min;
      })
    }
  })

var AppComponent = ng.core
  .Component({
    selector: "app",
    pipes: [MinVal],
    template:
    `
      <input type='range' (input)="getInput($event)" max="10"/> {{min}}
      <br />
      {{values | minVal:min}}
    `
  })
  .Class({
    constructor: function() {
      this.values = [1,4,9,2,4];
      this.getInput = function($event) {
        this.min = $event.target.value
      }
    }
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});
