//------------Module Importation-------------//
// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import bcrypt module
const bcrypt = require("bcrypt");
// import multer module
const multer = require("multer");
const path = require("path");

// import mongoose module
const mongoose = require("mongoose");
// Connect APP to DB (homworkRestoDB)
mongoose.connect('mongodb://127.0.0.1:27017/homworkRestoDB');

//------------Express Application-------------//
// creates express application
const app = express();

//---------Model Importation-------------//
const Chef = require("./models/chef");
const Plat = require("./models/plat");
const User = require("./models/user");
const { url } = require("inspector");

// send JSON responses
app.use(bodyParser.json());
// Get Objects from Request
app.use(bodyParser.urlencoded({ extended: true}));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
// Folder Configuration
app.use('/images', express.static(path.join('backend/images')));

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
   }
   const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
    error = null;
}
cb(null, 'backend/images/plats')
},
filename: (req, file, cb) => {
const name = file.originalname.toLowerCase().split(' ').join('-');
const extension = MIME_TYPE[file.mimetype];
const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + 
extension;
cb(null, imgName);
}
});
 // DB Simulation plats
 let platsTab = [
    {id:1 , name: "Kouskous", description: "plat kouskous", price :12},
    {id:2 , name: "pizza", description: "plat pizza", price :10},
    {id:3 , name: "lablabi", description: "platlablabi", price :7}, 
    {id:4 , name: "makloub", description: "plat makloub", price :9}, 
    {id:5 , name: "libanais", description: "plat libanais", price :20}, 
];
// DB Simulation chefs
let chefsTab = [
    {id:1 , name: "Salah", experience: "5 ans", Speciality: "chef principale"},
    {id:2 , name: "Mohamed", experience: "4 ans", Speciality: "chef production"},
    {id:3 , name: "Karim", experience: "4 ans", Speciality: "chef hygiene"},
];

// DB Simulation users
let usersTab = [
    {id: 1 , name: "bilel",lastName: "mekni",email: "meknibilel@gmail.com",pwd: "aaaaaa",tel: "92114746", adresse:"ben arous"  },
    {id: 2 , name: "aymen",lastName: "mekni",email: "aymenbilel@gmail.com",pwd: "qqqqqq",tel: "92114000", adresse:"beja"  },
    {id: 3 , name: "nihed",lastName: "mekni",email: "nihedbilel@gmail.com",pwd: "nnnnnn",tel: "93000746", adresse:"beja"  },
];

    function generateId(T) {
        let max;
        if (T.length == 0) {
           max = 0; 
        } else{
            max = T[0].id;
            for (let i = 1; i < T.length; i++) {
               if (T[i].id >max) {
                max = T[i].id;
               }
                
            }
        }
        return max +1;
    } 

//---------------Business Logic----------------//
// Business Logic Get All Plats
app.get("/plats", (req, res) => {
    console.log("Here into BL: Get All Plats");
    Plat.find().then((docs) =>{
        console.log("Here data after search all plats",docs);
        res.json({plats : docs});
    })
});
// Business Logic:Add Plat
app.post("/plats",multer({ storage: storage }).single('img'), (req, res) => {
    console.log("Here into BL: Add Plat",req.body);
    const url = req.protocol + '://' + req.get('host');
    console.log("URL",url);
    // http://localhost :3000

    // let plat = req.body;
    // plat.id = generateId(platsTab);
    // platsTab.push(plat);
    // console.log("Here plat Tab",platsTab);
    // res.json({ message: "Plat Added With Success",isAdded:true});
    let plat = new Plat({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        avatar: url + "/images/" + req.file.filename,

    });
    plat.save((error,doc) =>{
        console.log("Here error",error);
        console.log("Here doc",doc);
        if (doc) {
            res.json({message: "Added with success"});
        } else {
           res.json({ message: "Error"}); 
        }
    
    });

});
// Business Logic:Edit Plat
app.put("/plats", (req,res) => {
    console.log("Here into BL: Edit Plat");
    let newPlat = req.body;
    console.log("Here Into BL: Edit Plat",newPlat);
    Plat.updateOne({_id: newPlat._id},newPlat).then((response)=>{
        console.log("Here after update plat",response);
        if (response.modifiedCount == 1) {
            res.json({message : `Plat N° ${newPlat._id} : Edited With success` })
            
        } else {
           res.json({message : `Not Edited` }); 
        }

    });
   
        
    }
);
// Business Logic:Get Plat By ID
app.get("/plats/:x", (req, res) => {
    // console.log("Here into BL: Get Plat By ID")
//     let id = req.params.id; 
//    let platObj = platsTab.find((elt) => {
//     return elt.id == id ;
//    });
//    res.json({plat : platObj})
let id =  req.params.x;
    console.log("Here into BL: Get Plat By ID",id);
    Plat.findOne({_id: id}).then((doc)=>{
        console.log("Here doc",doc);
        doc
        ? res.json({plat : doc})
        : res.json({message : "Plat does not exist"});
    });
}
);
// Business Logic:Delete Plat By ID
app.delete("/plats/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete plat By ID",id);
    Plat.deleteOne({_id : id}).then((response)=>{
        console.log("Here after delete",response);
        if (response.deletedCount == 1) {
            res.json({platsDeleted : true})
            
        } else {
            res.json({platsDeleted : false})
        }
    });
    

        
    }
   


);


