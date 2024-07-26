
const coding = ["cpp", "js", "java", "py"]

coding.forEach(function(item){
    // console.log(item)
})

// coding.forEach((val)=>(console.log(val)))
// coding.forEach(val=>console.log(val))

function printMe(text){
    // console.log(text)
}

// coding.forEach(printMe)

coding.forEach((value, index, arr)=>{
    // console.log(value, index, arr)
})

const programming =[
    {
        name: "javascript",
        extension: "js"
    },
    {
        name: "python",
        extension: "py"
    },
    {
        name: "java",
        extension: "java"
    }
]

programming.forEach(element => {
    console.log(element["name"])
});