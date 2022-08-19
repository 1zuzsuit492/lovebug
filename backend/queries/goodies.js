const db = require("../db/dbConfig");

//SHOW ALL
const getAllGoodies = async () => {
    try {
        const goodies = await db.any("SELECT * from goodies");
        return goodies;
    } 
    catch (error) {
    return error;
    }
};

//GET ONE
const getGoodie = async (id) => {
    try {
        const goodie = await db.one("SELECT * FROM goodies WHERE id=$1", id);
        return goodie;
    } 
    catch (error) { 
    return error;
    }
};

//CREATE
const newGoodie = async (goodie) => {
    try {
      const newGoodies = await db.one(
        "INSERT INTO goodies (name, description, price, image, category) VALUES($1, $2, $3, $4 $5) RETURNING *",
        [
          goodie.name,
          goodie.description,
          goodie.price,
          goodie.image,
          goodie.category,
        ]
      );
      return newGoodies;
    } 
    catch (error) {
    return error;
    }
};

//DELETE
const deleteGoodie = async (id) => {
    try {
    const goodie = await db.one("DELETE FROM goodies WHERE id=$1 RETURNING *", id);
    return goodie;
    }
    catch (err) {
    return err;
    }
}

//UPDATE
const updateGoodie = async (id, goodie) => {
    try {
    const { name, description, price, image, category} = goodie
    const updatedGoodie = await db.one("UPDATE goodies SET name =$1, description=$2, price=$3, image=$4, category=$5 WHERE id=$6 RETURNING *", [name, description, price, image, category, id]);
    return updatedGoodie;
    } 
    catch (err){
    return err;
    }
}


module.exports = {
    getAllGoodies,
    getGoodie,
    newGoodie,
    deleteGoodie,
    updateGoodie};