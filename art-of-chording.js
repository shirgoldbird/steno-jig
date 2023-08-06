// Wrap everything in a function to avoid polluting the global namespace.
(function() {

	TypeJig.WordSets.ArtOfChording = {};

	TypeJig.WordSets.ArtOfChordingOrder = [
		"Top row",
		"Bottom row",
		"*, D, and Z",
		"Basic number bar",
		"Vowels aw and ow; right side K",
		"Left side D, B, and L",
		"Both sides CH and TH",
		"Vowel i",
		"Both sides M",
		"Left side F and Q",
		"Vowels ay and oy",
		"Both sides N",
		"Vowel oh",
		"Both sides V",
		"Both sides G and J",
		"Both sides X",
		"Vowels you and oo",
		"Left side Y and Z",
		"Vowel ee",
		"Both sides SH",
		"Vowel eye",
		"Fingerspelling",
		"Unstressed Vowels",
		"-shun, -kshun",
		"-F as -s",
		"-mp",
		"-nch, -rch",
		"Inversion",
		"con-, com-",
		"W as v-",
		"-rve",
		"-ment",
		"-lge, -nge, -lk, -nk",
		"ent-, int-",
		"Prefixes and suffixes",
	];

	var AoC = TypeJig.WordSets.ArtOfChording;

	AoC["Top row"] = [
		"The hull is tough.",
		"You sat.",
		"Halt: pull it.",
		"Is it half sap?",
		"It is the shaft."
	];

	AoC["Bottom row"] = [
		"Huff, puff, and start.",
		"Cut up the rag.",
		"Hug a wet rat.",
		"Tug at the straps.",
		"You had a skull.",
		"You are a star of sorts.",
		"Is it a worse cut?"
	];

	AoC["*, D, and Z"] = [
		"He stopped the soft pug at the top of the steps.",
		"She pulled the cart.",
		"What is this?",
		"She can pet the cat, pug, and rat.",
		"They are roughed up.",
		"That is, well, that is part of it."
	];

	AoC["Basic number bar"] = [
		"She is 40.",
		"He had 500.",
		"Step 1: start.",
		"90210."
	];

	AoC["Vowels aw and ow; right side K"] = [
		"How are you always okay with cats?",
		"Should you be with her?",
		"Could you be with us?",
		"We would be with you.",
		"The rat was with the water.",
		"It is easy to be her after all."
	];

	AoC["Left side D, B, and L"] = [
		"Did you believe what she was about to do?",
		"Will you pick the raft and the deck?",
		"All right already, leave us out."
	];

	AoC["Both sides CH and TH"] = [
		"You crawl and crouch before you walk.",
		"This patch will be stretched.",
		"Etch a sketch.",
		"Earth is lovely. Earth is lovely. We will always love it.",
		"Will you catch the ball before it drops?",
		"Check the charts, okay?"
	];

	AoC["Vowel i"] = [
		"What do you think you are all about?",
		"Which tower dropped after the war?",
		"You’re sure that she would think to do that?",
		"I will be okay after all.",
		"Hi, I will be with you after this.",
		"Set it up by the water.",
		"Little Bart is a big turd.",
		"That cat is sour and will hiss at us.",
		"It is still lovely to live with you after all this tough stuff.",
		"I love you."
	];

	AoC["Both sides M"] = [
		"He is about to help me with my car.",
		"Stop the truck!",
		"What did you think would happen, mom?",
		"Help me out, would you?",
		"Are you more similar to me or to him?"
	];

	AoC["Left side F and Q"] = [
		"Let me ask you a question.",
		"I would request that you stop.",
		"The request is from dad, you should do it and be quick about it.",
		"If you walk to the mall, I will follow.",
		"This class will start with a pop quiz.",
		"Fill up the car before you leave for work!"
	];

	AoC["Vowels ay and oy"] = [
		"The soil there is sort of wet…",
		"She has such a pretty face.",
		"We sold 4/5 of their mugs this shift.",
		"You should come with a shirt and/or a dress.",
		"The date is set: 25/12/17.",
		"They blame the mayor for all his doubts, through and through.",
		"What lovely and soft fur. The cats, they’re so pretty!",
		"You should check the paper daily."
	];

	AoC["Both sides N"] = [
		"He is a boy-man, in my opinion.",
		"I can’t say what we should do or not, nothing is up to me in this case.",
		"On what condition would you continue to watch Bart?",
		"Come on, take any of them, and we will head out. If you do not make a choice, we will leave with nothing at all.",
		"I said you had a choice and you did not make it before we had to leave. I stated the condition and you failed to pick in a minute so you had to leave with nothing. This is not new or anything.",
		"What reason would you do that for?",
		"I will continue to work through the season, but the hours are so long.",
		"His/her opinions are so-so, I think.",
		"Want to play catch?"
	];

	AoC["Vowel oh"] = [
		"That is an important subject to learn.",
		"The wind blows North, not South.",
		"Will you leave tonight or tomorrow, do you think?",
		"I wrote to her but I do not think she will write back.",
		"Can you be there by tonight? I want to be done today."
	];

	AoC["Both sides V"] = [
		"Have you ever wanted to travel the world?",
		"I very much want to be on TV tomorrow when I am at the fair.",
		"Everybody, shut up!",
		"I vow to love you forever.",
		"Of course I am their son, have you met my dad?",
		"The choice is obvious: cut the cord.",
		"It is hard to talk out loud when you do not have vowels.",
		"Obviously I am not in town very often or else you would have met me before.",
		"There, there now, everyone will forget about this before you know it.",
		"The facts should be obvious, they are easy to prove.",
		"Am I in heaven?",
		"Pave the way for a new way to save lives.",
		"Have you been there very often since everyone left?",
		"I live with my parents.",
		"I covet your oven. I want to have it and when I do I will warm my rat with it."
	];

	AoC["Both sides G and J"] = [
		"What are you doing?",
		"Hello again friend, I hope you have had an interesting day.",
		"Do not hold a grudge against Jill if you can help it.",
		"Judges are not able to put me in jail, ha-ha!",
		"What an interesting beginning to the novel.",
		"I am going to the market tonight, will you join me?",
		"Jay left town the other day and has not come back.",
		"Jeff is leaving town tonight and I want to say goodbye.",
		"George would never tell you his age.",
		"Goodnight my love.",
		"There are several love languages.",
		"Goodbye old friend, we will miss you.",
		"I earn lots of interest every month.",
		"I am going to the gym to get gains. I go almost every day.",
		"Do not judge the gorge by how far down it goes, it is dangerous.",
		"When technology knows language as well as we do, we are in danger.",
		"Do you say gif similar to girl or jar?"
	];

	AoC["Both sides X"] = [
		"Let me give you an example you can see.",
		"I want more practice than you wrote.",
		"You should practice with the exercise part of the text.",
		"Open access is important to consider before throwing an event.",
		"Do not go in excess of limits set for good reason.",
		"I will examine the paper tomorrow.",
		"Did you get the x-ray back?",
		"If the shares drop more the exec will exit the company for sure.",
		"The examiner will be with you in a sec.",
		"This has been a terrible day, what could happen next?",
		"I would go except I hate that man.",
		"I would charge extra but you are exempt from this tax."
	];

	AoC["Vowels you and oo"] = [
		"He is beautiful. What, in particular, do you think is so beautiful about him?",
		"I am confused by pretty much everything but particularly how you expect us to work this out together.",
		"Do you understand what the stakes are? Are you actually understanding what this could do to us?",
		"My mother is a big fan of blue, but I prefer red. My dad is all about purple and my sister loves black.",
		"I am so glad to have two lovely kids that love me. They rule!",
		"I think we should not go into the cave before mom gets here.",
		"If you had bothered to show up to school you'd know about the quiz today!",
		"I am the lone student that had to take out a loan.",
		"This is confusing, I am not understanding anything you are saying.",
		"Dude, that is pure stupid. What are you doing?"
	];

	AoC["Left side Y and Z"] = [
		"I am in the zone, your talking will not get in my way even if you beg.",
		"When you are almost 14 you may start to get some zits. Do not fret, no one will see them as long as you do not go to school.",
		"I have an idea: why trouble your thoughts with things such as putting on pants? It is easy to walk the world with no pants at all. Go loose!",
		"It is not ideal, but I will take it off your hands.",
		"Why on earth do you bother with trying to getting into his group? He is such a knob.",
		"I have to zig-zag in the roads to get to work.",
		"That fence will zap you if you touch it.",
		"Yo dude, as the young people say. Why are you staring at me that way?",
		"I want to live in New York.",
		"Yum, you make awesome food.",
		"Yep, that is me all right."
	];

	AoC["Vowel ee"] = [
		"Please see back for more detail.",
		"These people can not be reasoned with!",
		"Define to me what you really want, what you really need.",
		"Are you ready to see this scary haunted house?",
		"Even if you get out of here, you will never be the same.",
		"I was born the year before your mother was born. What is your year of birth?",
		"How do you feel when people tell you that your company brings them joy?",
		"Let me tell you my story, I am sure you do not have anything else to do tonight that beats sharing a beer with a new friend.",
		"It was not anything I would do again, but I do not hate the fact that I was there.",
		"I feel at home with you and want to stay together forever.",
		"Are you really ready to tell these people about the many things you did on your trip?"
	];

	AoC["Both sides SH"] = [
		"The fish goes splish, splash, sploosh.",
		"I, um -- I am not so sure that you know what I'm telling you.",
		"Trish wishes that she could finish her work today and be done before the due date.",
		"This meal is so delicious, I could eat forever.",
		"English has spelling that no one wants to say that they get. It makes no sense!",
		"It is hard to measure how precious things are.",
		"He seems easy going but I have a suspicious feeling that he is not telling us everything.",
		"I always look for efficient ways to solve issues.",
		"This room is so spacious, I could fit a horse in here!",
		"I take issue with your stance.",
		"A lack of patience will crush hopes and dreams.",
		"You may not know this, but fish have scales on their flesh.",
		"That joke went way over his head -- woosh!"
	];

	AoC["Vowel eye"] = [
		"It is your right to say that but it can still hurt my feelings.",
		"I've never seen you shine like on the day you turned into a bride.",
		"Meet her at the door, she'll be kind to you for your stay.",
		"I find that being right does not always mean being happy.",
		"Well, bye then, it was nice seeing you.",
		"I'm so shy that every now and then I lie to get out of parties so that I can stay home.",
		"Who can find the time to act like they care?",
		"We'll have an eye on you..."
	];

	AoC["Fingerspelling"] = [
		"The quick brown fox jumps over the lazy dog.",
		"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		"Abcdefghijklmnopqrstuvwxyz",
		"Zyxwvutsrqponmlkjihgfedcba",
		"Grumpy wizards make toxic brew for the evil queen and jack.",
		"DO or DO NOT there is no TRY!",
		"DJs flock by when MTV ax quiz prog.",
		"STKPWHRAOEUFRPBLGTSDZ",
		"TH S KAOL TP-PL"
	];

	AoC["Unstressed Vowels"] = [
		"suppress", "delay", "corrupt", "superb", "sublime", 
		"cautious", "ruffle", "patted", "table", "tablet", 
		"effort", "omit", "sever", "favorable", "average", 
		"preference", "delicious", "delighted" 
	];

	AoC["-shun, -kshun"] = [
		"fashion", "ration", "passion", "ocean", "mansion", 
		"solution", "ration", "reaction", "section", "faction", 
		"action"
	];

	AoC["-F as -s"] = [
		"most", "just", "fast", "lisp", "mask", "risk", "trust", 
		"fasten", "boost", "castle", "spasm", "masts", "schism", 
		"glasses", "classes", "missed", "kissed", "kissing", 
		"waft", "waist", "waved", "forest", "of", "lost", 
		"loft", "lift", "list", "muffle", "muscle", "first", "its"	
	];

	AoC["-mp"] = [
		"hump", "pump", "wimp", "chomp", "lump", "clamp", 
		"vamp", "simple", "crumple", "sample", "ample"
	];

	AoC["-nch, -rch"] = [
		"arch", "search", "torch", "porch", "birch", "lurch", 
		"parched", "march", "church", "bunch", "bench", "pinch", 
		"punch", "ranch", "French", "lunch", "lurch", "bunch", 
		"punch", "children", "inch", "research"
	];

	AoC["Inversion"] = [
		"wait", "waiter", "sum", "summer", "discuss", "discussion",
		"design", "disrupt", "disruption", "display", "mistake",
		"insane", "beside"
	];

	AoC["con-, com-"] = [
		"compare", "common", "compound", "combat", "compute", 
		"computer", "commune", "community", "complete", 
		"commission", "comment", "commit", "complex", "command", 
		"combine", "complaint", "control", "contact", "contract", 
		"context", "concern", "confirm", "concept", "consider", 
		"consideration", "condition", "continue", "confident", 
		"confidence", "company", "communicate", "communication", 
		"contrast"
	];

	









})();  // Execute the code in the wrapper function.
