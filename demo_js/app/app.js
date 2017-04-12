var SalutationsPipe = ng.core
  .Pipe({
    name:'salutations'
  })
  .Class({
    constructor: function() {},
    transform: function(val, args) {
      var greeting = args[0] || "hello there"
      return [
        greeting,
        val,
      ].join(' ') ;
    }
  })

var MinVal = ng.core
  .Pipe( {
    name: 'minVal'
  })
  .Class({
    constructor: function() {},
    transform: function(ary, args) {
      var min = args[0]
      return "<p>Hello</p>"
      return ary.filter((val) => val > min);
    }
  })

// uppercase
// lowercase

var AppComponent = ng.core
  .Component({
    selector: "app",
    pipes: [SalutationsPipe, MinVal],
    template:
    `
      <div>{{99999*99999 | currency:"gbp":true}}</div>

      {{'Hello!' | uppercase | lowercase}}
      <div>
        <input type='range' (input)="getInput($event)" max="10"/> {{min}}
        <br />
        {{values | minVal:min}}
      </div>
    `
    // `
    //   <input type='range' (input)="getInput($event)" max="10"/> {{min}}
    //   <br />
    //   {{values | minVal:min}}
    // `
  })
  .Class({
    constructor: function() {
      this.name = "Dave";
      this.values = [1,4,9,2,4];
      this.min = 5;
      this.getInput = function($event) {
        this.min = $event.target.value
      }
    }
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});
