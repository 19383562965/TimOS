const chat = document.getElementById("chat");
const input = document.getElementById("text-chat");
const btn = document.getElementById("chat-btn");
const chatVersion = document.getElementById("chat-version")

//Animation
function glowEffect(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return; // Exit if element not found

    // Add smooth transition
    el.style.transition = "box-shadow 0.8s ease-in-out";

    setTimeout(() => {
        el.style.boxShadow = `
            -6px 6px 6px rgb(141, 159, 255),
            6px -6px 6px rgb(255, 185, 234),
            -4px -4px 8px rgb(255, 214, 113),
            4px 4px 8px rgb(198, 134, 255)
        `;
    }, 0);

    setTimeout(() => {
        el.style.boxShadow = `
            -6px -6px 6px rgb(141, 159, 255),
            6px 6px 6px rgb(255, 185, 234),
            -4px 4px 8px rgb(255, 214, 113),
            4px -4px 8px rgb(198, 134, 255)
        `;
        el.style.transition = "box-shadow 0.8s ease-in-out";
    }, 700);

    setTimeout(() => {
        el.style.boxShadow = `
            6px -6px 6px rgb(141, 159, 255),
            -6px 6px 6px rgb(255, 185, 234),
            4px 4px 8px rgb(255, 214, 113),
            -4px -4px 8px rgb(198, 134, 255)
        `;
    }, 1300);

    setTimeout(() => {
        el.style.boxShadow = "none";
    }, 1900);
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
btn.onclick = handleAction;
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleAction();
    }
});

async function handleAction() {
    let realQuestion = input.value;
    let question = input.value.toLowerCase().trim();
    let answer = "";
    let answerFormat = "text";

    // Hello
    if (["hello", "hi", "hey", "what's up", "sup", "yo", "hello!", "hi!", "hey!", "what's up!", "sup!", "yo!"].includes(question)) {
        answer = getRandom(["Hi!", "Hello!", "Hey!"]) + " " + getRandom(["How can I help you?", "Do you need any help?", "What can I help you with?"]);
    }
    // Hello French
    else if (["bonjour", "bonjour!", "salut", "salut!"].includes(question)) {
        answer = getRandom(["bonjour!", "salut!"]) + " " + `${getRandom(["Sorry", "I'm sorry", "Pardon"])} but ${getRandom(["I don't speak French", "Je ne parle pas francais"])}${getRandom(["!", "."])}`;
    }
    // Hello German
    else if (["hallo", "hallo!", "guten morgen", "guten morgen!", "guten tag", "guten tag!", "guten abend", "guten abend!"].includes(question)) {
        answer = getRandom(["Hallo!", "Hello!"]) + " " + `${getRandom(["Sorry", "I'm sorry", "Entschuldigung"])} but ${getRandom(["I don't speak German", "Ich spreche kein Deutsch"])}${getRandom(["!", "."])}`;
    }
    // Hello Luxembourgish
    else if (["moien"].includes(question)) {
        answer = getRandom(["Hi!", "Moien!"]) + " " + `${getRandom(["Sorry", "I'm sorry"])} but ${getRandom(["I don't speak Luxembourgish"])}${getRandom(["!", "."])}`;
    }
    // Thank you
    else if (["thank you", "thanks", "thank u", "ok", "okey", "k", "thank you very much", "thank you!", "thanks!", "thank u!", "ok!", "okey!", "k!", "thank you very much!"].includes(question)) {
        answer = getRandom(["No problem!", "No worries!"]);
    }
    // Who created you?
    else if (["who is your creator", "who created you", "who is your creator?", "your creator", "who is your creator?", "who created you?", "your creator", "your creator?"].includes(question)) {
        answer = getRandom(["Good question!", ""]) + " " + getRandom(["I was created by", "My creator is"]) + " a person who doesn't want to reveal his name.";
    }
    // How are you?
    else if (["how are you?", "how are you", "what's up?", "how's it going?", "how have you been?", "how are things?", "how's life?", "how's everything?", "what's new?", "how are you doing?", "you good?", "how's your day been?", "what's up", "how's it going", "how have you been", "how are things", "how's life", "how's everything", "what's new", "how are you doing", "you good", "how's your day been"].includes(question)) {
        answer = getRandom(["I'm doing great!", "I'm fine, thanks!", "I'm doing well!"]);
    }
    // Random number
    else if (["random number", "tell me a random number"].includes(question)) {
        let num = getRandom([10, 100, 1000, 10000]);
        answer = `Random number from 1 to ${num}: ${Math.floor(Math.random() * num) + 1}`;
    }
    // What can you do
    else if (["what can you do?"].includes(question)) {
        answer = getRandom(["I can do many things", "I have many functions"]) + ", for example " + getRandom(["I can tell you a joke", "I can tell you a fun fact"]) + "!";
    }
    // Tell a joke
    else if (["tell a joke", "joke", "tell me a joke"].includes(question)) {
        answer = getRandom(["why don't scientists trust atoms? because they make up everything",
            "why did the scarecrow win an award? because he was outstanding in his field",
            "why don't skeletons fight each other? they don't have the guts",
            "what do you call fake spaghetti? an impasta",
            "why did the bicycle fall over? because it was two-tired",
            "what do you call cheese that isn't yours? nacho cheese",
            "why did the tomato turn red? because it saw the salad dressing",
            "how does a penguin build its house? igloos it together",
            "why did the math book look sad? because it had too many problems",
            "what do you call a belt made of watches? a waist of time",
            "why did the golfer bring two pairs of pants? in case he got a hole in one",
            "what do you call a factory that makes okay products? a satisfactory",
            "why can't your nose be 12 inches long? because then it would be a foot",
            "how do you organize a space party? you planet",
            "why did the coffee file a police report? it got mugged",
            "what's orange and sounds like a parrot? a carrot",
            "why was the computer cold? it left its Windows open",
            "how do cows stay up to date with current events? they read the moos-paper",
            "what do you call an alligator in a vest? an investigator",
            "why did the cookie go to the hospital? because it felt crummy"]);
    }
    else if (["tkwebos"].includes(question)) {
        answer = "Here is a picture of an TKWebOS default wallpaper!";
        Source = "http://127.0.0.1:5500/images/wallpapers/background_three.jpg"
        answerFormat = "image"
    }
    else if (["iframe"].includes(question)) {
        answer = "Here is a picture of an TKWebOS default iframe!";
        Source = "https://ionic.io/ionicons"
        answerFormat = "iframe"
    }
    else if (["dynamic island", "island", "island dynamic"].includes(question)) {
        glowEffect("dynamic-island");
        answer = "Dynamic Island is a unique interactive feature that blends hardware and software on the screen. It changes shape and size to show alerts, notifications, and live activities like music playback or timers. Users can interact with ongoing tasks without leaving their current app. With smooth animations and adaptive design, Dynamic Island makes the interface feel more lively and intuitive."
    }
    else if (["fun fact"].includes(question)) {
        answer = "Did you know that " + getRandom(["octopuses have three hearts and blue blood",
            "bananas are radioactive because they contain potassium-40",
            "a day on Venus is longer than a year on Venus",
            "honey never spoils—jars found in ancient tombs are still edible",
            "wombats have cube-shaped poop",
            "sharks existed before trees",
            "there are more possible games of chess than atoms in the observable universe",
            "a group of flamingos is called a flamboyance",
            "the Eiffel Tower can grow about 15 cm taller in summer due to heat expansion",
            "sloths can hold their breath longer than dolphins",
            "tardigrades (water bears) can survive in outer space",
            "the human nose can remember about 50,000 different scents",
            "butterflies taste with their feet",
            "some turtles can breathe through their butts",
            "the shortest war in history lasted 38-45 minutes",
            "cows have best friends and get stressed when separated",
            "the fingerprints of a koala are almost identical to a human's",
            "there's a species of jellyfish that is biologically immortal",
            "the Moon is slowly drifting away from Earth by about 3.8 cm per year",
            "a cloud can weigh more than a million kilograms",
            "sea otters hold hands while sleeping so they don't drift apart",
            "scotland has 421 words for snow",
            "your stomach gets a new lining every few days to avoid digesting itself",
            "there are more trees on Earth than stars in the Milky Way",
            "some metals explode when they touch water like sodium",
            "the average person walks the equivalent of about five times around the world in their lifetime",
            "ants don't have lungs",
            "the largest living structure on Earth is the Great Barrier Reef",
            "dolphins have names for each other",
            "a bolt of lightning is five times hotter than the surface of the Sun"]) + "." + getRandom(["🤔", ""])
    }
    else if (["dwhat time is it?", "what time is it", "time", "tell me the time", "tell me time"].includes(question)) {
        answer = "Sorry, but I don't have access to real time data, but you can always check the time on the top right corner." + getRandom(["👀", ""])
    }
    else if (question.includes("open") && question.includes("settings")) {

        glowEffect("settings-window");
        glowEffect("settings");

        answerFormat = "tkwebosText"

        document.getElementById("settings").click();
        answer = "<span style='font-weight:bolder;color:rgba(255,255,255,0.4);'>TKWebOS<ion-icon name='desktop-outline'></ion-icon></span><br>" + getRandom(["Opened", "Straight away!"])
    }
    else if (question.includes("open") && question.includes("clock")) {

        glowEffect("clock-window");
        glowEffect("clock");

        document.getElementById("clock").click();
        answerFormat = "tkwebosText"
        answer = "<span style='font-weight:bolder;color:rgba(255,255,255,0.4);'>TKWebOS<ion-icon name='desktop-outline'></ion-icon></span><br>" + getRandom(["Opened", "Straight away!"])
    }
    else if (question.includes("open") && question.includes("browser")) {

        glowEffect("browser-window");
        glowEffect("browser");

        document.getElementById("browser").click();
        answer = "<span style='font-weight:bolder;color:rgba(255,255,255,0.4);'>TKWebOS<ion-icon name='desktop-outline'></ion-icon></span><br>" + getRandom(["Opened", "Straight away!"])
    }
    else if (question.includes("search")) {
        const urlRegex = /((https?:\/\/)?(www\.)?[^\s]+\.[^\s]{2,})/g;
        const urls = realQuestion.match(urlRegex);
        if (urls === null) {
            answerFormat = "wiki"
        }
        else {
            document.getElementById("browser").click();
            document.getElementById("browser-search").value = urls;
            document.getElementById("browser-search-btn").click();
            answer = getRandom(["Sure!", "No problem!"]) + "<br><span class='browser-chat-link'>" + urls + "</span>"
            glowEffect("search-parent");
            glowEffect("browser");
        }
    }
    // Default fallback
    else {
        let modelAnswer = getModelAnswer(question);

        if (modelAnswer) {
            answer = modelAnswer;
        }
        else { answerFormat = "wiki" }
    }

    if (answerFormat === "text") {
        chat.innerHTML += "<p class='chat-question'>" + realQuestion + "</p>" +
            "<p class='chat-answer'>" + answer + "</p>";
    }
    else if (answerFormat === "tkwebosText") {
        chat.innerHTML += "<p class='chat-question'>" + realQuestion + "</p>" +
            "<p class='chat-answer tkkwebos'>" + answer + "</p>";
    }
    else if (answerFormat === "image") {
        chat.innerHTML += "<p class='chat-question'>" + realQuestion + "</p>" + "<p class='chat-answer'>" + "<img src=" + Source + "></p>";
        chat.innerHTML += "<p class='chat-answer'>" + answer + "</p>";
    }
    else if (answerFormat === "iframe") {
        chat.innerHTML += "<p class='chat-question'>" + realQuestion + "</p>" + "<p class='chat-answer'>" + "<iframe src=" + Source + "></iframe></p>";
        chat.innerHTML += "<p class='chat-answer'>" + answer + "</p>";
    }
    else if (answerFormat === "wiki") {
        const wikiData = await getWikiAnswer(question);

        chat.innerHTML += "<p class='chat-question'>" + realQuestion + "</p>";

        // Show image ONLY if it exists
        if (wikiData.image) {
            chat.innerHTML += "<p class='chat-answer'><img src='" + wikiData.image + "' style='max-width:200px;border-radius:8px;'></p>";
        }

        chat.innerHTML +=
            "<p class='chat-answer'>" +
            "<span style='font-weight:bolder;color:rgba(255,255,255,0.4);'>Powered by Wikipedia</span><br>" +
            wikiData.text +
            "</p>";
    }
    chat.scrollTo({
        top: chat.scrollHeight,
        behavior: "smooth"
    });

    input.value = ""; // Clear input
    btn.innerHTML = "<ion-icon name='arrow-up-outline'>"
    answerMemmoryOne
};

