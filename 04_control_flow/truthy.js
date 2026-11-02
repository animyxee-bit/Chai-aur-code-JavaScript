 const Useremail = function(){}
 if (Useremail) {
    console.log("Email mil gyii");
    
 } else{
    console.log("System fatt gyaa");
    
 }

// falsy value

//false, 0, -0, BigInt 0n, null, undefined, NaN, ""

//truthy value

//true, "0", 'false', " one space", [], {}, function(){}

const array = []
if (array.length === 0) {
   console.log("kuch ni hai");
}

const khaliobject = {}
if (Object.keys(khaliobject).length === 0) {
   console.log("object khaali hai");
   
}