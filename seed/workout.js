const models = require("../models");

module.exports = function() {
  return models.Workout.bulkCreate([
    {
      workoutId: 1,
      name: "Dumbbell Lunges Standing",
      bodyPart: "Legs",
      description: "."
    },
    {
      workoutId: 2,
      name: "Dumbbell Lunges Walking",
      bodyPart: "Legs",
      description:
        'Take two dumbbells in your hands, stand straight, feet about shoulder wide. Take one long step so that the front knee is approximately forming a right angle. The back leg is streched, the knee is low but doesn\'t touch the ground. "Complete" the step by standing up and repeat the movement with the other leg.'
    },
    {
      workoutId: 3,
      name: "Dumbbells on Scott Machine",
      bodyPart: "Arms",
      description: ""
    },
    {
      workoutId: 4,
      name: "Fly With Cable",
      bodyPart: "Chest",
      description: ""
    },
    {
      workoutId: 5,
      name: "Fly With Dumbbells",
      bodyPart: "Chest",
      description:
        "Take two dumbbells and lay on a bench, make sure the feet are firmly on the ground and your back is not arched, but has good contact with the bench. The arms are stretched in front of you, about shoulder wide. Bend now the arms a bit and let them down with a half-circle movement to the side. Without changing the angle of the elbow bring them in a fluid movement back up."
    },
    {
      workoutId: 6,
      name: "Fly With Dumbbells, Decline Bench",
      bodyPart: "Chest",
      description:
        "The exercise is the same as with a regular bench:\nTake two dumbbells and lay on a bench, make sure the feet are firmly on the ground and your back is not arched, but has good contact with the bench. The arms are stretched in front of you, about shoulder wide. Bend now the arms a bit and let them down with a half-circle movement to the side. Without changing the angle of the elbow bring them in a fluid movement back up."
    },
    {
      workoutId: 7,
      name: "French Press (skullcrusher) Dumbbells",
      bodyPart: "Arms",
      description:
        "Hold the dumbbells and lay down on a flat bench in such a way that around 1/4 of your head is over the edge. Stretch your arms with the weights and bend them so that the dumbbells are lowered (make sure they don't touch each other). Just before they touch your forehead, push them up.\nPay attention to your elbows and arms: only the triceps are doing the work, the rest of the arms should not move."
    },
    {
      workoutId: 8,
      name: "French Press (skullcrusher) SZ-bar",
      bodyPart: "Arms",
      description:
        "Hold the SZ-bar and lay down on a flat bench in such a way that around 1/4 of your head is over the edge. Stretch your arms with the bar and bend them so that the bar is lowered. Just before it touches your forehead, push it up.\nPay attention to your elbows and arms: only the triceps are doing the work, the rest of the arms should not move."
    },
    {
      workoutId: 9,
      name: "Good Mornings",
      bodyPart: "Legs",
      description: ""
    },
    {
      workoutId: 10,
      name: "Hammercurls",
      bodyPart: "Arms",
      description:
        "Hold two dumbbells and sit on a bench with a straight back, the shoulders are slightly rolled backwards. Your pals point to your body. Bend the arms and bring the weight up with a fast movement. Don't rotate your hands, as with the curls. Without any pause bring the dumbbell down with a slow, controlled movement.\nDon't swing your body during the exercise, the biceps should do all the work here. The elbows are at your side and don't move."
    },
    {
      workoutId: 11,
      name: "Hammercurls on Cable",
      bodyPart: "Arms",
      description:
        "Take a cable in your hands (palms parallel, point to each other), the body is straight. Bend the arms and bring the weight up with a fast movement. Without any pause bring it back down with a slow, controlled movement, but don't stretch completely your arms.\nDon't swing your body during the exercise, the biceps should do all the work here. The elbows are at your side and don't move."
    },
    {
      workoutId: 12,
      name: "Hyperextensions",
      bodyPart: "Back",
      description:
        "Lay on the hyperextension pad with the belly button just at the leading edge, the upper body can hang freely. Tense your whole back's muscles and bring your upper body up till it is horizontal, but not more. Go slowly down and don't relax your muscles."
    },
    {
      workoutId: 13,
      name: "Lateral Raises",
      bodyPart: "Shoulders",
      description: "."
    },
    {
      workoutId: 14,
      name: "Lateral Raises on Cable, One Armed",
      bodyPart: "Shoulders",
      description: "."
    },
    {
      workoutId: 15,
      name: "Leg Curls (laying)",
      bodyPart: "Legs",
      description:
        "Lay on a bench and put your calves behind the leg holder (better if they are hold on around the lower calves). Hold a grip on the bars to make sure the body is firmly in place. Bend your legs bringing the weight up, go slowly back. During the exercise the body should not move, all work is done by the legs."
    },
    {
      workoutId: 16,
      name: "Leg Curls (sitting)",
      bodyPart: "Legs",
      description: ""
    },
    {
      workoutId: 17,
      name: "Leg Curls (standing)",
      bodyPart: "Legs",
      description: ""
    },
    {
      workoutId: 18,
      name: "Leg Presses (narrow)",
      bodyPart: "Legs",
      description:
        "The exercise is very similar to the wide leg press:\nSit on the machine and put your feet on the platform so far apart  that you could just put another foot in between them. The feet are parallel and point up.\nLower the weight so much, that the knees form a right angle. Push immediately the platform up again, without any pause. When in the lower position, the knees point a bit outwards and the movement should be always fluid."
    },
    {
      workoutId: 19,
      name: "Leg Presses (wide)",
      bodyPart: "Legs",
      description:
        "Sit on the machine and put your feet on the platform, a bit more than shoulder wide. The feet are turned outwards by a few degrees.\nLower the weight so much, that the knees form a right angle. Push immediately the platform up again, without any pause. When in the lower position, the knees point a bit outwards and the movement should be always fluid."
    },
    {
      workoutId: 20,
      name: "Leg Press on Hackenschmidt Machine",
      bodyPart: "Legs",
      description: ""
    },
    {
      workoutId: 21,
      name: "Leg Raises, Lying",
      bodyPart: "Abs",
      description:
        "Lay down on a bench and hold onto the recliner with your hands to keep you stable. Hold your legs straight and lift them till they make an angle of about 45°. Make a short pause of 1 sec. and go slowly down to the initial position. To increase the intensity you can make a longer pause of 7 sec. every 5th time."
    },
    {
      workoutId: 22,
      name: "Leg Raises, Standing",
      bodyPart: "Abs",
      description:
        "Put your forearms on the pads on the leg raise machine, the body is hanging freely. Lift now your legs with a fast movement as high as you can, make a short pause of 1sec at the top, and bring them down again. Make sure that during the exercise your body does not swing, only the legs should move."
    },
    {
      workoutId: 23,
      name: "Long-Pulley (low Row)",
      bodyPart: "Back",
      description:
        "Sit down, put your feet on the supporting points and grab the bar with a wide grip. Pull the weight with a rapid movement towards your belly button, not upper. Keep your arms and elbows during the movement close to your body. Your shoulders are pulled together. Let the weight slowly down till your arms are completely stretched."
    },
    {
      workoutId: 24,
      name: "Long-Pulley, Narrow",
      bodyPart: "Back",
      description:
        "The exercise is the same as the regular long pulley, but with a narrow grip:\nSit down, put your feet on the supporting points and grab the bar with a wide grip. Pull the weight with a rapid movement towards your belly button, not upper. Keep your arms and elbows during the movement close to your body. Your shoulders are pulled together. Let the weight slowly down till your arms are completely stretched."
    },
    {
      workoutId: 25,
      name: "MGM Machine",
      bodyPart: "Back",
      description: ""
    },
    {
      workoutId: 26,
      name: "Negative Crunches",
      bodyPart: "Abs",
      description:
        "Sit yourself on the decline bench and fix your legs. Cross your arms over the chest and bring with a rolling movement your upper body up, go now without a pause and with a slow movement down again. Don't let your head move during the exercise."
    },
    {
      workoutId: 27,
      name: "Pull-ups",
      bodyPart: "Back",
      description:
        "Grab the pull up bar with a wide grip, the body is hanging freely. Keep your chest out and pull yourself up till your chin reaches the bar or it touches your neck, if you want to pull behind you. Go with a slow and controlled movement down, always keeping the chest out."
    },
    {
      workoutId: 28,
      name: "Pull Ups on Machine",
      bodyPart: "Back",
      description: ""
    },
    {
      workoutId: 29,
      name: "Rowing, Lying on Bench",
      bodyPart: "Back",
      description: ""
    },
    {
      workoutId: 30,
      name: "Rowing, Seated",
      bodyPart: "Back",
      description: ""
    },
    {
      workoutId: 31,
      name: "Rowing, T-bar",
      bodyPart: "Back",
      description:
        "The execution of this exercise is very similar to the regular bent over rowing, only that the bar is fixed here.\nGrab the barbell with a wide grip (slightly more than shoulder wide) and lean forward. Your upper body is not quite parallel to the floor, but forms a slight angle. The chest's out during the whole exercise. Pull now the barbell with a fast movement towards your belly button, not further up. Go slowly down to the initial position. Don't swing with your body and keep your arms next to your body."
    },
    {
      workoutId: 32,
      name: "Shoulder Press, Barbell",
      bodyPart: "Shoulders",
      description:
        "Sit on a bench, the back rest should be almost vertical. Take a barbell with a shoulder wide grip and bring it up to chest height. Press the weight up, but don't stretch the arms completely. Go slowly down and repeat."
    },
    {
      workoutId: 33,
      name: "Shoulder Press, Dumbbells",
      bodyPart: "Shoulders",
      description:
        "Sit on a bench, the back rest should be almost vertical. Take two dumbbells and bring them up to shoulder height, the palms and the elbows point during the whole exercise to the front. Press the weights up, at the highest point they come very near but don't touch. Go slowly down and repeat."
    },
    {
      workoutId: 34,
      name: "Shoulder Press, on Machine",
      bodyPart: "Shoulders",
      description: ""
    },
    {
      workoutId: 35,
      name: "Shoulder Press, on Multi Press",
      bodyPart: "Shoulders",
      description:
        "The exercise is basically the same as with a free barbell:\nSit on a bench, the back rest should be almost vertical. Take a bar with a shoulder wide grip and bring it down to chest height. Press the weight up, but don't stretch the arms completely. Go slowly down and repeat."
    },
    {
      workoutId: 36,
      name: "Shrugs, Barbells",
      bodyPart: "Shoulders",
      description:
        "Take a barbell and stand with a straight body, the arms are hanging freely in front of you. Lift from this position the shoulders as high as you can, but don't bend the arms during the movement. On the highest point, make a short pause of 1 or 2 seconds before returning slowly to the initial position.\nWhen training with a higher weight, make sure that you still do the whole movement!"
    },
    {
      workoutId: 37,
      name: "Shrugs, Dumbbells",
      bodyPart: "Shoulders",
      description:
        "Stand with straight body, the hands are hanging freely on the side and hold each a dumbbell. Lift from this position the shoulders as high as you can, but don't bend the arms during the movement. On the highest point, make a short pause of 1 or 2 seconds before returning slowly to the initial position.\nWhen training with a higher weight, make sure that you still do the whole movement!"
    },
    {
      workoutId: 38,
      name: "Sitting Calf Raises",
      bodyPart: "Calves",
      description:
        "Sit on a bench for calf raises and check that the feet are half free and that you can completely stretch the calf muscles down. Pull your calves up, going as far (up) as you can. Make at the highest point a short pause of 1 or 2 seconds and go down."
    },
    {
      workoutId: 39,
      name: "Sit-ups",
      bodyPart: "Abs",
      description:
        "Sit on a mat, your calves are resting on a bench, the knees make a right angle. Hold your hands behind your neck. Go now up with a rolling movement of your back, you should feel how the individual vertebrae lose contact with the mat. At the highest point, contract your abs as much as you can and hold there for 2 sec. Go now down, unrolling your back.\n "
    },
    {
      workoutId: 40,
      name: "Squats",
      bodyPart: "Legs",
      description:
        "Make sure you have put the barbell at a height where you can comfortably take it out and put it back in. Take it out and make yourself ready:\n\nThe bar is somewhat lower than your shoulders\nThe feet are quite apart and point out\nThe head is in your neck and looks up\nThe chest is out\nGo now slowly down, till your thighs are parallel with the floor, not lower. The knees point outwards, your butt, out. Make a small pause of 1 second and with as much energy as you can, push the weight up. Make a pause of 2 seconds and repeat."
    },
    {
      workoutId: 41,
      name: "Standing Calf Raises",
      bodyPart: "Calves",
      description:
        "Get onto the calf raises machine, you should able to completely push your calves down. Stand straight, don't make a hollow back and don't bend your legs. Pull yourself up as high as you can. Make a small pause of 1 - 2 seconds and go slowly down."
    },
    {
      workoutId: 42,
      name: "Triceps Extensions on Cable",
      bodyPart: "Arms",
      description:
        "Grab the cable, stand with your feet shoulder wide, keep your back straight and lean forward a little. Push the bar down, making sure the elbows don't move during the exercise. Rotate your hands outwards at the very end and go back to the initial position without pause."
    },
    {
      workoutId: 43,
      name: "Triceps Extensions on Cable With Bar",
      bodyPart: "Arms",
      description:
        "Grab the bar, stand with your feet shoulder wide, keep your back straight and lean forward a little. Push the bar down, making sure the elbows don't move during the exercise. Without pause go back to the initial position."
    },
    {
      workoutId: 44,
      name: "Triceps Machine",
      bodyPart: "Arms",
      description: "."
    },
    {
      workoutId: 45,
      name: "Upright Row, on Multi Press",
      bodyPart: "Shoulders",
      description:
        "The movements are basically the same as with an SZ-bar, but you use the bar on the multi press:\nStand straight, your feet are shoulder-width apart. Hold the bar with an overhand grip on your thighs, the arms are stretched. Lift the bar close to the body till your chin. The elbows point out so that at the highest point they form a V. Make here a short pause before going slowly down and repeating the movement."
    },
    {
      workoutId: 46,
      name: "Upright Row, SZ-bar",
      bodyPart: "Shoulders",
      description:
        "Stand straight, your feet are shoulder-width apart. Hold the SZ-bar with an overhand grip on your thighs, the arms are stretched. Lift the bar close to the body till your chin. The elbows point out so that at the highest point they form a V. Make here a short pause before going slowly down and repeating the movement."
    }
  ]);
};