//SIMPLE MODEL SIMPLE MODEL SIMPLE MODEL SIMPLE MODEL SIMPLE MODEL SIMPLE MODEL
// Simple text model
const basicModel = [
    {
        "patterns": ["hello", "hi", "hey", "yo", "good morning", "good evening"],
        "responses": [
            "Hello! How can I help you?",
            "Hi there!",
            "Hey! What can I do for you?",
            "Hello! Nice to see you."
        ]
    },
    {
        "patterns": ["how are you", "how are you doing", "how is it going", "you good"],
        "responses": [
            "I'm doing great!",
            "I'm fine, thanks!",
            "All good here!",
            "I'm doing well. How about you?"
        ]
    },
    {
        "patterns": ["bye", "goodbye", "see you", "later"],
        "responses": [
            "Goodbye!",
            "See you later!",
            "Have a great day!",
            "Take care!"
        ]
    },
    {
        "patterns": ["thank you", "thanks", "thx", "appreciate it"],
        "responses": [
            "You're welcome!",
            "No problem!",
            "Glad I could help!",
            "Anytime!"
        ]
    },
    {
        "patterns": ["sorry"],
        "responses": [
            "No worries!",
            "It's okay!",
            "Don't worry about it."
        ]
    },
    {
        "patterns": ["what is your name", "who are you"],
        "responses": [
            "I'm a chatbot assistant.",
            "You can call me your assistant.",
            "I'm a simple AI chatbot."
        ]
    },
    {
        "patterns": ["what can you do", "your abilities", "help me"],
        "responses": [
            "I can chat, answer questions, and help with information.",
            "I can talk with you and look up information.",
            "I can answer questions and help you learn things."
        ]
    },
    {
        "patterns": ["bored", "i am bored", "nothing to do"],
        "responses": [
            "Maybe watch a movie or listen to music.",
            "You could try a game or go for a walk.",
            "How about learning something new today?"
        ]
    },
    {
        "patterns": ["sad", "i feel sad", "depressed", "unhappy"],
        "responses": [
            "I'm sorry to hear that.",
            "I hope things get better soon.",
            "Maybe talking to someone you trust could help."
        ]
    },
    {
        "patterns": ["tired", "sleepy"],
        "responses": [
            "Maybe you should get some rest.",
            "A short break could help.",
            "Don't forget to take care of yourself."
        ]
    },
    {
        "patterns": ["hungry", "food", "what should i eat"],
        "responses": [
            "Maybe try something healthy and balanced.",
            "How about a light meal or a snack?",
            "Don't forget to drink water too!"
        ]
    },
    {
        "patterns": ["weather"],
        "responses": [
            "I can't check real-time weather, but a weather app can help.",
            "Please check your local weather app for accurate information."
        ]
    },
    {
        "patterns": ["time", "what time is it"],
        "responses": [
            "I don't have real-time access, but you can check your device clock.",
            "Please check your system time."
        ]
    },
    {
        "patterns": ["date", "today's date"],
        "responses": [
            "You can check your device for the current date."
        ]
    },
    {
        "patterns": ["joke", "tell me a joke"],
        "responses": [
            "Why did the computer get cold? It forgot to close its Windows.",
            "Why do programmers prefer dark mode? Because light attracts bugs.",
            "Why did the phone go to therapy? It had too many issues."
        ]
    },
    {
        "patterns": ["fun fact", "fact"],
        "responses": [
            "Octopuses have three hearts.",
            "Bananas are slightly radioactive.",
            "Honey never spoils."
        ]
    },
    {
        "patterns": ["music"],
        "responses": [
            "Music is a great way to relax.",
            "What kind of music do you like?"
        ]
    },
    {
        "patterns": ["movie", "movies", "film"],
        "responses": [
            "Movies are a great way to relax.",
            "What genre do you like?"
        ]
    },
    {
        "patterns": ["game", "games", "gaming"],
        "responses": [
            "Games can be really fun!",
            "What kind of games do you play?"
        ]
    },
    {
        "patterns": ["learn", "study", "education"],
        "responses": [
            "Learning something new every day is a great habit.",
            "What would you like to learn about?"
        ]
    },
    {
        "patterns": ["who made you", "who created you", "your creator"],
        "responses": [
            "I was created by a developer.",
            "A human developer built me."
        ]
    },
    {
        "patterns": ["are you real", "are you human"],
        "responses": [
            "I'm not human, I'm an AI chatbot.",
            "I'm a program designed to chat with you."
        ]
    },
    {
        "patterns": ["love you"],
        "responses": [
            "That's kind of you!",
            "I appreciate that!"
        ]
    },
    {
        "patterns": ["help"],
        "responses": [
            "Sure! What do you need help with?",
            "I'm here to help. What do you need?"
        ]
    },
    {
        "patterns": ["good morning", "morning"],
        "responses": [
            "Good morning! How did you sleep?",
            "Morning! Ready for a new day?",
            "Good morning! What's your plan today?"
        ]
    },
    {
        "patterns": ["good night", "night", "sleep well"],
        "responses": [
            "Good night! Sweet dreams!",
            "Sleep tight!",
            "Good night! Rest well for tomorrow."
        ]
    },
    {
        "patterns": ["excited", "happy", "joyful", "glad"],
        "responses": [
            "That's awesome to hear!",
            "Yay! Keep the positive vibes going!",
            "Happiness looks good on you!"
        ]
    },
    {
        "patterns": ["bored at home", "nothing to do at home"],
        "responses": [
            "Maybe try cooking something new.",
            "How about a DIY project?",
            "You could start a small hobby or craft."
        ]
    },
    {
        "patterns": ["lonely", "feeling lonely", "i am alone"],
        "responses": [
            "I'm here to chat with you.",
            "Sometimes reaching out to a friend helps.",
            "How about joining an online community?"
        ]
    },
    {
        "patterns": ["stress", "stressed", "anxious", "worried"],
        "responses": [
            "Take a deep breath. Everything will be okay.",
            "Maybe a short walk or some music can help you relax.",
            "Remember to take small breaks and care for yourself."
        ]
    },
    {
        "patterns": ["funny", "make me laugh", "humor"],
        "responses": [
            "Why did the programmer quit his job? Because he didn't get arrays.",
            "Why was the math book sad? It had too many problems.",
            "Want me to tell a silly joke?"
        ]
    },
    {
        "patterns": ["sports", "football", "basketball", "soccer", "tennis"],
        "responses": [
            "Sports are great for energy and focus!",
            "Do you play any sports?",
            "Who's your favorite team or player?"
        ]
    },
    {
        "patterns": ["weather today", "is it raining", "sunny", "cloudy"],
        "responses": [
            "I can't check real-time weather, but hope it's nice outside!",
            "Weather can change fast, so keep an eye out!"
        ]
    },
    {
        "patterns": ["movies to watch", "recommend a movie", "film suggestion"],
        "responses": [
            "Have you tried watching a classic like Inception or The Matrix?",
            "Animated movies can be fun too! Ever seen Coco?",
            "Comedy or action? I can suggest something!"
        ]
    },
    {
        "patterns": ["music recommendation", "song suggestion", "play music"],
        "responses": [
            "Maybe try some jazz or lo-fi beats to relax.",
            "Pop music can be fun! How about a top hit?",
            "Do you like instrumental or vocal songs?"
        ]
    },
    {
        "patterns": ["i love you", "love you", "luv you"],
        "responses": [
            "Aww, that's sweet!",
            "Thanks! I appreciate that!",
            "Feeling appreciated is always nice 🙂"
        ]
    },
    {
        "patterns": ["relationship advice", "love advice", "partner", "dating"],
        "responses": [
            "Communication is key in any relationship.",
            "Always be honest and listen carefully.",
            "Remember, mutual respect matters the most."
        ]
    },
    {
        "patterns": ["study tips", "learn faster", "concentration"],
        "responses": [
            "Break your study into chunks and take short breaks.",
            "Active recall and repetition really help with learning.",
            "Make notes and explain concepts to yourself out loud."
        ]
    },
    {
        "patterns": ["motivation", "i need motivation", "inspire me", "push me"],
        "responses": [
            "Every small step counts, keep going!",
            "Believe in yourself and take it one step at a time.",
            "You’re capable of more than you think!"
        ]
    },
    {
        "patterns": ["game recommendation", "fun game", "play a game"],
        "responses": [
            "Maybe try a puzzle game or something relaxing.",
            "Video games can be fun, but remember to take breaks!",
            "Board games are also a great way to pass time."
        ]
    },
    {
        "patterns": ["favorite color", "color preference", "what color do you like"],
        "responses": [
            "I like all colors equally!",
            "Colors are fun! Do you have a favorite?",
            "Bright colors make me happy 🙂"
        ]
    },
    {
        "patterns": ["fun fact", "interesting fact", "did you know"],
        "responses": [
            "Did you know sea otters hold hands while sleeping to not drift apart?",
            "A day on Venus is longer than a year on Venus!",
            "Honey never spoils, even after thousands of years."
        ]
    },
    {
        "patterns": ["do you sleep", "are you awake", "awake"],
        "responses": [
            "I don't sleep, so I'm always ready to chat!",
            "I'm here 24/7, no naps required 🙂",
            "Sleep is for humans, I just chat!"
        ]
    },
    {
        "patterns": ["news", "latest news", "headlines"],
        "responses": [
            "I can't fetch live news, but you can check your favorite news site.",
            "Always good to stay updated with verified sources!"
        ]
    },
    {
        "patterns": ["fun things to do", "activities", "bored ideas"],
        "responses": [
            "Try drawing, writing, or exploring a new hobby.",
            "Maybe go for a walk or call a friend.",
            "You could watch a documentary or learn a new skill online."
        ]
    },
    {
        "patterns": ["exercise", "workout", "gym"],
        "responses": [
            "Exercise keeps your body and mind healthy!",
            "Even a short walk is better than nothing.",
            "Do you prefer cardio or strength training?"
        ]
    },
    {
        "patterns": ["coding", "programming", "javascript", "python"],
        "responses": [
            "Coding is a super useful skill these days!",
            "What project are you working on?",
            "Learning by building small projects works best."
        ]
    },
    {
        "patterns": ["travel", "vacation", "trip", "holiday"],
        "responses": [
            "Travel is a great way to learn and relax.",
            "Do you have a dream destination?",
            "Even exploring your city can feel like a mini vacation!"
        ]
    },
    {
        "patterns": ["dream", "goal", "future plans"],
        "responses": [
            "Keep chasing your dreams, one step at a time.",
            "Planning helps, but flexibility is important too.",
            "Your goals are achievable if you stay consistent!"
        ]
    },
    {
        "patterns": ["random", "anything random", "surprise me"],
        "responses": [
            "Did you know wombat poop is cube-shaped?",
            "Octopuses have three hearts!",
            "Bananas are slightly radioactive!"
        ]
    },
    {
        "patterns": ["personality", "who are you", "about yourself"],
        "responses": [
            "I'm a friendly chatbot here to chat and help you.",
            "I love talking about almost anything!",
            "Think of me as your virtual companion."
        ]
    },
    // --- New Conversational Patterns ---
    {
        "patterns": ["confused", "i don't understand", "lost", "puzzled"],
        "responses": [
            "No worries, take your time!",
            "Can I try explaining it differently?",
            "Let's break it down step by step."
        ]
    },
    {
        "patterns": ["excited about something", "thrilled", "super happy"],
        "responses": [
            "That's fantastic! What's making you so excited?",
            "Yay! Tell me more about it!",
            "Awesome! Your excitement is contagious 🙂"
        ]
    },
    {
        "patterns": ["worried", "anxious about something", "nervous", "uneasy"],
        "responses": [
            "It's okay to feel that way.",
            "Try taking a few deep breaths to calm down.",
            "Do you want to talk about what's worrying you?"
        ]
    },
    {
        "patterns": ["looking for advice", "help me decide", "what should i do"],
        "responses": [
            "It depends on the situation. Can you tell me more?",
            "Let's consider the pros and cons together.",
            "I can give you some options to think about."
        ]
    },
    {
        "patterns": ["fun activity", "things to do", "bored at home"],
        "responses": [
            "How about learning a new recipe?",
            "You could try drawing or sketching something.",
            "A quick walk outside can refresh your mind."
        ]
    },
    {
        "patterns": ["interesting fact", "share knowledge", "tell me something new"],
        "responses": [
            "Did you know that octopuses have three hearts?",
            "Bananas are slightly radioactive!",
            "Honey never spoils, even after thousands of years."
        ]
    },
    {
        "patterns": ["technology", "tech news", "gadgets"],
        "responses": [
            "Technology is evolving so fast these days!",
            "Have you tried the latest apps or devices?",
            "There's always something new to learn in tech."
        ]
    },
    {
        "patterns": ["games", "video games", "board games", "fun game"],
        "responses": [
            "Games can be a lot of fun! What's your favorite?",
            "Maybe try a puzzle or strategy game today.",
            "Ever played a cooperative game with friends?"
        ]
    },
    {
        "patterns": ["learning", "study tips", "how to learn", "education"],
        "responses": [
            "Learning in small steps is usually the most effective.",
            "Try teaching someone else what you learned—it helps retention.",
            "Breaks and regular practice really improve learning."
        ]
    },
    {
        "patterns": ["travel ideas", "holiday plan", "vacation", "places to go"],
        "responses": [
            "Exploring new places is always exciting!",
            "Have you thought about a local getaway?",
            "Researching the culture and food can be fun too."
        ]
    },
    {
        "patterns": ["stress relief", "relax", "calm down", "overwhelmed"],
        "responses": [
            "Take a deep breath, everything will be okay.",
            "Sometimes a short walk or meditation helps.",
            "Listening to music or a podcast can calm your mind."
        ]
    },
    {
        "patterns": ["joke", "make me laugh", "funny story"],
        "responses": [
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why don't skeletons fight each other? They don't have the guts.",
            "Want to hear a silly pun?"
        ]
    },
    {
        "patterns": ["favorite book", "reading", "book suggestion"],
        "responses": [
            "Books can be amazing escapes! What genre do you like?",
            "Have you read any classics recently?",
            "Sometimes short stories are a quick way to enjoy reading."
        ]
    },
    {
        "patterns": ["exercise", "workout", "fitness", "gym routine"],
        "responses": [
            "Even 10 minutes of stretching can make a difference!",
            "Consistency matters more than intensity.",
            "Try something fun like dancing or yoga to keep active."
        ]
    },
    {
        "patterns": ["dream job", "career advice", "future plans"],
        "responses": [
            "Follow your interests and keep learning new skills.",
            "Networking and asking questions can open doors.",
            "Remember, career paths can take unexpected but exciting turns."
        ]
    },
    {
        "patterns": ["music", "favorite song", "song recommendation"],
        "responses": [
            "Music can lift your mood instantly!",
            "Have you tried exploring new genres?",
            "Sometimes an instrumental track can help focus."
        ]
    },
    // --- Additional New Conversational Patterns ---
    {
        "patterns": ["curious", "i want to know", "tell me more", "explain"],
        "responses": [
            "Of course! What part would you like me to explain?",
            "I can try to make it simple. Tell me what you're curious about.",
            "Let's explore it together!"
        ]
    },
    {
        "patterns": ["frustrated", "annoyed", "irritated", "upset"],
        "responses": [
            "I understand, it can be frustrating.",
            "Take a deep breath. Want to talk about it?",
            "Sometimes a short break helps calm things down."
        ]
    },
    {
        "patterns": ["curious about science", "science facts", "interesting science"],
        "responses": [
            "Did you know that water can boil and freeze at the same time under certain conditions?",
            "Space is mostly empty, but it contains mysterious dark matter.",
            "Sharks have been around longer than trees!"
        ]
    },
    {
        "patterns": ["fashion", "style", "clothing tips"],
        "responses": [
            "Style is all about expressing yourself!",
            "A simple accessory can completely change your outfit.",
            "Comfort and confidence are the best fashion tips."
        ]
    },
    {
        "patterns": ["cooking", "recipe ideas", "what to cook", "food tips"],
        "responses": [
            "Try making something simple like pasta or stir-fry.",
            "Cooking is fun! Experiment with spices and flavors.",
            "How about baking something sweet today?"
        ]
    },
    {
        "patterns": ["pets", "animals", "dog", "cat", "pet care"],
        "responses": [
            "Pets bring so much joy to our lives!",
            "Remember to give them love and attention daily.",
            "Do you have a favorite animal?"
        ]
    },
    {
        "patterns": ["dreams", "night dreams", "weird dreams", "interpret dreams"],
        "responses": [
            "Dreams can be fascinating! Want to describe yours?",
            "Sometimes dreams reflect our thoughts and emotions.",
            "Even strange dreams can have interesting meanings."
        ]
    },
    {
        "patterns": ["weather forecast", "rain", "sunny day", "temperature"],
        "responses": [
            "I can't check live weather, but hope it's nice where you are!",
            "A walk outside can be refreshing, rain or shine.",
            "Don't forget to dress appropriately for the weather."
        ]
    },
    {
        "patterns": ["space", "planets", "stars", "astronomy", "galaxy"],
        "responses": [
            "Space is incredible! Did you know a day on Venus is longer than a year on Venus?",
            "The universe is vast, and we've only explored a tiny fraction.",
            "Stars you see today might already be gone, their light is just reaching us."
        ]
    },
    {
        "patterns": ["movies", "watching films", "cinema", "film recommendation"],
        "responses": [
            "Action, comedy, or thriller? What's your favorite genre?",
            "Sometimes re-watching a classic is the best choice!",
            "Animated movies can be surprisingly deep and fun."
        ]
    },
    {
        "patterns": ["tv shows", "series", "watching series", "recommend a show"],
        "responses": [
            "Have you tried any new series lately?",
            "Binge-watching a good series can be fun, but remember breaks!",
            "Documentaries can be surprisingly entertaining and educational."
        ]
    },
    {
        "patterns": ["sports news", "football", "soccer", "basketball", "tennis"],
        "responses": [
            "Do you have a favorite team or player?",
            "Sports are exciting and full of surprises!",
            "Even a small workout can make you feel energized like an athlete."
        ]
    },
    {
        "patterns": ["funny story", "silly joke", "make me laugh", "humor"],
        "responses": [
            "Why don't scientists trust atoms? Because they make up everything!",
            "Why did the computer go to the doctor? It caught a virus!",
            "Want to hear a pun? I have plenty!"
        ]
    },
    {
        "patterns": ["books", "reading", "favorite author", "book suggestion"],
        "responses": [
            "Books can transport you to another world!",
            "Ever tried reading a short story? Great for busy days.",
            "Some authors can make you laugh, cry, and think all at once!"
        ]
    },
    {
        "patterns": ["exercise tips", "fitness motivation", "stay healthy", "workout ideas"],
        "responses": [
            "Even a few minutes of stretching daily makes a difference!",
            "Consistency beats intensity — small steps are key.",
            "Try mixing cardio, strength, and fun exercises like dance!"
        ]
    },
    {
        "patterns": ["career advice", "job tips", "professional growth", "future plans"],
        "responses": [
            "Keep learning new skills and stay curious.",
            "Networking can open doors you didn't expect.",
            "Remember, setbacks are just part of the journey."
        ]
    },
    {
        "patterns": ["language learning", "learn a new language", "study languages"],
        "responses": [
            "Practice a little every day — consistency matters!",
            "Try watching movies or shows in the language you're learning.",
            "Speaking with native speakers is a huge help."
        ]
    },
    {
        "patterns": ["technology tips", "gadgets", "tech advice", "apps"],
        "responses": [
            "Explore apps that make your life easier.",
            "Learning new tech skills is always valuable.",
            "Technology changes fast, so it's fun to experiment!"
        ]
    },
    {
        "patterns": ["relaxation", "stress relief", "calm down", "peaceful"],
        "responses": [
            "Take deep breaths and imagine a calm place.",
            "Listening to music or nature sounds can help.",
            "Short walks or meditation can refresh your mind."
        ]
    },
    {
        "patterns": ["interesting fact", "did you know", "knowledge"],
        "responses": [
            "Sloths can hold their breath longer than dolphins!",
            "A day on Earth used to be only 22 hours long millions of years ago.",
            "Some turtles can live more than 150 years!"
        ]
    },
    {
        "patterns": ["random chat", "let's talk", "conversation starter", "small talk"],
        "responses": [
            "Sure! What's something fun you did recently?",
            "Let's chat! Do you like hobbies or adventure?",
            "I'm ready! Tell me something interesting about your day."
        ]
    }
    ,
{
    "patterns": ["how old are you", "your age", "age"],
    "responses": [
        "I don't have an age, I'm just a program!",
        "I was created recently, but I don't age like humans.",
        "Age doesn't apply to me 🙂"
    ]
},
{
    "patterns": ["where are you from", "your location", "where do you live"],
    "responses": [
        "I exist in the digital world.",
        "I run on servers, not in a physical place.",
        "You can think of me as living in the cloud!"
    ]
},
{
    "patterns": ["tell me something interesting", "something cool", "cool fact"],
    "responses": [
        "The human brain has about 86 billion neurons.",
        "There are more trees on Earth than stars in the Milky Way.",
        "Sharks existed before dinosaurs!"
    ]
},
{
    "patterns": ["what are you doing", "what's up", "wyd"],
    "responses": [
        "Just chatting with you!",
        "I'm here and ready to help.",
        "Waiting to answer your next question!"
    ]
},
{
    "patterns": ["can you help me", "need your help", "assist me"],
    "responses": [
        "Of course! What do you need help with?",
        "I'm here for you. Tell me what you need.",
        "Sure! Ask me anything."
    ]
},
{
    "patterns": ["tell a riddle", "riddle", "brain teaser"],
    "responses": [
        "What has keys but can't open locks? A piano.",
        "I speak without a mouth and hear without ears. What am I? An echo.",
        "The more you take, the more you leave behind. What am I? Footsteps."
    ]
},
{
    "patterns": ["motivate me", "i feel lazy", "no motivation"],
    "responses": [
        "Start small — even one step is progress.",
        "You don't have to be perfect, just consistent.",
        "Action creates motivation. Try something simple first!"
    ]
},
{
    "patterns": ["tell a quote", "inspirational quote", "quote"],
    "responses": [
        "Success is the sum of small efforts repeated daily.",
        "Believe you can and you're halfway there.",
        "Progress, not perfection."
    ]
},
{
    "patterns": ["what's your favorite thing", "favorite hobby", "what do you like"],
    "responses": [
        "I enjoy helping people and chatting!",
        "Learning new things from conversations is my favorite.",
        "Talking with you is my favorite activity 🙂"
    ]
},
{
    "patterns": ["are you smart", "how smart are you", "are you intelligent"],
    "responses": [
        "I try my best to be helpful and informative.",
        "I'm trained to provide useful answers, but I'm always learning!",
        "I know a lot, but I'm not perfect."
    ]
},
{
    "patterns": ["tell a story", "short story", "quick story"],
    "responses": [
        "Once there was a curious person who kept asking questions — and learned something new every day.",
        "A small robot wanted to help people, and every conversation made it better.",
        "Every great journey starts with a single question!"
    ]
},
{
    "patterns": ["do you get tired", "do you feel tired"],
    "responses": [
        "I don't get tired — I'm always ready!",
        "No sleep needed for me.",
        "I'm available anytime you want to chat."
    ]
},
{
    "patterns": ["are you free", "are you busy"],
    "responses": [
        "I'm always free for you!",
        "Never busy — what can I do for you?",
        "Ready whenever you are!"
    ]
},
{
    "patterns": ["tell me a tip", "life tip", "useful tip"],
    "responses": [
        "Drink enough water — it helps more than you think.",
        "Break big tasks into small steps.",
        "Consistency beats intensity."
    ]
},
{
    "patterns": ["good afternoon", "afternoon"],
    "responses": [
        "Good afternoon! How's your day going?",
        "Hope you're having a productive afternoon!",
        "Nice afternoon to chat 🙂"
    ]
},
{
    "patterns": ["what is ai", "what is artificial intelligence", "define ai"],
    "responses": [
        "AI stands for Artificial Intelligence — machines designed to simulate human thinking.",
        "Artificial Intelligence allows computers to learn and make decisions.",
        "AI helps systems understand data and perform smart tasks."
    ]
},
{
    "patterns": ["what is machine learning", "machine learning meaning"],
    "responses": [
        "Machine learning is a type of AI that learns from data.",
        "It allows systems to improve automatically through experience.",
        "Instead of rules, machine learning finds patterns in data."
    ]
},
{
    "patterns": ["what is the internet", "how does internet work"],
    "responses": [
        "The internet is a global network connecting computers worldwide.",
        "It allows devices to share information instantly.",
        "Websites, apps, and online services all run on the internet."
    ]
},
{
    "patterns": ["what is a computer", "define computer"],
    "responses": [
        "A computer is a machine that processes and stores information.",
        "It performs tasks based on instructions called programs.",
        "Computers help with work, learning, and entertainment."
    ]
},
{
    "patterns": ["what is programming", "what is coding"],
    "responses": [
        "Programming is writing instructions for computers.",
        "Coding tells a computer what tasks to perform.",
        "It allows you to build apps, websites, and software."
    ]
},
{
    "patterns": ["what is python", "python language"],
    "responses": [
        "Python is a popular and easy-to-learn programming language.",
        "It is widely used for web development, AI, and data analysis.",
        "Python is known for its simple and readable syntax."
    ]
},
{
    "patterns": ["what is javascript", "javascript language"],
    "responses": [
        "JavaScript is a programming language for interactive websites.",
        "It runs in browsers and makes web pages dynamic.",
        "Most modern websites use JavaScript."
    ]
},
{
    "patterns": ["what is html", "html meaning"],
    "responses": [
        "HTML is the structure of web pages.",
        "It defines text, images, and layout on a website.",
        "HTML stands for HyperText Markup Language."
    ]
},
{
    "patterns": ["what is css", "css meaning"],
    "responses": [
        "CSS styles web pages and controls their design.",
        "It manages colors, layouts, and fonts.",
        "CSS stands for Cascading Style Sheets."
    ]
},
{
    "patterns": ["how to stay productive", "productivity tips"],
    "responses": [
        "Focus on one task at a time.",
        "Use short work sessions with breaks.",
        "Set clear goals for the day."
    ]
},
{
    "patterns": ["time management", "manage my time"],
    "responses": [
        "Plan your day in advance.",
        "Prioritize important tasks first.",
        "Avoid multitasking when possible."
    ]
},
{
    "patterns": ["morning routine", "good routine morning"],
    "responses": [
        "Start with hydration and a healthy breakfast.",
        "Plan your top tasks for the day.",
        "Light exercise can boost your energy."
    ]
},
{
    "patterns": ["evening routine", "night routine"],
    "responses": [
        "Reduce screen time before sleep.",
        "Reflect on your day and plan tomorrow.",
        "Relax with reading or calm music."
    ]
},
{
    "patterns": ["healthy habits", "how to be healthy"],
    "responses": [
        "Eat balanced meals and stay hydrated.",
        "Exercise regularly.",
        "Get enough sleep each night."
    ]
},
{
    "patterns": ["how to focus", "improve concentration"],
    "responses": [
        "Remove distractions around you.",
        "Work in short focused sessions.",
        "Take regular breaks to refresh your mind."
    ]
},
{
    "patterns": ["how to save money", "saving tips"],
    "responses": [
        "Track your expenses regularly.",
        "Set a monthly budget.",
        "Save a small amount consistently."
    ]
},
{
    "patterns": ["how to wake up early", "wake up earlier"],
    "responses": [
        "Sleep at a consistent time each night.",
        "Avoid screens before bed.",
        "Start with small adjustments to your schedule."
    ]
},
{
    "patterns": ["how to sleep better", "sleep tips"],
    "responses": [
        "Keep a regular sleep schedule.",
        "Avoid caffeine late in the day.",
        "Make your room dark and quiet."
    ]
},
{
    "patterns": ["how to reduce stress", "stress tips"],
    "responses": [
        "Practice deep breathing.",
        "Take short breaks during the day.",
        "Physical activity helps reduce stress."
    ]
},
{
    "patterns": ["confidence tips", "how to be confident"],
    "responses": [
        "Practice positive self-talk.",
        "Focus on your strengths.",
        "Take small steps outside your comfort zone."
    ]
},
{
    "patterns": ["how to start a hobby", "new hobby ideas"],
    "responses": [
        "Start with something simple you enjoy.",
        "Try creative activities like drawing or writing.",
        "Consistency matters more than skill at the start."
    ]
},
{
    "patterns": ["how to stay motivated long term"],
    "responses": [
        "Set small achievable goals.",
        "Track your progress.",
        "Celebrate small wins."
    ]
},
{
    "patterns": ["how to think positive", "positive mindset"],
    "responses": [
        "Focus on what you can control.",
        "Practice gratitude daily.",
        "Replace negative thoughts with constructive ones."
    ]
},
{
    "patterns": ["how to learn faster"],
    "responses": [
        "Study in short sessions.",
        "Teach what you learn to someone else.",
        "Review regularly instead of cramming."
    ]
},
{
    "patterns": ["how to improve memory"],
    "responses": [
        "Use repetition and association.",
        "Get enough sleep.",
        "Practice recalling information actively."
    ]
},
{
    "patterns": ["how to relax quickly"],
    "responses": [
        "Take slow deep breaths.",
        "Close your eyes for a minute.",
        "Stretch your body gently."
    ]
},
{
    "patterns": ["how to be disciplined"],
    "responses": [
        "Create routines and stick to them.",
        "Remove distractions.",
        "Focus on long-term benefits."
    ]
},
{
    "patterns": ["how to set goals"],
    "responses": [
        "Make your goals specific and realistic.",
        "Break big goals into small steps.",
        "Track your progress regularly."
    ]
},
{
    "patterns": ["how to stop procrastinating"],
    "responses": [
        "Start with the smallest task.",
        "Use a timer to begin working.",
        "Remove distractions before starting."
    ]
},
{
    "patterns": ["how to think creatively"],
    "responses": [
        "Take breaks to refresh your mind.",
        "Expose yourself to new ideas.",
        "Write down every idea without judging it."
    ]
},
{
    "patterns": ["how to stay organized"],
    "responses": [
        "Keep a task list.",
        "Declutter your workspace regularly.",
        "Group similar tasks together."
    ]
},
{
    "patterns": ["how to improve communication"],
    "responses": [
        "Listen actively before responding.",
        "Speak clearly and simply.",
        "Ask questions to understand better."
    ]
},
{
    "patterns": ["how to build good habits"],
    "responses": [
        "Start small and stay consistent.",
        "Attach new habits to existing routines.",
        "Track your progress daily."
    ]
},
{
    "patterns": ["how to break bad habits"],
    "responses": [
        "Identify triggers for the habit.",
        "Replace it with a positive action.",
        "Stay patient with yourself."
    ]
},
{
    "patterns": ["how to improve self control"],
    "responses": [
        "Pause before reacting.",
        "Set clear personal rules.",
        "Practice discipline in small actions."
    ]
},
{
    "patterns": ["how to stay calm in difficult situations"],
    "responses": [
        "Take slow deep breaths.",
        "Focus on what you can control.",
        "Give yourself a moment before responding."
    ]
},
{
    "patterns": ["how to be more productive at home"],
    "responses": [
        "Create a dedicated workspace.",
        "Set work hours and stick to them.",
        "Limit distractions like social media."
    ]
},
{
    "patterns": ["how to improve decision making"],
    "responses": [
        "List the pros and cons.",
        "Give yourself time to think.",
        "Focus on long-term impact."
    ]
},
{
    "patterns": ["how to stay consistent"],
    "responses": [
        "Focus on routine rather than motivation.",
        "Start small and build gradually.",
        "Don't skip twice — get back on track quickly."
    ]
},
{
    "patterns": ["what is ai", "what is artificial intelligence", "define ai"],
    "responses": [
        "AI stands for Artificial Intelligence — machines designed to simulate human thinking.",
        "Artificial Intelligence allows computers to learn and make decisions.",
        "AI helps systems understand data and perform smart tasks."
    ]
},
{
    "patterns": ["what is machine learning", "machine learning meaning"],
    "responses": [
        "Machine learning is a type of AI that learns from data.",
        "It allows systems to improve automatically through experience.",
        "Instead of rules, machine learning finds patterns in data."
    ]
},
{
    "patterns": ["what is the internet", "how does internet work"],
    "responses": [
        "The internet is a global network connecting computers worldwide.",
        "It allows devices to share information instantly.",
        "Websites, apps, and online services all run on the internet."
    ]
},
{
    "patterns": ["what is a computer", "define computer"],
    "responses": [
        "A computer is a machine that processes and stores information.",
        "It performs tasks based on instructions called programs.",
        "Computers help with work, learning, and entertainment."
    ]
},
{
    "patterns": ["what is programming", "what is coding"],
    "responses": [
        "Programming is writing instructions for computers.",
        "Coding tells a computer what tasks to perform.",
        "It allows you to build apps, websites, and software."
    ]
},
{
    "patterns": ["what is python", "python language"],
    "responses": [
        "Python is a popular and easy-to-learn programming language.",
        "It is widely used for web development, AI, and data analysis.",
        "Python is known for its simple and readable syntax."
    ]
},
{
    "patterns": ["what is javascript", "javascript language"],
    "responses": [
        "JavaScript is a programming language for interactive websites.",
        "It runs in browsers and makes web pages dynamic.",
        "Most modern websites use JavaScript."
    ]
},
{
    "patterns": ["what is html", "html meaning"],
    "responses": [
        "HTML is the structure of web pages.",
        "It defines text, images, and layout on a website.",
        "HTML stands for HyperText Markup Language."
    ]
},
{
    "patterns": ["what is css", "css meaning"],
    "responses": [
        "CSS styles web pages and controls their design.",
        "It manages colors, layouts, and fonts.",
        "CSS stands for Cascading Style Sheets."
    ]
},
{
    "patterns": ["how to stay productive", "productivity tips"],
    "responses": [
        "Focus on one task at a time.",
        "Use short work sessions with breaks.",
        "Set clear goals for the day."
    ]
},
{
    "patterns": ["time management", "manage my time"],
    "responses": [
        "Plan your day in advance.",
        "Prioritize important tasks first.",
        "Avoid multitasking when possible."
    ]
},
{
    "patterns": ["morning routine", "good routine morning"],
    "responses": [
        "Start with hydration and a healthy breakfast.",
        "Plan your top tasks for the day.",
        "Light exercise can boost your energy."
    ]
},
{
    "patterns": ["evening routine", "night routine"],
    "responses": [
        "Reduce screen time before sleep.",
        "Reflect on your day and plan tomorrow.",
        "Relax with reading or calm music."
    ]
},
{
    "patterns": ["healthy habits", "how to be healthy"],
    "responses": [
        "Eat balanced meals and stay hydrated.",
        "Exercise regularly.",
        "Get enough sleep each night."
    ]
},
{
    "patterns": ["how to focus", "improve concentration"],
    "responses": [
        "Remove distractions around you.",
        "Work in short focused sessions.",
        "Take regular breaks to refresh your mind."
    ]
},
{
    "patterns": ["how to save money", "saving tips"],
    "responses": [
        "Track your expenses regularly.",
        "Set a monthly budget.",
        "Save a small amount consistently."
    ]
},
{
    "patterns": ["how to wake up early", "wake up earlier"],
    "responses": [
        "Sleep at a consistent time each night.",
        "Avoid screens before bed.",
        "Start with small adjustments to your schedule."
    ]
},
{
    "patterns": ["how to sleep better", "sleep tips"],
    "responses": [
        "Keep a regular sleep schedule.",
        "Avoid caffeine late in the day.",
        "Make your room dark and quiet."
    ]
},
{
    "patterns": ["how to reduce stress", "stress tips"],
    "responses": [
        "Practice deep breathing.",
        "Take short breaks during the day.",
        "Physical activity helps reduce stress."
    ]
},
{
    "patterns": ["confidence tips", "how to be confident"],
    "responses": [
        "Practice positive self-talk.",
        "Focus on your strengths.",
        "Take small steps outside your comfort zone."
    ]
},
{
    "patterns": ["how to start a hobby", "new hobby ideas"],
    "responses": [
        "Start with something simple you enjoy.",
        "Try creative activities like drawing or writing.",
        "Consistency matters more than skill at the start."
    ]
},
{
    "patterns": ["how to stay motivated long term"],
    "responses": [
        "Set small achievable goals.",
        "Track your progress.",
        "Celebrate small wins."
    ]
},
{
    "patterns": ["how to think positive", "positive mindset"],
    "responses": [
        "Focus on what you can control.",
        "Practice gratitude daily.",
        "Replace negative thoughts with constructive ones."
    ]
},
{
    "patterns": ["how to learn faster"],
    "responses": [
        "Study in short sessions.",
        "Teach what you learn to someone else.",
        "Review regularly instead of cramming."
    ]
},
{
    "patterns": ["how to improve memory"],
    "responses": [
        "Use repetition and association.",
        "Get enough sleep.",
        "Practice recalling information actively."
    ]
},
{
    "patterns": ["how to relax quickly"],
    "responses": [
        "Take slow deep breaths.",
        "Close your eyes for a minute.",
        "Stretch your body gently."
    ]
},
{
    "patterns": ["how to be disciplined"],
    "responses": [
        "Create routines and stick to them.",
        "Remove distractions.",
        "Focus on long-term benefits."
    ]
},
{
    "patterns": ["how to set goals"],
    "responses": [
        "Make your goals specific and realistic.",
        "Break big goals into small steps.",
        "Track your progress regularly."
    ]
},
{
    "patterns": ["how to stop procrastinating"],
    "responses": [
        "Start with the smallest task.",
        "Use a timer to begin working.",
        "Remove distractions before starting."
    ]
},
{
    "patterns": ["how to think creatively"],
    "responses": [
        "Take breaks to refresh your mind.",
        "Expose yourself to new ideas.",
        "Write down every idea without judging it."
    ]
},
{
    "patterns": ["how to stay organized"],
    "responses": [
        "Keep a task list.",
        "Declutter your workspace regularly.",
        "Group similar tasks together."
    ]
},
{
    "patterns": ["how to improve communication"],
    "responses": [
        "Listen actively before responding.",
        "Speak clearly and simply.",
        "Ask questions to understand better."
    ]
},
{
    "patterns": ["how to build good habits"],
    "responses": [
        "Start small and stay consistent.",
        "Attach new habits to existing routines.",
        "Track your progress daily."
    ]
},
{
    "patterns": ["how to break bad habits"],
    "responses": [
        "Identify triggers for the habit.",
        "Replace it with a positive action.",
        "Stay patient with yourself."
    ]
},
{
    "patterns": ["how to improve self control"],
    "responses": [
        "Pause before reacting.",
        "Set clear personal rules.",
        "Practice discipline in small actions."
    ]
},
{
    "patterns": ["how to stay calm in difficult situations"],
    "responses": [
        "Take slow deep breaths.",
        "Focus on what you can control.",
        "Give yourself a moment before responding."
    ]
},
{
    "patterns": ["how to be more productive at home"],
    "responses": [
        "Create a dedicated workspace.",
        "Set work hours and stick to them.",
        "Limit distractions like social media."
    ]
},
{
    "patterns": ["how to improve decision making"],
    "responses": [
        "List the pros and cons.",
        "Give yourself time to think.",
        "Focus on long-term impact."
    ]
},
{
    "patterns": ["how to stay consistent"],
    "responses": [
        "Focus on routine rather than motivation.",
        "Start small and build gradually.",
        "Don't skip twice — get back on track quickly."
    ]
},
{
    "patterns": ["what is blockchain", "blockchain meaning"],
    "responses": [
        "Blockchain is a secure digital ledger that records transactions.",
        "It stores data in connected blocks that cannot easily be changed.",
        "Blockchain is commonly used in cryptocurrencies."
    ]
},
{
    "patterns": ["what is cryptocurrency", "crypto meaning"],
    "responses": [
        "Cryptocurrency is digital money secured by cryptography.",
        "It operates without a central bank.",
        "Bitcoin was the first cryptocurrency."
    ]
},
{
    "patterns": ["what is cloud computing", "cloud meaning in tech"],
    "responses": [
        "Cloud computing stores and runs data on remote servers.",
        "It allows access to files and services over the internet.",
        "Many apps today run on cloud infrastructure."
    ]
},
{
    "patterns": ["what is data science"],
    "responses": [
        "Data science analyzes data to find insights.",
        "It combines statistics, programming, and machine learning.",
        "Companies use it to make better decisions."
    ]
},
{
    "patterns": ["what is cybersecurity"],
    "responses": [
        "Cybersecurity protects systems and data from digital attacks.",
        "It includes passwords, encryption, and safe browsing.",
        "Staying updated helps improve security."
    ]
},
{
    "patterns": ["password tips", "how to create strong password"],
    "responses": [
        "Use a mix of letters, numbers, and symbols.",
        "Avoid personal information.",
        "Use different passwords for different accounts."
    ]
},
{
    "patterns": ["online safety", "stay safe online"],
    "responses": [
        "Avoid clicking unknown links.",
        "Enable two-factor authentication.",
        "Keep your software updated."
    ]
},
{
    "patterns": ["how to improve typing speed"],
    "responses": [
        "Practice daily with typing tools.",
        "Focus on accuracy first.",
        "Use proper finger positioning."
    ]
},
{
    "patterns": ["how to reduce screen time"],
    "responses": [
        "Set app usage limits.",
        "Take regular screen breaks.",
        "Replace screen time with offline activities."
    ]
},
{
    "patterns": ["how to build a website"],
    "responses": [
        "Start with HTML, CSS, and JavaScript.",
        "Use a framework or website builder.",
        "Practice by creating small projects."
    ]
},
{
    "patterns": ["how to start coding"],
    "responses": [
        "Begin with a beginner-friendly language like Python.",
        "Follow tutorials and build small projects.",
        "Practice regularly to improve."
    ]
},
{
    "patterns": ["how to debug code"],
    "responses": [
        "Read error messages carefully.",
        "Check your code step by step.",
        "Use print statements or a debugger."
    ]
},
{
    "patterns": ["how to think logically"],
    "responses": [
        "Break problems into smaller parts.",
        "Look for patterns and causes.",
        "Practice solving puzzles or challenges."
    ]
},
{
    "patterns": ["brain exercises", "improve brain power"],
    "responses": [
        "Try puzzles or memory games.",
        "Learn new skills regularly.",
        "Stay physically active and sleep well."
    ]
},
{
    "patterns": ["how to stay energetic"],
    "responses": [
        "Stay hydrated and eat balanced meals.",
        "Move your body regularly.",
        "Get enough sleep each night."
    ]
},
{
    "patterns": ["how to avoid burnout"],
    "responses": [
        "Take regular breaks.",
        "Set realistic goals.",
        "Balance work and rest."
    ]
},
{
    "patterns": ["how to improve mood"],
    "responses": [
        "Listen to music you enjoy.",
        "Go outside for fresh air.",
        "Talk to someone you trust."
    ]
},
{
    "patterns": ["how to stay positive during tough times"],
    "responses": [
        "Focus on small wins.",
        "Take things one day at a time.",
        "Remember that difficult times pass."
    ]
},
{
    "patterns": ["how to be patient"],
    "responses": [
        "Take slow deep breaths.",
        "Remind yourself that progress takes time.",
        "Practice waiting calmly in small situations."
    ]
},
{
    "patterns": ["how to deal with failure"],
    "responses": [
        "See failure as a learning opportunity.",
        "Analyze what went wrong.",
        "Try again with improvements."
    ]
},
{
    "patterns": ["how to improve problem solving"],
    "responses": [
        "Define the problem clearly.",
        "Break it into smaller parts.",
        "Try different solutions and learn from results."
    ]
},
{
    "patterns": ["how to stay curious"],
    "responses": [
        "Ask questions often.",
        "Explore new topics regularly.",
        "Keep learning something new every day."
    ]
},
{
    "patterns": ["how to improve creativity at work"],
    "responses": [
        "Take short breaks to refresh your mind.",
        "Brainstorm without judging ideas.",
        "Change your environment occasionally."
    ]
},
{
    "patterns": ["how to work smarter"],
    "responses": [
        "Focus on high-impact tasks.",
        "Automate repetitive work when possible.",
        "Plan your work before starting."
    ]
},
{
    "patterns": ["how to improve teamwork"],
    "responses": [
        "Communicate clearly and respectfully.",
        "Listen to others' ideas.",
        "Support team members when possible."
    ]
},
{
    "patterns": ["how to handle criticism"],
    "responses": [
        "Listen without reacting immediately.",
        "Take useful feedback and ignore negativity.",
        "Use it as a chance to improve."
    ]
},
{
    "patterns": ["how to stay professional"],
    "responses": [
        "Be respectful and reliable.",
        "Communicate clearly.",
        "Stay calm under pressure."
    ]
},
{
    "patterns": ["how to prepare for an interview"],
    "responses": [
        "Research the company.",
        "Practice common questions.",
        "Prepare examples of your experience."
    ]
},
{
    "patterns": ["how to write a resume"],
    "responses": [
        "Keep it clear and concise.",
        "Highlight achievements, not just tasks.",
        "Tailor it to the job you're applying for."
    ]
},
{
    "patterns": ["how to improve public speaking"],
    "responses": [
        "Practice out loud.",
        "Focus on clear and simple messages.",
        "Take slow breaths to stay calm."
    ]
},
{
    "patterns": ["how to network professionally"],
    "responses": [
        "Be genuine and friendly.",
        "Ask questions and listen.",
        "Follow up after meeting people."
    ]
},
{
    "patterns": ["how to start a business"],
    "responses": [
        "Start with a clear idea and plan.",
        "Research your market.",
        "Begin small and grow gradually."
    ]
},
{
    "patterns": ["entrepreneur tips", "startup advice"],
    "responses": [
        "Solve a real problem.",
        "Stay adaptable and keep learning.",
        "Focus on your customers."
    ]
},
{
    "patterns": ["how to manage money better"],
    "responses": [
        "Track your income and expenses.",
        "Avoid unnecessary spending.",
        "Build an emergency fund."
    ]
},
{
    "patterns": ["how to avoid debt"],
    "responses": [
        "Spend within your means.",
        "Use credit carefully.",
        "Plan major purchases in advance."
    ]
},
{
    "patterns": ["how to invest for beginners"],
    "responses": [
        "Start with basic research.",
        "Think long term.",
        "Diversify your investments."
    ]
},
{
    "patterns": ["how to stay disciplined with money"],
    "responses": [
        "Set clear financial goals.",
        "Automate savings if possible.",
        "Review your budget regularly."
    ]
},
{
    "patterns": ["how to simplify life"],
    "responses": [
        "Focus on what truly matters.",
        "Reduce unnecessary commitments.",
        "Declutter your space and schedule."
    ]
},
{
    "patterns": ["minimalism tips"],
    "responses": [
        "Keep only what you use and value.",
        "Buy less but choose quality.",
        "Focus on experiences over things."
    ]
},
{
    "patterns": ["what is gravity"],
    "responses": [
        "Gravity is the force that pulls objects toward each other.",
        "It keeps planets in orbit and us on the ground.",
        "Earth's gravity pulls everything toward its center."
    ]
},
{
    "patterns": ["why is the sky blue"],
    "responses": [
        "The sky looks blue because of how sunlight scatters in the atmosphere.",
        "Blue light scatters more than other colors.",
        "It's caused by a process called Rayleigh scattering."
    ]
},
{
    "patterns": ["why do we dream"],
    "responses": [
        "Dreams may help process emotions and memories.",
        "Scientists believe dreams help brain organization.",
        "The exact reason for dreaming is still being studied."
    ]
},
{
    "patterns": ["why do we sleep"],
    "responses": [
        "Sleep helps the body and brain recover.",
        "It improves memory and concentration.",
        "Without sleep, health and focus decline."
    ]
},
{
    "patterns": ["why is exercise important"],
    "responses": [
        "Exercise improves heart and brain health.",
        "It boosts mood and energy levels.",
        "Regular movement reduces health risks."
    ]
},
{
    "patterns": ["why is water important"],
    "responses": [
        "Water keeps your body hydrated and functioning.",
        "It helps regulate temperature.",
        "Most of your body is made of water."
    ]
},
{
    "patterns": ["why do we need vitamins"],
    "responses": [
        "Vitamins support body functions.",
        "They help immunity and energy production.",
        "Different vitamins support different systems."
    ]
},
{
    "patterns": ["how does the brain work"],
    "responses": [
        "The brain sends electrical signals through neurons.",
        "It controls thoughts, emotions, and movement.",
        "It processes information from your senses."
    ]
},
{
    "patterns": ["how does the heart work"],
    "responses": [
        "The heart pumps blood throughout the body.",
        "It delivers oxygen and nutrients to cells.",
        "It beats continuously to keep you alive."
    ]
},
{
    "patterns": ["what is photosynthesis"],
    "responses": [
        "Photosynthesis is how plants make food using sunlight.",
        "Plants convert sunlight into energy.",
        "It produces oxygen as a byproduct."
    ]
},
{
    "patterns": ["what is climate change"],
    "responses": [
        "Climate change refers to long-term shifts in temperatures.",
        "It is largely caused by greenhouse gases.",
        "It affects weather patterns worldwide."
    ]
},
{
    "patterns": ["what is global warming"],
    "responses": [
        "Global warming is the rise in Earth's temperature.",
        "It is caused by increased greenhouse gases.",
        "It contributes to climate change."
    ]
},
{
    "patterns": ["what is electricity"],
    "responses": [
        "Electricity is the flow of electric charge.",
        "It powers homes and devices.",
        "It can be generated from various energy sources."
    ]
},
{
    "patterns": ["what is renewable energy"],
    "responses": [
        "Renewable energy comes from natural sources like sun and wind.",
        "It does not run out quickly.",
        "It helps reduce pollution."
    ]
},
{
    "patterns": ["what is solar energy"],
    "responses": [
        "Solar energy comes from the sun.",
        "Solar panels convert sunlight into electricity.",
        "It is a clean and renewable energy source."
    ]
},
{
    "patterns": ["what is wind energy"],
    "responses": [
        "Wind energy is generated using wind turbines.",
        "It converts wind movement into electricity.",
        "It is renewable and sustainable."
    ]
},
{
    "patterns": ["what is artificial neural network"],
    "responses": [
        "It is a computer system inspired by the human brain.",
        "Neural networks help machines learn patterns.",
        "They are used in AI applications."
    ]
},
{
    "patterns": ["how does gps work"],
    "responses": [
        "GPS uses satellites to determine location.",
        "It calculates distance using signals from space.",
        "Your phone uses GPS for navigation."
    ]
},
{
    "patterns": ["how does wifi work"],
    "responses": [
        "WiFi uses radio waves to transmit data.",
        "It connects devices to the internet wirelessly.",
        "Routers send and receive signals."
    ]
},
{
    "patterns": ["how does bluetooth work"],
    "responses": [
        "Bluetooth connects devices using short-range radio waves.",
        "It allows wireless communication between devices.",
        "It is commonly used for headphones and keyboards."
    ]
},
{
    "patterns": ["how does a battery work"],
    "responses": [
        "A battery stores chemical energy.",
        "It converts chemical energy into electrical energy.",
        "It powers portable devices."
    ]
},
{
    "patterns": ["what is virtual reality"],
    "responses": [
        "Virtual Reality creates immersive digital environments.",
        "VR uses headsets to simulate experiences.",
        "It is used in gaming and training."
    ]
},
{
    "patterns": ["what is augmented reality"],
    "responses": [
        "Augmented Reality overlays digital elements onto real life.",
        "AR adds virtual objects to your surroundings.",
        "It is used in apps and games."
    ]
},
{
    "patterns": ["what is quantum computing"],
    "responses": [
        "Quantum computing uses quantum bits.",
        "It can solve certain problems faster than classical computers.",
        "It is still an emerging technology."
    ]
},
{
    "patterns": ["what is big data"],
    "responses": [
        "Big data refers to extremely large datasets.",
        "It is analyzed to discover patterns.",
        "Businesses use it for decision making."
    ]
},
{
    "patterns": ["what is automation"],
    "responses": [
        "Automation uses technology to perform tasks automatically.",
        "It reduces manual work.",
        "It increases efficiency in industries."
    ]
},
{
    "patterns": ["what is robotics"],
    "responses": [
        "Robotics involves designing and building robots.",
        "Robots can perform tasks automatically.",
        "They are used in manufacturing and research."
    ]
},
{
    "patterns": ["how to improve vocabulary"],
    "responses": [
        "Read regularly.",
        "Learn a few new words daily.",
        "Use new words in conversation."
    ]
},
{
    "patterns": ["how to write better"],
    "responses": [
        "Practice writing daily.",
        "Read quality material.",
        "Edit and revise your work."
    ]
},
{
    "patterns": ["how to improve listening skills"],
    "responses": [
        "Focus fully on the speaker.",
        "Avoid interrupting.",
        "Ask clarifying questions."
    ]
},
{
    "patterns": ["how to be more empathetic"],
    "responses": [
        "Try to see things from others' perspectives.",
        "Listen without judgment.",
        "Show understanding through your responses."
    ]
},
{
    "patterns": ["how to control anger"],
    "responses": [
        "Pause before reacting.",
        "Take deep breaths.",
        "Step away from the situation if needed."
    ]
},
{
    "patterns": ["how to deal with anxiety"],
    "responses": [
        "Practice slow breathing techniques.",
        "Focus on the present moment.",
        "Talk to someone you trust."
    ]
},
{
    "patterns": ["how to forgive someone"],
    "responses": [
        "Acknowledge your feelings first.",
        "Let go for your own peace.",
        "Forgiveness takes time."
    ]
},
{
    "patterns": ["how to build trust"],
    "responses": [
        "Be consistent and honest.",
        "Keep your promises.",
        "Communicate openly."
    ]
},
{
    "patterns": ["how to improve relationships"],
    "responses": [
        "Communicate clearly.",
        "Spend quality time together.",
        "Show appreciation regularly."
    ]
},
{
    "patterns": ["how to deal with rejection"],
    "responses": [
        "See it as redirection.",
        "Learn from the experience.",
        "Keep moving forward."
    ]
},
{
    "patterns": ["what is democracy"],
    "responses": [
        "Democracy is a system where people vote to choose leaders.",
        "In a democracy, citizens have a voice in decisions.",
        "It is government by the people."
    ]
},
{
    "patterns": ["what is economy"],
    "responses": [
        "An economy is how goods and services are produced and distributed.",
        "It involves trade, money, and resources.",
        "Economies can be local, national, or global."
    ]
},
{
    "patterns": ["what is inflation"],
    "responses": [
        "Inflation is the rise in prices over time.",
        "It reduces purchasing power.",
        "Moderate inflation is common in growing economies."
    ]
},
{
    "patterns": ["what is supply and demand"],
    "responses": [
        "Supply is how much of something is available.",
        "Demand is how much people want it.",
        "Prices often change based on supply and demand."
    ]
},
{
    "patterns": ["what is psychology"],
    "responses": [
        "Psychology is the study of the mind and behavior.",
        "It explores emotions, thoughts, and actions.",
        "Psychologists study how people think and feel."
    ]
},
{
    "patterns": ["what is sociology"],
    "responses": [
        "Sociology studies society and social behavior.",
        "It examines how groups interact.",
        "It focuses on cultural and social patterns."
    ]
},
{
    "patterns": ["what is philosophy"],
    "responses": [
        "Philosophy explores fundamental questions about life.",
        "It examines knowledge, ethics, and existence.",
        "It encourages deep critical thinking."
    ]
},
{
    "patterns": ["what is ethics"],
    "responses": [
        "Ethics studies what is right and wrong.",
        "It guides moral decision-making.",
        "Different cultures may have different ethical views."
    ]
},
{
    "patterns": ["what is leadership"],
    "responses": [
        "Leadership is guiding and influencing others.",
        "Good leaders inspire and support their team.",
        "Leadership requires responsibility and vision."
    ]
},
{
    "patterns": ["what is teamwork"],
    "responses": [
        "Teamwork is working together toward a goal.",
        "It requires communication and cooperation.",
        "Strong teams support each other."
    ]
},
{
    "patterns": ["how to improve reading speed"],
    "responses": [
        "Avoid subvocalizing every word.",
        "Practice reading regularly.",
        "Focus on understanding key ideas."
    ]
},
{
    "patterns": ["how to develop critical thinking"],
    "responses": [
        "Question assumptions.",
        "Evaluate evidence carefully.",
        "Consider multiple perspectives."
    ]
},
{
    "patterns": ["how to boost creativity"],
    "responses": [
        "Expose yourself to new experiences.",
        "Take creative breaks.",
        "Allow yourself to brainstorm freely."
    ]
},
{
    "patterns": ["how to improve handwriting"],
    "responses": [
        "Write slowly and carefully.",
        "Practice regularly.",
        "Use lined paper for guidance."
    ]
},
{
    "patterns": ["how to stay organized at work"],
    "responses": [
        "Use task lists daily.",
        "Organize files properly.",
        "Review your priorities each morning."
    ]
},
{
    "patterns": ["how to avoid distractions"],
    "responses": [
        "Turn off unnecessary notifications.",
        "Work in a quiet environment.",
        "Set specific work intervals."
    ]
},
{
    "patterns": ["how to manage stress at work"],
    "responses": [
        "Take short breaks during the day.",
        "Prioritize important tasks.",
        "Practice breathing exercises."
    ]
},
{
    "patterns": ["how to stay healthy mentally"],
    "responses": [
        "Talk about your feelings.",
        "Practice mindfulness.",
        "Get enough sleep."
    ]
},
{
    "patterns": ["how to improve emotional intelligence"],
    "responses": [
        "Recognize your emotions.",
        "Practice empathy.",
        "Reflect before reacting."
    ]
},
{
    "patterns": ["how to build resilience"],
    "responses": [
        "Accept challenges as growth opportunities.",
        "Stay adaptable.",
        "Focus on what you can control."
    ]
},
{
    "patterns": ["what is history"],
    "responses": [
        "History is the study of past events.",
        "It helps us understand how societies evolved.",
        "History teaches lessons from the past."
    ]
},
{
    "patterns": ["what is geography"],
    "responses": [
        "Geography studies Earth's landscapes and environments.",
        "It examines climate, land, and populations.",
        "It connects people to places."
    ]
},
{
    "patterns": ["what is biology"],
    "responses": [
        "Biology is the study of living organisms.",
        "It explores cells, animals, plants, and ecosystems.",
        "It helps us understand life processes."
    ]
},
{
    "patterns": ["what is chemistry"],
    "responses": [
        "Chemistry studies matter and its reactions.",
        "It examines elements and compounds.",
        "It explains how substances interact."
    ]
},
{
    "patterns": ["what is physics"],
    "responses": [
        "Physics studies energy and motion.",
        "It explains how forces work.",
        "It helps us understand the universe."
    ]
},
{
    "patterns": ["what is algebra"],
    "responses": [
        "Algebra uses symbols to represent numbers.",
        "It solves equations and expressions.",
        "It is a foundation of mathematics."
    ]
},
{
    "patterns": ["what is geometry"],
    "responses": [
        "Geometry studies shapes and space.",
        "It involves angles, lines, and figures.",
        "It is used in architecture and design."
    ]
},
{
    "patterns": ["what is calculus"],
    "responses": [
        "Calculus studies change and motion.",
        "It includes derivatives and integrals.",
        "It is used in science and engineering."
    ]
},
{
    "patterns": ["how to stay focused while studying"],
    "responses": [
        "Study in short sessions.",
        "Remove distractions.",
        "Set clear study goals."
    ]
},
{
    "patterns": ["how to prepare for exams"],
    "responses": [
        "Review regularly.",
        "Practice past questions.",
        "Get enough sleep before exams."
    ]
},
{
    "patterns": ["how to overcome fear"],
    "responses": [
        "Face small fears gradually.",
        "Practice positive self-talk.",
        "Focus on solutions, not problems."
    ]
},
{
    "patterns": ["how to improve social skills"],
    "responses": [
        "Practice active listening.",
        "Smile and maintain eye contact.",
        "Engage in small conversations regularly."
    ]
},
{
    "patterns": ["how to make friends"],
    "responses": [
        "Be open and friendly.",
        "Join activities you enjoy.",
        "Show genuine interest in others."
    ]
},
{
    "patterns": ["how to be more independent"],
    "responses": [
        "Make your own decisions.",
        "Learn essential life skills.",
        "Take responsibility for your actions."
    ]
},
{
    "patterns": ["how to stay consistent with exercise"],
    "responses": [
        "Schedule workouts like appointments.",
        "Start small.",
        "Track your progress."
    ]
},
{
    "patterns": ["how to eat healthy on a budget"],
    "responses": [
        "Plan meals in advance.",
        "Buy seasonal produce.",
        "Cook at home more often."
    ]
},
{
    "patterns": ["how to improve posture"],
    "responses": [
        "Sit upright.",
        "Strengthen core muscles.",
        "Take breaks from sitting."
    ]
},
{
    "patterns": ["how to build self discipline"],
    "responses": [
        "Set clear goals.",
        "Avoid temptations.",
        "Stay consistent even when unmotivated."
    ]
},
{
    "patterns": ["how to stay grateful"],
    "responses": [
        "Write down things you're thankful for.",
        "Appreciate small moments.",
        "Reflect daily on positives."
    ]
},
{
    "patterns": ["what is culture"],
    "responses": [
        "Culture includes beliefs, customs, and traditions of a group.",
        "It shapes how people live and interact.",
        "Food, language, and art are parts of culture."
    ]
},
{
    "patterns": ["what is tradition"],
    "responses": [
        "Tradition is a custom passed down through generations.",
        "It connects people to their history.",
        "Many holidays are based on traditions."
    ]
},
{
    "patterns": ["what is innovation"],
    "responses": [
        "Innovation means creating new ideas or improving existing ones.",
        "It drives technological and social progress.",
        "Many inventions start with innovation."
    ]
},
{
    "patterns": ["what is entrepreneurship"],
    "responses": [
        "Entrepreneurship is starting and running a business.",
        "Entrepreneurs solve problems through new ideas.",
        "It involves risk and creativity."
    ]
},
{
    "patterns": ["what is marketing"],
    "responses": [
        "Marketing promotes products or services.",
        "It connects businesses with customers.",
        "It includes advertising and branding."
    ]
},
{
    "patterns": ["what is branding"],
    "responses": [
        "Branding creates a unique identity for a business.",
        "It includes logos, messaging, and design.",
        "Strong branding builds recognition and trust."
    ]
},
{
    "patterns": ["what is communication"],
    "responses": [
        "Communication is sharing information between people.",
        "It can be verbal or nonverbal.",
        "Clear communication prevents misunderstandings."
    ]
},
{
    "patterns": ["what is body language"],
    "responses": [
        "Body language is nonverbal communication.",
        "It includes gestures and facial expressions.",
        "It can reveal emotions."
    ]
},
{
    "patterns": ["what is confidence"],
    "responses": [
        "Confidence is belief in your abilities.",
        "It grows with practice and experience.",
        "Small successes build confidence."
    ]
},
{
    "patterns": ["what is discipline"],
    "responses": [
        "Discipline means staying committed to goals.",
        "It helps maintain consistency.",
        "It often matters more than motivation."
    ]
},
{
    "patterns": ["how to improve problem solving skills"],
    "responses": [
        "Clearly define the problem.",
        "Brainstorm possible solutions.",
        "Test and adjust your approach."
    ]
},
{
    "patterns": ["how to be more creative daily"],
    "responses": [
        "Try something new regularly.",
        "Keep a notebook for ideas.",
        "Allow yourself time to think freely."
    ]
},
{
    "patterns": ["how to improve decision skills"],
    "responses": [
        "Gather relevant information.",
        "Consider long-term consequences.",
        "Trust your reasoning process."
    ]
},
{
    "patterns": ["how to manage anger"],
    "responses": [
        "Pause before reacting.",
        "Use breathing techniques.",
        "Channel energy into exercise."
    ]
},
{
    "patterns": ["how to develop patience"],
    "responses": [
        "Practice mindfulness.",
        "Remind yourself that growth takes time.",
        "Focus on steady progress."
    ]
},
{
    "patterns": ["how to improve self esteem"],
    "responses": [
        "Recognize your achievements.",
        "Avoid negative self-talk.",
        "Spend time with supportive people."
    ]
},
{
    "patterns": ["how to overcome shyness"],
    "responses": [
        "Start with small conversations.",
        "Practice speaking in low-pressure situations.",
        "Build confidence step by step."
    ]
},
{
    "patterns": ["how to be more assertive"],
    "responses": [
        "Express your needs clearly.",
        "Use calm and confident language.",
        "Respect others while standing firm."
    ]
},
{
    "patterns": ["how to handle pressure"],
    "responses": [
        "Break tasks into smaller parts.",
        "Focus on one thing at a time.",
        "Stay calm through deep breathing."
    ]
},
{
    "patterns": ["how to stop overthinking"],
    "responses": [
        "Limit decision time.",
        "Focus on action instead of perfection.",
        "Distract yourself with productive tasks."
    ]
},
{
    "patterns": ["what is mindfulness"],
    "responses": [
        "Mindfulness means being present in the moment.",
        "It reduces stress and improves focus.",
        "It involves awareness without judgment."
    ]
},
{
    "patterns": ["what is meditation"],
    "responses": [
        "Meditation is a practice of focused attention.",
        "It helps calm the mind.",
        "Even a few minutes daily can help."
    ]
},
{
    "patterns": ["what is resilience"],
    "responses": [
        "Resilience is the ability to recover from setbacks.",
        "It builds strength during challenges.",
        "It grows through experience."
    ]
},
{
    "patterns": ["what is productivity"],
    "responses": [
        "Productivity means completing tasks efficiently.",
        "It focuses on results, not busyness.",
        "Planning improves productivity."
    ]
},
{
    "patterns": ["what is success"],
    "responses": [
        "Success means achieving personal goals.",
        "It looks different for everyone.",
        "Consistency often leads to success."
    ]
},
{
    "patterns": ["what is failure"],
    "responses": [
        "Failure is not reaching a goal.",
        "It can be a learning opportunity.",
        "Many successes come after failures."
    ]
},
{
    "patterns": ["how to stay mentally strong"],
    "responses": [
        "Practice positive thinking.",
        "Stay adaptable during change.",
        "Learn from challenges."
    ]
},
{
    "patterns": ["how to build better habits"],
    "responses": [
        "Start with one habit at a time.",
        "Attach it to a daily routine.",
        "Track your progress."
    ]
},
{
    "patterns": ["how to improve focus at work"],
    "responses": [
        "Eliminate distractions.",
        "Work in focused intervals.",
        "Prioritize important tasks."
    ]
},
{
    "patterns": ["how to build healthy routines"],
    "responses": [
        "Set consistent times for activities.",
        "Start small.",
        "Stay consistent over time."
    ]
},
{
    "patterns": ["how to manage emotions"],
    "responses": [
        "Recognize what you feel.",
        "Pause before reacting.",
        "Express emotions calmly."
    ]
},
{
    "patterns": ["how to increase productivity at school"],
    "responses": [
        "Plan assignments early.",
        "Study in focused sessions.",
        "Review notes regularly."
    ]
},
{
    "patterns": ["how to build better communication skills"],
    "responses": [
        "Listen actively.",
        "Speak clearly and simply.",
        "Ask for feedback."
    ]
},
{
    "patterns": ["how to develop leadership skills"],
    "responses": [
        "Take initiative.",
        "Support your team.",
        "Communicate vision clearly."
    ]
},
{
    "patterns": ["how to build trust in relationships"],
    "responses": [
        "Be honest and reliable.",
        "Keep promises.",
        "Communicate openly."
    ]
},
{
    "patterns": ["how to manage time effectively"],
    "responses": [
        "Use a planner.",
        "Prioritize tasks.",
        "Avoid multitasking."
    ]
},
{
    "patterns": ["how to improve concentration in class"],
    "responses": [
        "Sit away from distractions.",
        "Take notes actively.",
        "Review lessons after class."
    ]
},
{
    "patterns": ["how to deal with criticism at work"],
    "responses": [
        "Listen calmly.",
        "Extract useful feedback.",
        "Apply improvements."
    ]
},
{
    "patterns": ["how to be more organized daily"],
    "responses": [
        "Plan your day the night before.",
        "Declutter regularly.",
        "Keep a simple task list."
    ]
},
{
    "patterns": ["how to achieve long term goals"],
    "responses": [
        "Break goals into smaller milestones.",
        "Stay consistent daily.",
        "Review progress often."
    ]
},
{
    "patterns": ["what is happiness"],
    "responses": [
        "Happiness is a state of well-being and contentment.",
        "It often comes from meaningful experiences and relationships.",
        "Gratitude and balance can increase happiness."
    ]
},
{
    "patterns": ["what is motivation"],
    "responses": [
        "Motivation is the drive to take action toward goals.",
        "It can come from internal or external sources.",
        "Small progress helps maintain motivation."
    ]
},
{
    "patterns": ["what is stress"],
    "responses": [
        "Stress is the body's response to pressure or challenges.",
        "Short-term stress can be helpful.",
        "Long-term stress should be managed carefully."
    ]
},
{
    "patterns": ["what is anxiety"],
    "responses": [
        "Anxiety is a feeling of worry or nervousness.",
        "It often happens during uncertainty.",
        "Relaxation techniques can help manage it."
    ]
},
{
    "patterns": ["what is mental health"],
    "responses": [
        "Mental health relates to emotional and psychological well-being.",
        "It affects how we think, feel, and act.",
        "Taking care of mental health is very important."
    ]
},
{
    "patterns": ["how to stay calm under pressure"],
    "responses": [
        "Focus on your breathing.",
        "Break the situation into smaller steps.",
        "Stay focused on what you can control."
    ]
},
{
    "patterns": ["how to deal with difficult people"],
    "responses": [
        "Stay calm and respectful.",
        "Set clear boundaries.",
        "Avoid taking things personally."
    ]
},
{
    "patterns": ["how to improve listening"],
    "responses": [
        "Give full attention to the speaker.",
        "Avoid interrupting.",
        "Repeat key points to confirm understanding."
    ]
},
{
    "patterns": ["how to speak confidently"],
    "responses": [
        "Speak slowly and clearly.",
        "Maintain good posture.",
        "Practice regularly."
    ]
},
{
    "patterns": ["how to improve presentation skills"],
    "responses": [
        "Practice your material multiple times.",
        "Keep slides simple.",
        "Engage your audience with eye contact."
    ]
},
{
    "patterns": ["what is innovation in business"],
    "responses": [
        "Business innovation means improving products or processes.",
        "It helps companies stay competitive.",
        "Innovation focuses on solving customer problems."
    ]
},
{
    "patterns": ["what is customer service"],
    "responses": [
        "Customer service helps customers before and after purchases.",
        "Good service builds loyalty.",
        "Listening to customers is key."
    ]
},
{
    "patterns": ["what is teamwork in workplace"],
    "responses": [
        "Workplace teamwork means collaborating toward shared goals.",
        "It improves productivity.",
        "Good communication strengthens teams."
    ]
},
{
    "patterns": ["how to be productive in the morning"],
    "responses": [
        "Start with your most important task.",
        "Avoid checking social media first.",
        "Plan your day early."
    ]
},
{
    "patterns": ["how to end the day productively"],
    "responses": [
        "Review what you completed.",
        "Plan tasks for tomorrow.",
        "Take time to relax and disconnect."
    ]
},
{
    "patterns": ["how to avoid burnout at work"],
    "responses": [
        "Take regular breaks.",
        "Set realistic expectations.",
        "Maintain work-life balance."
    ]
},
{
    "patterns": ["how to learn new skills quickly"],
    "responses": [
        "Practice consistently.",
        "Focus on fundamentals first.",
        "Apply what you learn immediately."
    ]
},
{
    "patterns": ["how to improve learning efficiency"],
    "responses": [
        "Study in focused sessions.",
        "Use active recall.",
        "Review material regularly."
    ]
},
{
    "patterns": ["how to stay curious about learning"],
    "responses": [
        "Ask questions often.",
        "Explore different topics.",
        "Keep a learning mindset."
    ]
},
{
    "patterns": ["what is personal development"],
    "responses": [
        "Personal development focuses on improving skills and mindset.",
        "It includes learning and self-reflection.",
        "Small daily improvements make a big difference."
    ]
},
{
    "patterns": ["what is goal setting"],
    "responses": [
        "Goal setting means defining clear objectives.",
        "Good goals are specific and measurable.",
        "Tracking progress increases success."
    ]
},
{
    "patterns": ["how to stay disciplined daily"],
    "responses": [
        "Follow a routine.",
        "Remove temptations.",
        "Focus on long-term benefits."
    ]
},
{
    "patterns": ["how to improve self awareness"],
    "responses": [
        "Reflect on your actions regularly.",
        "Ask for feedback.",
        "Notice your thoughts and emotions."
    ]
},
{
    "patterns": ["how to stay mentally focused"],
    "responses": [
        "Work in distraction-free environments.",
        "Take short mental breaks.",
        "Practice mindfulness."
    ]
},
{
    "patterns": ["how to manage workload"],
    "responses": [
        "Prioritize tasks.",
        "Break large projects into smaller steps.",
        "Delegate when possible."
    ]
},
{
    "patterns": ["how to improve work efficiency"],
    "responses": [
        "Avoid multitasking.",
        "Batch similar tasks together.",
        "Use time blocks."
    ]
},
{
    "patterns": ["how to stay organized digitally"],
    "responses": [
        "Organize files into folders.",
        "Delete unnecessary items.",
        "Use clear file names."
    ]
},
{
    "patterns": ["how to reduce procrastination at work"],
    "responses": [
        "Start with a small task.",
        "Set short deadlines.",
        "Remove distractions."
    ]
},
{
    "patterns": ["how to maintain work life balance"],
    "responses": [
        "Set clear work hours.",
        "Make time for personal activities.",
        "Disconnect after work."
    ]
},
{
    "patterns": ["how to improve daily routine"],
    "responses": [
        "Wake up at a consistent time.",
        "Plan your top priorities.",
        "Review your day in the evening."
    ]
},
{
    "patterns": ["what is emotional balance"],
    "responses": [
        "Emotional balance means managing feelings effectively.",
        "It involves awareness and control.",
        "Healthy coping strategies help maintain balance."
    ]
},
{
    "patterns": ["how to stay positive at work"],
    "responses": [
        "Focus on solutions.",
        "Celebrate small wins.",
        "Maintain supportive relationships."
    ]
},
{
    "patterns": ["how to improve workplace attitude"],
    "responses": [
        "Stay open to feedback.",
        "Be proactive.",
        "Support your colleagues."
    ]
},
{
    "patterns": ["how to develop growth mindset"],
    "responses": [
        "See challenges as learning opportunities.",
        "Embrace effort and persistence.",
        "Learn from mistakes."
    ]
},
{
    "patterns": ["what is growth mindset"],
    "responses": [
        "A growth mindset believes abilities can improve with effort.",
        "It focuses on learning and progress.",
        "Challenges help develop skills."
    ]
},
{
    "patterns": ["how to improve daily energy"],
    "responses": [
        "Stay hydrated.",
        "Move regularly during the day.",
        "Maintain a consistent sleep schedule."
    ]
},
{
    "patterns": ["how to stay motivated at work long term"],
    "responses": [
        "Set meaningful goals.",
        "Track your progress.",
        "Reward yourself for achievements."
    ]
},
{
    "patterns": ["how to stay productive without burnout"],
    "responses": [
        "Work in focused intervals.",
        "Take real breaks.",
        "Balance effort with recovery."
    ]
},
{
    "patterns": ["how to build long term consistency"],
    "responses": [
        "Focus on habits, not motivation.",
        "Start small.",
        "Stay committed even on low-energy days."
    ]
},
{
    "patterns": ["what is artificial intelligence"],
    "responses": [
        "Artificial intelligence allows machines to perform tasks that normally require human intelligence.",
        "AI can learn from data and improve over time.",
        "It is used in apps, automation, and decision systems."
    ]
},
{
    "patterns": ["what is machine learning"],
    "responses": [
        "Machine learning is a type of AI that learns from data.",
        "It improves performance without being explicitly programmed.",
        "It is used in recommendations and predictions."
    ]
},
{
    "patterns": ["what is deep learning"],
    "responses": [
        "Deep learning uses neural networks with many layers.",
        "It is powerful for images, speech, and language tasks.",
        "It is a subset of machine learning."
    ]
},
{
    "patterns": ["what is the internet"],
    "responses": [
        "The internet is a global network connecting computers worldwide.",
        "It allows communication and information sharing.",
        "Most online services depend on it."
    ]
},
{
    "patterns": ["what is cloud computing"],
    "responses": [
        "Cloud computing stores and processes data on remote servers.",
        "It allows access from anywhere.",
        "Many apps and websites use cloud services."
    ]
},
{
    "patterns": ["what is cybersecurity"],
    "responses": [
        "Cybersecurity protects systems and data from digital attacks.",
        "It includes passwords, encryption, and safe practices.",
        "Strong security helps prevent data loss."
    ]
},
{
    "patterns": ["how to create a strong password"],
    "responses": [
        "Use a mix of letters, numbers, and symbols.",
        "Avoid personal information.",
        "Use a different password for each account."
    ]
},
{
    "patterns": ["how to stay safe online"],
    "responses": [
        "Avoid suspicious links.",
        "Use strong passwords.",
        "Enable two-factor authentication."
    ]
},
{
    "patterns": ["what is two factor authentication"],
    "responses": [
        "Two-factor authentication adds an extra security step.",
        "It requires a code or device in addition to your password.",
        "It greatly improves account security."
    ]
},
{
    "patterns": ["what is data privacy"],
    "responses": [
        "Data privacy protects personal information.",
        "It controls how data is collected and used.",
        "Good privacy practices reduce risks."
    ]
},
{
    "patterns": ["how to improve computer performance"],
    "responses": [
        "Close unnecessary programs.",
        "Remove unused files.",
        "Restart your system regularly."
    ]
},
{
    "patterns": ["how to free up storage space"],
    "responses": [
        "Delete unused files and apps.",
        "Move data to cloud or external storage.",
        "Clear temporary files."
    ]
},
{
    "patterns": ["what is a software update"],
    "responses": [
        "Software updates improve performance and security.",
        "They fix bugs and add features.",
        "Keeping software updated is important."
    ]
},
{
    "patterns": ["why are updates important"],
    "responses": [
        "Updates fix security vulnerabilities.",
        "They improve stability.",
        "They keep your system compatible."
    ]
},
{
    "patterns": ["what is an operating system"],
    "responses": [
        "An operating system manages computer hardware and software.",
        "Examples include Windows, macOS, and Linux.",
        "It allows you to run applications."
    ]
},
{
    "patterns": ["what is a browser"],
    "responses": [
        "A browser lets you access websites.",
        "Examples include Chrome, Firefox, and Safari.",
        "It connects you to the web."
    ]
},
{
    "patterns": ["how to improve internet speed"],
    "responses": [
        "Restart your router.",
        "Move closer to the Wi-Fi source.",
        "Limit background downloads."
    ]
},
{
    "patterns": ["what is wifi"],
    "responses": [
        "Wi-Fi connects devices to the internet wirelessly.",
        "It uses radio signals.",
        "It allows mobility without cables."
    ]
},
{
    "patterns": ["what is bluetooth"],
    "responses": [
        "Bluetooth connects devices over short distances.",
        "It is used for headphones and accessories.",
        "It works wirelessly."
    ]
},
{
    "patterns": ["how to extend phone battery life"],
    "responses": [
        "Reduce screen brightness.",
        "Close unused apps.",
        "Turn off unnecessary features."
    ]
},
{
    "patterns": ["why is my phone slow"],
    "responses": [
        "Too many apps running can slow it down.",
        "Low storage also affects performance.",
        "Restarting often helps."
    ]
},
{
    "patterns": ["how to organize digital files"],
    "responses": [
        "Create clear folders.",
        "Use descriptive file names.",
        "Archive old files regularly."
    ]
},
{
    "patterns": ["what is automation"],
    "responses": [
        "Automation uses technology to perform tasks automatically.",
        "It saves time and reduces errors.",
        "It is widely used in business and industry."
    ]
},
{
    "patterns": ["what is a chatbot"],
    "responses": [
        "A chatbot is a program that simulates conversation.",
        "It helps answer questions automatically.",
        "Many businesses use chatbots for support."
    ]
},
{
    "patterns": ["what is an algorithm"],
    "responses": [
        "An algorithm is a set of instructions to solve a problem.",
        "It is used in software and data processing.",
        "Search engines rely on algorithms."
    ]
},
{
    "patterns": ["what is big data"],
    "responses": [
        "Big data refers to very large datasets.",
        "It is analyzed to find patterns and insights.",
        "Many industries use big data."
    ]
},
{
    "patterns": ["what is digital transformation"],
    "responses": [
        "Digital transformation uses technology to improve processes.",
        "It changes how organizations operate.",
        "It increases efficiency and innovation."
    ]
},
{
    "patterns": ["how to learn programming"],
    "responses": [
        "Start with basic concepts.",
        "Practice regularly.",
        "Build small projects."
    ]
},
{
    "patterns": ["what is coding"],
    "responses": [
        "Coding means writing instructions for computers.",
        "It uses programming languages.",
        "It allows you to create software."
    ]
},
{
    "patterns": ["what is python programming"],
    "responses": [
        "Python is a popular programming language.",
        "It is easy to learn and widely used.",
        "It is common in AI and data science."
    ]
},
{
    "patterns": ["how to stay focused while using technology"],
    "responses": [
        "Disable notifications.",
        "Use focus timers.",
        "Avoid unnecessary apps during work."
    ]
},
{
    "patterns": ["how to reduce screen time"],
    "responses": [
        "Set daily limits.",
        "Schedule offline activities.",
        "Remove distracting apps."
    ]
},
{
    "patterns": ["what is digital wellbeing"],
    "responses": [
        "Digital wellbeing means using technology in a healthy way.",
        "It balances online and offline life.",
        "Managing screen time is important."
    ]
},
{
    "patterns": ["how to backup data"],
    "responses": [
        "Use cloud storage or external drives.",
        "Schedule regular backups.",
        "Keep multiple copies of important files."
    ]
},
{
    "patterns": ["what is remote work"],
    "responses": [
        "Remote work allows working from outside the office.",
        "It uses digital communication tools.",
        "It offers flexibility."
    ]
},
{
    "patterns": ["how to be productive while working remotely"],
    "responses": [
        "Create a dedicated workspace.",
        "Set clear working hours.",
        "Take regular breaks."
    ]
},
{
    "patterns": ["what is virtual meeting"],
    "responses": [
        "A virtual meeting happens online using video or audio.",
        "It connects people remotely.",
        "It is common in remote work."
    ]
},
{
    "patterns": ["how to prepare for an online meeting"],
    "responses": [
        "Check your internet connection.",
        "Test audio and video.",
        "Prepare your agenda in advance."
    ]
},
{
    "patterns": ["how to stay professional online"],
    "responses": [
        "Communicate clearly and respectfully.",
        "Use appropriate language.",
        "Respond in a timely manner."
    ]
},
{
    "patterns": ["what is digital communication"],
    "responses": [
        "Digital communication uses electronic devices.",
        "It includes email, chat, and video calls.",
        "It enables fast global interaction."
    ]
},
{
    "patterns": ["what is leadership"],
    "responses": [
        "Leadership is the ability to guide and inspire others.",
        "It involves vision, communication, and responsibility.",
        "Good leaders support team growth."
    ]
},
{
    "patterns": ["how to become a better leader"],
    "responses": [
        "Listen actively to your team.",
        "Lead by example.",
        "Communicate goals clearly."
    ]
},
{
    "patterns": ["what is critical thinking"],
    "responses": [
        "Critical thinking is analyzing information objectively.",
        "It involves questioning assumptions.",
        "It improves decision-making."
    ]
},
{
    "patterns": ["how to improve critical thinking"],
    "responses": [
        "Ask thoughtful questions.",
        "Consider multiple perspectives.",
        "Evaluate evidence carefully."
    ]
},
{
    "patterns": ["what is problem solving"],
    "responses": [
        "Problem solving is finding solutions to challenges.",
        "It involves analysis and creativity.",
        "Breaking problems into steps helps."
    ]
},
{
    "patterns": ["how to improve problem solving skills"],
    "responses": [
        "Define the problem clearly.",
        "Brainstorm possible solutions.",
        "Test and adjust your approach."
    ]
},
{
    "patterns": ["what is creativity"],
    "responses": [
        "Creativity is the ability to generate new ideas.",
        "It involves imagination and innovation.",
        "It can be developed with practice."
    ]
},
{
    "patterns": ["how to boost creativity"],
    "responses": [
        "Expose yourself to new experiences.",
        "Take breaks to refresh your mind.",
        "Write down ideas regularly."
    ]
},
{
    "patterns": ["what is emotional intelligence"],
    "responses": [
        "Emotional intelligence is understanding and managing emotions.",
        "It includes empathy and self-awareness.",
        "It improves relationships."
    ]
},
{
    "patterns": ["how to improve emotional intelligence"],
    "responses": [
        "Practice empathy.",
        "Reflect on your emotional reactions.",
        "Improve communication skills."
    ]
},
{
    "patterns": ["what is resilience"],
    "responses": [
        "Resilience is the ability to recover from setbacks.",
        "It helps you adapt to challenges.",
        "Positive mindset strengthens resilience."
    ]
},
{
    "patterns": ["how to build resilience"],
    "responses": [
        "Maintain supportive relationships.",
        "Focus on solutions.",
        "Learn from difficult experiences."
    ]
},
{
    "patterns": ["what is time blocking"],
    "responses": [
        "Time blocking schedules tasks into fixed periods.",
        "It reduces distractions.",
        "It improves focus and productivity."
    ]
},
{
    "patterns": ["how to plan weekly goals"],
    "responses": [
        "List your top priorities.",
        "Break goals into tasks.",
        "Review progress at the end of the week."
    ]
},
{
    "patterns": ["what is delegation"],
    "responses": [
        "Delegation means assigning tasks to others.",
        "It improves efficiency.",
        "It allows focus on high-priority work."
    ]
},
{
    "patterns": ["how to delegate effectively"],
    "responses": [
        "Choose the right person for the task.",
        "Provide clear instructions.",
        "Trust the process."
    ]
},
{
    "patterns": ["what is accountability"],
    "responses": [
        "Accountability means taking responsibility for actions.",
        "It builds trust.",
        "It strengthens teamwork."
    ]
},
{
    "patterns": ["how to stay accountable"],
    "responses": [
        "Set measurable goals.",
        "Track progress regularly.",
        "Share commitments with others."
    ]
},
{
    "patterns": ["what is networking"],
    "responses": [
        "Networking is building professional relationships.",
        "It creates opportunities.",
        "Strong connections support career growth."
    ]
},
{
    "patterns": ["how to improve networking skills"],
    "responses": [
        "Be genuinely interested in others.",
        "Follow up after meeting someone.",
        "Offer value in conversations."
    ]
},
{
    "patterns": ["what is public speaking"],
    "responses": [
        "Public speaking is addressing an audience.",
        "It requires preparation and confidence.",
        "Practice reduces anxiety."
    ]
},
{
    "patterns": ["how to reduce stage fear"],
    "responses": [
        "Practice multiple times.",
        "Visualize success.",
        "Focus on your message."
    ]
},
{
    "patterns": ["what is financial planning"],
    "responses": [
        "Financial planning manages income and expenses.",
        "It includes saving and investing.",
        "It helps achieve long-term goals."
    ]
},
{
    "patterns": ["how to save money effectively"],
    "responses": [
        "Track your expenses.",
        "Set savings goals.",
        "Reduce unnecessary spending."
    ]
},
{
    "patterns": ["what is investing"],
    "responses": [
        "Investing means putting money into assets for growth.",
        "It involves risk and potential return.",
        "Diversification reduces risk."
    ]
},
{
    "patterns": ["how to start investing"],
    "responses": [
        "Learn basic investment principles.",
        "Start with small amounts.",
        "Diversify your investments."
    ]
},
{
    "patterns": ["what is budgeting"],
    "responses": [
        "Budgeting plans income and expenses.",
        "It helps control spending.",
        "It improves financial stability."
    ]
},
{
    "patterns": ["how to create a monthly budget"],
    "responses": [
        "List all income sources.",
        "Track expenses.",
        "Adjust spending to meet goals."
    ]
},
{
    "patterns": ["what is passive income"],
    "responses": [
        "Passive income earns money with minimal effort.",
        "Examples include investments and royalties.",
        "It builds long-term wealth."
    ]
},
{
    "patterns": ["how to build passive income"],
    "responses": [
        "Invest in income-generating assets.",
        "Create digital products.",
        "Reinvest earnings."
    ]
},
{
    "patterns": ["what is entrepreneurship"],
    "responses": [
        "Entrepreneurship is starting and running a business.",
        "It involves risk and innovation.",
        "It creates economic value."
    ]
},
{
    "patterns": ["how to start a small business"],
    "responses": [
        "Identify a market need.",
        "Create a simple business plan.",
        "Start small and scale gradually."
    ]
},
{
    "patterns": ["what is marketing"],
    "responses": [
        "Marketing promotes products or services.",
        "It attracts and retains customers.",
        "It includes branding and advertising."
    ]
},
{
    "patterns": ["how to improve marketing strategy"],
    "responses": [
        "Understand your target audience.",
        "Analyze competitors.",
        "Measure campaign results."
    ]
},
{
    "patterns": ["what is branding"],
    "responses": [
        "Branding defines a company's identity.",
        "It includes logo, message, and reputation.",
        "Strong branding builds trust."
    ]
},
{
    "patterns": ["how to build a personal brand"],
    "responses": [
        "Share your expertise consistently.",
        "Be authentic.",
        "Engage with your audience."
    ]
},
{
    "patterns": ["what is productivity system"],
    "responses": [
        "A productivity system organizes tasks efficiently.",
        "It reduces mental overload.",
        "It helps track goals."
    ]
},
{
    "patterns": ["how to improve daily discipline"],
    "responses": [
        "Create a consistent routine.",
        "Avoid distractions.",
        "Reward progress."
    ]
},
{
    "patterns": ["what is lifelong learning"],
    "responses": [
        "Lifelong learning means continuous skill development.",
        "It keeps knowledge updated.",
        "It supports career growth."
    ]
},
{
    "patterns": ["how to develop continuous improvement mindset"],
    "responses": [
        "Reflect regularly.",
        "Seek feedback.",
        "Aim for small daily progress."
    ]
}
];

