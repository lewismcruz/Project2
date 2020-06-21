INSERT INTO amember (id, amember_id,first_name, last_name, email, gender, _weight, height, active_mins, lifetime_total, carb_intake, protein_intake, fat_intake)
VALUES (1,	1,	"Robert",	"Smith",	"test1email@test.com",	"m",	185,	5.9,	15,	300,	1500,	300,	100);
VALUES (2,	2,	"Casey",	"Perry",	"test2email@test.com",	"m",	170,	5.7,	22,	405,	1200,	300,	100);
VALUES (3,	3,	"Jonathan",	"Stanbury",	"test3email@test.com",	"m",	187,	6.3,	23,	325,	2200,	300,	100);
VALUES (4,	4,	"Jorge",	"Ramos",	"test4email@test.com",	"m",	200,	5.2,	21,	432,	1500,	300,	100);
VALUES (5,	5,	"Stacy",	"George",	"test5email@test.com",	"f",	130,	5.8,	12,	652,	1200,	300,	100);
VALUES (6,	6,	"Joe",	"Still",	"test6email@test.com",	"m",	205,	6.2,	16,	345,	2200,	300,	100;)
VALUES (7,	7,	"Vanessa",	"Cameron",	"test7email@test.com",	"f",	125,	5.5,	18,	234,	1500,	300,	100);
VALUES (8,	8,	"Michael",	"Jordan",	"test8email@test.com",	"m",	210,	6.6,	35,	123,	1200,	300,	100);
VALUES (9,	9,	"Michael",	"Phelps",	"test9email@test.com",	"m",	180,	6.6,	45,	342,	2200,	300,	100);
VALUES (10,	10,	"Oscar",	"Grouch",	"test10email@test.com",	"m",	100,	3,	2,	56,	3000,	300,	100);


INSERT INTO friends_list (friend_id, first_name, last_name, email, gender, amember_id)
VALUES (1, "Scottie", "Pippen", "test35email@test.com", "m", 8);
VALUES (2, "Kermit", "Frog", "test36email@test.com", "m", 4);
VALUES (3, "Taylor", "Swift", "test37email@test.com", "f", 6);
VALUES (4, "Beyonce", "Knowles", "test38email@test.com", "f", 9);
VALUES (5, "Dora", "Explorer", "test39email@test.com", "f", 1);

INSERT INTO blog (entry_id, blogpost_title)
VALUES (1, "Blog title1");
VALUES (2, "Blog title2");
VALUES (3, "Blog title3");
VALUES (4, "Blog title4");
VALUES (5, "Blog title5");
VALUES (6, "Blog title6");
VALUES (7, "Blog title7");
VALUES (8, "Blog title8");
VALUES (9, "Blog title9");
VALUES (10, "Blog title10");

INSERT INTO goals (goal_id, category, descript, carbs_goal, protein_goal, fat_goal, calories, active_mins, activity_date, time_stamp)
VALUES (1,	"nutritional",	"increase protein intake",	800, 100, 1500,	45,	2020-03-04, 2020-03-04 00:00:01);
VALUES (2,	"activityTime",	"run additonal 10 mins",	850, 20, 80, 2600, 120, 2020-11-05,	2020-11-05 00:00:01);
VALUES (3,	"nutritional",	"decrease calorie intake",	1000, 200, 5000, 180, 2020-05-06, 2020-05-06 00:00:01);

INSERT INTO challenge (id, title, challenge_type, challenge_extend, challenge_status, amember_id, friend_id)
VALUES (1, "run with me", "activity", "y", "n", 8);
VALUES (2, "eat healthy with me", "nutritional", "y", "y", 3);
VALUES (3, "step with me", "activity", "y", "y", 5);










