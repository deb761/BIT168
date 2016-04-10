/* This script file defines the snowflake animations */
$(window).load(function(){
    $.keyframe.debug = true; /* Enable debugging to the console */
    /* define a function to figure out the distance the snowflake needs to travel in it's animation */
    function defKeyframe(num, xpos, bodyHeight) {
        $.keyframe.define([{
            name: 'drift' + num,
            '0%': {'transform': 'translate(' + (xpos + 10) + 'px, -150px); opacity: 100%;'},
            '25%': {'transform': 'translate(' + (xpos + 10) + 'px, ' + bodyHeight * 0.25 + 'px)'},
            '50%': {'transform': 'translate(' + xpos + 'px, ' + bodyHeight * 0.5 + 'px)'},
            '75%': {'transform': 'translate(' + (xpos - 5) + 'px, ' + bodyHeight * 0.75 + 'px)'},
            '100%': {'transform': 'translate(' + xpos + 'px, ' + bodyHeight + 'px)'}
        }]);
    }
    var bodyHeight = $('body').height();
    
    /* define the snowflake elements */
    function defSnowflake(num, xpos, delay) {
        var image = $("<img>");
        if ($(document).width() < (xpos + image.width())) {
            return;
        }
        image.attr("src", 'images/snowflake' + num + '.png');
        image.css({
            "alt": "snowflake" + num,
            "id": "snowflake" + num,
            "position": "absolute",
            "z-index": "-1",
            "top": "-60px",
            "animation-name": "drift" + num,
            "animation-timing-function": "linear",
            "animation-iteration-count": "infinite",
            "transform": "translate(" + xpos + "px, -150px",
            "animation-duration": (bodyHeight / 1000 * 60) + 's',
            "animation-delay": delay + "s"});
        
        // define keyframe
        defKeyframe(num, xpos, bodyHeight);
        
        // append to body element
        $("body").append(image);
        
   }
    
    // define snowflake1
    defSnowflake(1, 100, 0);
    // define snowflake2
    defSnowflake(2, 300, 20);
    /* define snowflake3 */
    defSnowflake(3, 500, 5);
    /* snowflake4 */
    defSnowflake(4, 750, 13);
    /* snowflake5 */
    defSnowflake(5, 1050, 17);
 }
)