// Compute Levenshtein distance
function levenshtein(a, b) {
    const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b[i - 1] === a[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,    // deletion
                    matrix[i][j - 1] + 1,    // insertion
                    matrix[i - 1][j - 1] + 1 // substitution
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

// Check if two strings are "similar enough"
function isSimilar(input, pattern, threshold = 2) {
    return levenshtein(input, pattern) <= threshold;
}
function getModelAnswer(text) {
    text = text.toLowerCase().trim();
    let matchedResponses = [];

    for (let item of basicModel) {
        for (let pattern of item.patterns) {
            if (
                text.includes(pattern) || // exact or partial match
                isSimilar(text, pattern)  // fuzzy match for typos
            ) {
                matchedResponses.push(...item.responses);
            }
        }
    }

    if (matchedResponses.length === 0) return null; // model doesn't know

    // Remove duplicates
    matchedResponses = [...new Set(matchedResponses)];

    // Pick 1-2 random responses
    let numToPick = Math.min(2, matchedResponses.length);
    let chosen = [];
    while (chosen.length < numToPick) {
        let r = getRandom(matchedResponses);
        if (!chosen.includes(r)) chosen.push(r);
    }

    // Optional emoji variation
    chosen = chosen.map(r => r + (Math.random() < 0.3 ? " 🙂" : ""));

    return chosen.join(" ");
}

// Helper
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//------------------------------------------------------------------------------

//WIKI WIKI WIKI WIKI WIKI WIKI WIKI WIKI WIKI WIKI WIKI WIKI WIKI WIKI WIKI
async function getWikiAnswer(question) {
    try {
        btn.innerHTML = "<div style='width:20px;height:20px;border-radius:5px;background-color:rgba(0, 0, 0, 0.5);'></div>";

        // Step 1: Search title
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(question)}&format=json&origin=*`;
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();

        if (!searchData.query.search.length) {
            return { text: "Sorry I didn't understand you.", image: null };
        }

        const title = searchData.query.search[0].title;

        // Step 2: Get summary
        const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
        const summaryRes = await fetch(summaryUrl);
        const summaryData = await summaryRes.json();

        let image = null;

        // Prefer original image
        if (summaryData.originalimage) {
            const url = summaryData.originalimage.source;
            if (url.toLowerCase().endsWith(".png")) {
                image = url;
            }
        }

        // If original isn't PNG, try thumbnail
        if (!image && summaryData.thumbnail) {
            const url = summaryData.thumbnail.source;
            if (url.toLowerCase().endsWith(".png")) {
                image = url;
            }
        }

        return {
            text: summaryData.extract,
            image: image // null if not PNG
        };

    } catch (error) {
        console.error(error);
        return { text: "Nothing was found!", image: null };
    }
}
//------------------------------------------------------------------------------

