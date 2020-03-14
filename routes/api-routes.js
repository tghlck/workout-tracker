const router = require("express").Router();
const db = require("../models");

//route to get all workouts
router.get("/workouts", (req, res) => {
    db.Workout.find({}).then(workoutdata => {
        res.json(workoutdata);
    }).catch(err => {
        res.json(err);
    });
});

//update exercises
router.put("/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


router.get("/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;