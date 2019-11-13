// Use '$' to target an element in jQuery.

// $("h1").css("color", "red");

// To target a value of the selected element, you target with '$', and to change
// css for example, simply type '.css'. The first value in the brackets indicate
// what you want to change, eg, the color, then the next property is what to change to.

// $("button").css("color", "green");

// This line of code, logs the property of the element and calls back

// the data for property. Here, you would get: rgb(0, 0, 0)
// console.log($("h1").css("color"));


/* How to add classes to elements in jQuery:
$("h1").addClass("big-title");  */

/* Remove classes works the same way:
$("h1").removeClass("big-title");  */

/* To add/remove multiple classes, you do:
$("h1").addClass("big-title big-margin");    */

/* Checking if something has a class in jQuery:
$("element").hasClass("class to be queried");
This returns a boolean true/false statement.   */

/* Changing text in jQuery:
$("h1").text("insert new text here");  */

/* Changing innerHTML in jQuery:
$("button").html("<em>Hello</em>")  */

/* How to get an attribute of an element:
console.log($("img").attr("src"));
This would give the source of the img.

You can also go into the console, and use:
$("h1").attr("class");
This would print out all the classes associated with the selected element  */

/* You can also set values of attributes:
$("img").attr("href", "https://www.duckduckgo.com")
The first section of the attribute is what you want to change,
and the second is what you want to change it to.  */

/*  Adding event listeners in jQuery  */

/* Target the element you want to add the event listener to.
Then add what you want to do with it, with a .'event', eg .click. You can then add
a function using the normal javascript principle.

$("h1").click(function() {
$("h1").css("color", "purple")
});

This line of code, targets the 'h1', then adds a 'on click' event to it.
Then, it targets the css property to change, in this case being the color, then adds
how it is going to be changed. */

/* Adding events to multiple elements in jQuery  */

/* In normal javascript, you would have to use a for loop, and multiple queryselectors, like so:
for (var i = 0; i <= 5; i++) {
document.querySelectorAll("button")[i].addEventListener("click", function() {
document.querySelector("h1").style.color = "purple";
})
}
For reference, the above code, adds an event listener to all 5 buttons, so that when you click on the buttons,
it changes the h1 colour to purple.
*/

/* In jQuery though, you simply use the syntaxes:
$("button").click(function() {
$("h1").css("color", "purple");
})
This code in jQuery automatically applies the event listener 'click' function to all buttons in the document.
Then changes the css color of the h1 to purple. */

/* You can add events to various elements in a similar way. For example, adding a keypress listener to an input:
$("input").keypress(function(event){
console.log(event,key);
});
This line of code targets the 'input', then adds an event listener for a keypress inside the input.
The function logs the event which triggered the event. In this case, the keypress.
Then it logs which key was pressed and prints it to the console.   */

/* To add the event listener to the whole of the document, it is as easy as targeting the body
or the whole document, instead of just the 'input'. Like so:
$("body/document").keypress(function(event){
console.log(event,key);
});   */

/* $("body").keydown(function(event){
  $("h1").text(event.key);
 });
*/
/* This code targets the body of the document, then it changes the text to the event.
In this case, which is the key of the keydown. eg: a, t, f, etc.  */

/* jQuery, using the 'on' event listener syntax
You can use '.on' after selecting the element, to quite predicably, change the item
when the event provided is true.
For example: */
// $("h1").on("mouseover", function(){
// $("h1").css("color", "green");
// });
/* This targets the h1, and adds a mouseover event which changes the css property of color to green.*/

/* Inserting and removing elements using jQuery  */
/* There are 4 principle ways of adding/removing elements in jQuery. They are done by using the syntaxes:
'.before', '.after', .'prepend', '.append'
Put simply, before places the element before the targeted element in the code line.
After, places it directly after.
Prepend and append, on the other hand, places it INSIDE the targeted element, but before and After
the core data.
For example, if i were to add a button to an 'h1' element:

$("h1").before("<button>New</button>")
Gives the code: <button>New</button><h1>Hello</h1>

$("h1").after("<button>New</button>")
Gives the code: <h1>Hello</h1><button>New</button>

$("h1").prepend("<button>New</button>")
Gives the code: <h1><button>New</button>Hello</h1>

$("h1").append("<button>New</button>")
Gives the code: <h1>Hello<button>New</button></h1>*/

/* Removing elements in jQuery */
/* Removing is rather simple, you simple add a '.remove()' affix after the element you wish to remove.
For example:
$("button").remove();
Will remove all buttons on the targeted page.  */

/* Showing/hiding and toggling elements in jQuery */
/* You do this by using '.hide()', '.show()', '.toggle()'
For example:
$("button").click(function(){
$("h1").show/hide/toggle();
});
This code will make it so when you click on any of the buttons, it will show/hide/toggle the 'h1'. */

/* Adding transitions and fades in jQuery  */
/* You do this using the syntaxes '.fadeIn()' and '.fadeOut()' respectably.
For example:
$("button").click(function(){
$("h1").fadeIn/Out/Toggle();
});
As you can probably guess, causes the 'h1' to fade in/out and toggle, when the buttons are clicked.*/

/* Using slide up and slide down in jQuery  */
/* The syntaxes are the same as above, although '.slideUp()', '.slideDown()' and '.slideToggle()' are used.
For example:
$("button").click(function(){
$("h1").slideUp/Down/Toggle();
});
Does precisely what you are probably imagining it does.. */

/* Precise animation using '.animate' */
/* You can only change animations this way by numerical values. ie, margin: 20px, not color: red
Example code for this principle is:
$("button").click(function(){
$("h1").animate({margin: 10px OR "20%"}); - values that are percentages are only applied in a string "".
});
*/

/* Combining animations in jQuery */
/* Combining animations is done by linking various methods together, it always triggers the first
then goes along the line of code to trigger the rest.
Example code:
$("button").click(function() {
$("h1").slideUp().slideDown().animate({opacity: 0.5});
});
This code, when clicking on a button, slides the h1 up, then down, and finally transforms its opacity to 0.5. */
