const express = require("express");

const { getAllGoodies, getGoodie, newGoodie, deleteGoodie, updateGoodie } = require("../queries/goodies")

const goodies = express.Router();

// All treats
goodies.get("/", async (request, response) => {
  console.log("GET request to /goodies");
  const allGoodies = await getAllGoodies();
  console.log(allGoodies)
  if (allGoodies.length === 0) {
    response.status(500).json({ error: "There are no goodies here! 😔" });
    return;
  }
  response.status(200).json(allGoodies);
});

// Show one treat by id
goodies.get("/:id", async (request, response) => {
  console.log("GET request to /goodies/:id");
  const goodie = await getGoodie(request.params.id);
  if (goodie.id) {
    response.status(200).json(goodie);
  } else {
    response.status(500).json({ error: "This treat 🧁 doesn't exist!"});
  }
});


goodies.post("/", async (request, response) => {
    const goodie = await newGoodie(request.body);
    response.status(200).json(goodie);
  }); //create new


// Delete item
goodies.delete("/:id", async (request, response) => {
  console.log("DELETE request to /goodies/:id");
  const deletedGoodie = await deleteGoodie(request.params.id);
  if (deletedGoodie.id) {
      response.status(200).json(deletedGoodie);
    } else {
        response.status(404).json("This treat 🧁 doesn't exist!");
    }
});

// Update
// goodies.put("/:id", async (req, res) => {
//     const updatedGoodie = await updateGoodie(req.params.id, req.body);
//     console.log("put /id")
//     if (updatedGoodie.id) {
//       res.status(200).json(updatedGoodie);
//     } else {
//       res.status(404).json(updatedGoodie);
//     }
//   });

  goodies.put("/:id", async (req, res) => {
    try {
      const updatedGoodie = await updateGoodie(req.params.id, req.body);
      res.status(200).json(updatedGoodie);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

module.exports = goodies;
