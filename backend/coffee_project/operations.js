// const express=require("express")
// const favicon=require("serve-favicon")
// const path=require("path")
// const app=express()
// const cors=require("cors")
// app.use(cors())
// app.use(favicon(path.join(__dirname,"favicon.ico")))
// const mongoose=require("./mongoAtlas")
// const coffee=require("./schema")
// const reg=require("./reg")
// app.use(express.json())
// const multer=require("multer")
// app.use(express.static("public"))
// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"public/uploads")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })
// const upload=multer({storage:storage}).single("image")

// app.post("/",(req,resp)=>
//     {
//     upload(req,resp,(err)=>{
//         if(err)
//         {
//             console.log(err)
//         }
//         else
//         {
//             const data=new coffee({
//                 id:req.body.id,
//                 name:req.body.name,
//                 description:req.body.description,
//                 price:req.body.price,
//                 image:"http://localhost:5000/uploads/"+req.file.filename

//             })
//             data.save()
//             resp.send("Data save sucessfully")
//         }
//     })
// })
// app.get("/",async(req,resp)=>{
//    var data= await coffee.find()
//    resp.send(data)
// })

// // app.get("/:key",async(req,resp)=>{
// //     var data1= await coffee.find({id:req.params.key})
// //     resp.send(data1)
// //  })



// app.get("/:key", async (req, resp) => {
//     try {
//         const data1 = await coffee.find({ id: req.params.key });
//         resp.json(data1);
//     } catch (error) {
//         console.error('Error fetching product:', error);
//         resp.status(500).json({ message: "Error fetching product" });
//     }
// });

// //  app.post("/reg",async (req,resp)=>{
// //     const data2=new reg({ 
// //                 uname:req.body.uname,
// //                 upass:req.body.upass,
// //                 uemail:req.body.uemail,
// //                 umob:req.body.umob,
// //     })
// //            data2.save()
// //             resp.send("registration sucessfully")
// //  })
// app.post("/reg", async (req, resp) => {
//     const { uname, upass, uemail, umob } = req.body;
  
//     try {
//       const data2 = new reg({
//         uname,
//         upass,
//         uemail,
//         umob,
//       });
  
//       await data2.save();
//       resp.send("registration successfully");
//     } catch (error) {
//       console.error("Registration Error:", error);
//       resp.status(500).send("Registration failed");
//     }
//   });
  

// //  app.get("/reg",async(req,resp)=>{
// //     var data3= await reg.find()
// //     resp.send(data3)
// //  })

// //  app.get("/login",async(req,resp)=>{
// //     var appdata= await reg.findOne({ 
// //         uemail:req.body.uemail,
// //         upass:req.body.upass})
       
// //         if(appdata!="undefined")
// //         {  
// //           resp.send(true)
// //         }
// //         else
// //         {  
// //          resp.send(false)
// //         }
      
// //  })


// app.post("/login", async (req, resp) => {
//     const { uemail, upass } = req.body;
    
//     try {
//         const user = await reg.findOne({ uemail, upass });

//         if (user) {
//             resp.json(true);
//         } else {
//             resp.json(false);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         resp.status(500).json({ message: "Internal server error" });
//     }
// });


 
// app.listen(5000)


const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(favicon(path.join(__dirname, "favicon.ico"))); // Ensure favicon.ico is in the root directory
const mongoose = require("./mongoAtlas");
const coffee = require("./schema");
const reg = require("./reg");
app.use(express.json());
const multer = require("multer");
app.use(express.static("public")); // Ensure "public" directory exists

// Setup for multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads"); // Ensure "public/uploads" directory exists
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("image");

// POST route to upload product information
app.post("/", (req, resp) => {
  upload(req, resp, (err) => {
    if (err) {
      console.log(err);
      return resp.status(500).send("Error uploading image");
    } else {
      const data = new coffee({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: "http://localhost:5000/uploads/" + req.file.filename,
      });
      data
        .save()
        .then(() => resp.send("Data saved successfully"))
        .catch((error) => resp.status(500).send("Error saving data"));
    }
  });
});

// GET all items route
app.get("/", async (req, resp) => {
  try {
    const data = await coffee.find();
    resp.send(data);
  } catch (error) {
    resp.status(500).send("Error fetching products");
  }
});

// GET single item by ID route
app.get("/:key", async (req, resp) => {
  try {
    const data1 = await coffee.findOne({ id: req.params.key });
    if (data1) {
      resp.json(data1); // Return the single product
    } else {
      resp.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    resp.status(500).json({ message: "Error fetching product" });
  }
});

// POST route for user registration
app.post("/reg", async (req, resp) => {
  const { uname, upass, uemail, umob } = req.body;

  try {
    const data2 = new reg({
      uname,
      upass,  // Consider hashing the password for security
      uemail,
      umob,
    });

    await data2.save();
    resp.send("Registration successful");
  } catch (error) {
    console.error("Registration Error:", error);
    resp.status(500).send("Registration failed");
  }
});

// POST route for login
app.post("/login", async (req, resp) => {
  const { uemail, upass } = req.body;

  try {
    const user = await reg.findOne({ uemail, upass });

    if (user) {
      resp.json(true);
    } else {
      resp.json(false);
    }
  } catch (error) {
    console.error("Error:", error);
    resp.status(500).json({ message: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});