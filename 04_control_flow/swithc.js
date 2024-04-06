// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const monthInNums = 3;
const monthInStrings = "aug"

switch (monthInNums) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;

    default:
        console.log("Default case")
        break;
}

switch (monthInStrings) { // Prints default case
    case "jan":
        console.log("january")
        break;
    case "feb":
        console.log("february")
        break;
    case "march":
        console.log("march")
        break;
    case "april":
        console.log("april")
        break;
    case "may":
        console.log("may")
        break;

    default:
        console.log("Default case")
        break;
}