//      #     
//     ##    
//    ###   
//   ####  
//  ##### 
// ######

var height = 6;
// var space = height;
function printPyramid(height){
for (var i =1; i<=height; i++) {
    
    var baseString = "#"
    var firstHalfString = "#";
    var firstHalfString = baseString.repeat(i).padStart(height, " ");
    var secondHalfString = baseString.repeat(i);
    console.log(firstHalfString + secondHalfString);

}
}
printPyramid(53);