//------------Chefs-------------------------//
// Business Logic Get All Chefs
app.get("/chefs", (req, res) => {
    console.log("Here into BL: Get All Chefs");
    Chef.find().then((docs)=>{
        console.log("Here data after search all chefs",docs);
    res.json({chefs : docs})
});
});
// Business Logic:Add Chef
app.post("/chefs", (req, res) => {
    console.log("Here into BL: Add Chef",req.body);
    // let chef = req.body;
    // chef.id = generateId(chefsTab);
    // chefsTab.push(chef);
    // console.log("Here plat Tab",chefsTab);
    // res.json({ status: "Chef Added With Success",isAdded:true});
    let chef = new Chef({
        name : req.body.name,
        experience : req.body.experience,
        Speciality : req.body.Speciality,
       
    
    });
    chef.save((error,doc)=>{
        console.log("Here error",error);
        console.log("Here doc",doc);
        if (doc) {
            res.json({message: "Added with success"});
        } else {
           res.json({ message: "Error"}); 
        }
    });

});
// Business Logic:Edit Chef
app.put("/chefs", (req,res) => {
    console.log("Here into BL: Edit Chef");
    let newChef = req.body;
    console.log("Here Into BL: Edit Chef",newChef);
    Chef.updateOne({_id:newChef._id}, newChef).then((response)=>{
        console.log("Here after update",response);
        if (response.modifiedCount == 1) {
            res.json({ message : `Chef N° ${newChef._id}: Edited With success`})
            
        } else {
            res.json({message :`Not Edited`});
        }

    });
    // for (let i = 0; i < chefsTab.length; i++) {
    //     if (chefsTab[i].id == newChef.id) {
    //       chefsTab[i] = newChef;
          
    //     res.json({message: `Plat N° ${newChef.id} : Edited width success`});
    //     break; 
    //     }
        
    }
);
// Business Logic:Get Chef By ID
app.get("/chefs/:x", (req, res) => {
    // console.log("Here into BL: Get Chef By ID");
    let id =  req.params.x;
    console.log("Here into BL: Get Chef By ID",id);
    Chef.findOne({_id: id}).then((doc)=>{
        console.log("here doc",doc);
        doc
        ? res.json({chef : doc})
        : res.json({message :"Chef does not exist"});

    });

//     let id = req.params.id; 
//    let chefObj = chefsTab.find((elt) => {
//     return elt.id == id ;
//    });
//    res.json({chef : chefObj})
});
// Business Logic:Delete chef By ID
app.delete("/chefs/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Chef By ID",id);
   Chef.deleteOne({ _id : id}).then((response)=>{
    console.log("Here after delete",response);
    if (response.deletedCount == 1) {
        res.json({deletedChef :true});
    } else {
        res.json({deletedChef : false});
    }
   })
});

//---------Business Logic : Signup----------//
app.post("/users/signup",multer({ storage: storage }).single('img'),(req,res) =>{
    console.log("Here into BL: Signup");
   const url = req.protocol + '://' + req.get('host');
    console.log("URL",url);
    // http://localhost :3000
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd)=>{
        console.log("here crypted pwd",cryptedPwd);
   
    // let user = req.body;
    // user.id = generateId(usersTab);
    // usersTab.push(user);
    // console.log("Here user Tab",usersTab);
    // res.json({message: "user Added With Success",isAdded:true});
    let user = new User({
        name : req.body.name,
        lastName : req.body.lastName,
        email : req.body.email,
        pwd :cryptedPwd,
        confirmPwd : req.body.confirmPwd,
        tel : req.body.tel,
        adresse : req.body.adresse,
        avatar: url + "/images/" + req.file.filename,
    });
    user.save((error,doc) =>{
        console.log("Here error",error);
        console.log("Here doc",doc);
        if (error) {
            if (error.errors.email) {
                res.json({message: "Email Exist"});
            }
        }
         else {
           res.json({message: "Added with success" }); 
        }
    });
});
    
});

//---------Business Logic : get All Users----------//
app.get("/users",(req,res) =>{
    console.log("here into BL: Get All users");
    res.json({users: usersTab});
})
//---------Business Logic : Delete Users----------//
app.delete("/users/:id",(req,res) =>{
let id = req.params.id;
console.log("here here into BL:Delete users",id);
let isDelete = false;
for (let i = 0; i < usersTab.length; i++) {
    if (usersTab[i].id == id) {
        usersTab.splice(i, 1);
        isDelete = true;
        break;
        
    }
  
}
res.json({isDeletedUsers : isDelete});
});

///----Business Logic : login-----------------///
app.post("users/login",(req,res)=>{
    
    User.findOne({email:req.body.email}).then((doc)=>{
       
        if (!doc) {
            res.json({msg: "0 "});
        }
      return  bcrypt.compare(req.body.pwd, doc.pwd);
    }).then((pwdResponse)=>{
        console.log("Here pwdResponse",pwdResponse);
        if (!pwdResponse) {
            res.json({msg: "1"});

        } else {
            res.json({msg: "2"});

            
        }
    });
});

//-------- Business Logic Search plats by name  and price-----------///
app.post("/plats/search", (req, res) =>{
    let platObj = req.body;
    console.log("Here Object",platObj);
    let findedPlats = platsTab.filter((obj) =>{
        return (obj.name == platObj.name ||
        obj.price == platObj.price 
        );
    });
    res.json({plats : findedPlats});
});


// --------------------App Exportation----------//
// make app importable from another files
module.exports = app; 