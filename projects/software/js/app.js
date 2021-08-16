$(document).ready(function() {

// adding waypoint library and using elements's ID "just_reach" to detect when element is visible     
var waypoint2 = new Waypoint({
  element: document.getElementById('just_reach'),
  handler: function() {
    //alert('Triggered once, now destroyed');
     this.destroy()
   },
  offset: 'bottom-in-view'
})


// using coutner library to count
$('.counter').counterUp({
    delay: 10,
    time: 1000,
    offset: 100,
    beginAt: 0,
    formatter: function (n) {
      return n.replace(/,/g, '.');
    }
});
    
});