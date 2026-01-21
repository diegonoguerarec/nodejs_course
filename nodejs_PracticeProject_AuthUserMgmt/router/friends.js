const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{
  // Update the code here
  res.send(friends);
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  // Update the code here

  let email = req.params.email;

  res.send(friends[email]);
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
  // Check if email is provided
  if (req.body.email) {
    // Update friends details
    friends[req.body.email] = {
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "DOB": req.body.DOB,
    };
    res.send(`The user ${req.body.firstName} has been added!`);
  } else {
    res.send("Email is required");
  }
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here
  
  let email = req.params.email;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let DOB = req.body.DOB;

  let friendToUpdate = friends[email];

  if (friendToUpdate) {
    if (firstName) {
      friendToUpdate["firstName"] = firstName;
    }

    if (lastName) {
      friendToUpdate["lastName"] = lastName;
    }

    if (DOB) {
      friendToUpdate["DOB"] = DOB;
    }

    res.send(`Friend with email ${email} updated!`);
  } else {
    res.send(`Unable to find friend with email ${email}`);
  }
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  let email = req.params.email;

  delete friends[email];

  res.send(`Friend with email ${email} deleted!`);
});

module.exports=router;
