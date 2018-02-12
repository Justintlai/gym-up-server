var models = require("../models");
var express = require("express");
var router = express.Router();
var DM = require("../modules/data-manager");

//default route to get users
router.get("/", function(req, res) {
    console.log("Request: Get User Profile!");
    var user = req.user;

    if (!user) {
        return res.status(400).send({
            status: 400,
            message: "No user id specified"
        });
    }

    DM.getUser(user.id, function(user) {
        res.status(200).send({
            status: 200,
            message: "User Profile!",
            user: user
        });
    });
});

// UPDATE a user
router.put("/", function(req, res) {
    console.log("Request: UPDATE User Profile!");
    var user = req.user;

    if (!user) {
        return res.status(400).send({
            status: 400,
            message: "No user id specified"
        });
    }

    var post = req.body;
    var newData = {};
    if (post.firstName) newData.firstName = post.firstName;
    if (post.lastName) newData.lastName = post.lastName;
    if (post.email) newData.email = post.email;
    if (post.password) newData.password = post.password;

    DM.updateUser(user.id, newData, function(user) {
        res.status(200).send({
            status: 200,
            message: "User Profile Updated!",
            user: user
        });
    });
});

// DELETE a user
router.delete("/", function(req, res) {
    console.log("Request: DELETE User Profile!");
    var user = req.user;
    if (!user) {
        return res.status(400).send({
            status: 400,
            message: "No session id specified"
        });
    }
    DM.deleteUser(user.id, function(deletedUser) {
        if (deletedUser) {
            res.status(200).send({ status: 200, message: "Deleted User" });
        } else {
            res.status(400).send({
                status: 400,
                message: "Can't delete User"
            });
        }
    });
});

module.exports = router;
