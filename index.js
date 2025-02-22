 const mongoose = require("mongoose");

  main()
  .then( (res)=>{
    console.log("connection succesfull");
  })
 .catch ((err) =>{
    console.log(err);
});

 async function main(){
     await mongoose.connect("mongodb://127.0.0.1:27017/amazon")
 }

 const bookSchema = new mongoose.Schema({
    title :{
      type : String ,
      required :true
    },
    author : {
      type :String,
    },
    Price : {
      type : Number,
    }
 });

 // creating collection 
const book =  mongoose.model("book" , bookSchema);

let book1 = new book({
   title : "rich dad poor dad",
   author : "yashwant khurana",
   price :456
});
book1.save().then(res=>{
   console.log("data Saved Scessfully");
}).catch(err=>{
   console.log("something went wrong");
})
  // book.updateOne({title :  "rich dad poor dad"} ,{title : "rich dad"})
  // .then((res) => {
  //   console.log(res);
  // }).catch((err)=>{
  //    console.log(err);
  // })
  //  let  id = "67b3057a3b96780971acaf89"
  // book.findByIdAndUpdate( "67b3057a3b96780971acaf89" , { title : "vikas"}).then(res=>{
  //   console.log(res);
  // }).catch((err) =>{
  //    console.log(err);
  // })

/* book.insertMany([
  {
      title : "vikas agrawal " ,
      author : "vikas" ,
      price : 456
  },
  {
    title : "Rohit Sonwar " ,
    author : "Rohit" ,
    price : 4123
},
{
  title : "ShreeMaya" ,
  author : "Shree" ,
  price : 4561
}
])
.then((res) =>{console.log("result")})
.catch((err)=>{console.log("error")})
 */

//book.findById("66b1d261cbdf8cb2aa62c0ed").then((data)=>{console.log(data);})
// .catch((err) =>{console.log(err)});

// book.updateOne({author :"Rohit"}, {author : "PremAgrawal"}).then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)})

 



