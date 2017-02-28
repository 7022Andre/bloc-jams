function forEach(array) {
    var revealPoint = function(index) {
        array[index].style.opacity = 1;
        array[index].style.transform = "scaleX(1) translateY(0)";
        array[index].style.msTransform = "scaleX(1) translateY(0)";
        array[index].style.WebkitTransform = "scaleX(1) translateY(0)";
    };
    for (var i = 0; i < array.length; i++) {
        revealPoint(i);
    }
}
