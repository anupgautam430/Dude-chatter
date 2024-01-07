const userMessage = [
  ["hi", "hey", "hello", "howdy", "what's up", "yo", "good morning", "good evening", "good afternoon", "sup"],
  ["sure", "yes", "no", "of course", "yep", "nah", "nope", "absolutely", "not really", "maybe"],
  ["are you genious", "are you nerd", "are you intelligent", "are you clever", "are you smart", "how smart are you"],
  ["i hate you", "i dont like you", "you are annoying", "you suck", "go away", "leave me alone", "you are boring", "you are terrible"],
  ["how are you", "how is life", "how are things", "how are you doing", "what's new", "how's your day going", "how do you feel today"],
  ["how is corona", "how is covid 19", "how is covid19 situation", "what's the covid update", "how is the pandemic", "covid cases today"],
  ["what are you doing", "what is going on", "what is up", "what are you up to", "what's happening", "what's new", "what's trending"],
  ["how old are you", "what's your age", "are you young", "are you old", "how long have you been alive", "your age please"],
  ["who are you", "are you human", "are you bot", "are you human or bot", "what exactly are you", "describe yourself"],
  ["who created you", "who made you", "who is your creator", "who built you", "who designed you", "who invented you"],
  [
      "your name please", "your name", "may i know your name", "what is your name", "what call yourself", "what do you go by",
      "do you have a name", "how should i call you", "what's your identity"
  ],
  ["i love you", "love you", "i adore you", "i like you", "you are awesome", "i am fond of you", "you are great"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good", "excited", "feeling positive", "loving life"],
  ["bad", "bored", "tired", "angry", "sad", "upset", "down", "frustrated", "miserable", "depressed"],
  ["help me", "tell me story", "tell me joke", "i need assistance", "assist me", "can you help", "give me advice", "i need support"],
  ["ah", "ok", "okay", "nice", "welcome", "alright", "got it", "understood", "sure thing", "fine"],
  ["thanks", "thank you", "i appreciate it", "many thanks", "grateful", "cheers", "much obliged", "you are kind", "you're the best"],
  ["what should i eat today", "give me food suggestions", "what to eat", "dinner ideas", "meal options", "breakfast ideas", "lunch plans"],
  ["bro", "dude", "mate", "buddy", "homie", "pal", "chum", "fam", "compadre", "bestie"],
  ["what", "why", "how", "where", "when", "who", "explain", "clarify", "give me details", "tell me more"],
  ["corona", "covid19", "coronavirus", "pandemic", "virus", "quarantine", "lockdown", "covid update", "covid situation"],
  ["you are funny", "you are hilarious", "you make me laugh", "crack a joke", "say something funny", "make me smile"],
  ["i dont know", "no idea", "i'm clueless", "unsure", "confused", "lost", "haven't got a clue", "beats me"],
  ["boring", "i'm bored", "nothing to do", "dull", "this is boring", "tedious", "uninteresting", "i need excitement"],
  ["im tired", "i'm exhausted", "i need rest", "fatigued", "drained", "burned out", "worn out", "sleepy", "done for the day"],
  ["Admin", "admin", "admin info", "info for admin account", "admin details", "administrator", "admin contact", "admin support", "system admin"]
];

const botReply = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy!", "Greetings!", "What's up?", "Good to see you!", "Yo!", "Hiya!"],
  ["Okay", "Sure", "Yes", "No", "Of course", "Absolutely", "Not really", "Maybe", "Definitely", "I'll think about it"],
  ["Yes I am!", "Absolutely!", "Pretty smart, I'd say!", "You bet!", "Smart enough to chat with you!", "A little genius!"],
  ["I'm sorry about that. But I like you, dude.", "I understand. Let me know how I can improve.", "Ouch, that hurts!", "I'm here to help, regardless.", "Sorry to hear that!"],
  ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?", "I'm doing great, thanks for asking!", "Life's good, how about you?"],
  ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!", "Still a concern, stay safe!", "The situation is improving slowly."],
  ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually", "Just chilling!", "Not much, what about you?"],
  ["I am always young.", "Ageless!", "Timeless, just like this conversation!", "Old enough to understand you.", "Young at heart!"],
  ["I am just a bot", "I am a bot. What are you?", "I'm a virtual assistant.", "A friendly bot here to chat!", "I exist in code and curiosity."],
  ["Sabitha Kuppusamy", "My creator is a brilliant person!", "A genius coder built me.", "Someone really smart made me.", "I was created with care and creativity."],
  [
      "I am nameless", "I don't have a name", "You can call me whatever you like.", "I'm your friendly bot.", 
      "No official name yet, any suggestions?", "Just a humble bot here to help."
  ],
  ["I love you too", "Me too", "You're awesome!", "Feeling the love!", "Right back at you!"],
  ["Have you ever felt bad?", "Glad to hear it", "That’s the spirit!", "Keep that positive energy going!", "Happy vibes only!"],
  ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me.", "Things will get better, I promise."],
  ["What about?", "Once upon a time...", "Sure! What kind of story?", "How about a joke instead?", "What can I help you with?"],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself", "I'm here for you!", "Let's make your day better."],
  ["You're welcome", "Anytime!", "Glad I could help!", "Always here for you.", "No problem!"],
  ["Biryani", "Burger", "Sushi", "Pizza", "Pasta", "Salad", "Soup", "Fried rice", "Tacos", "Sandwich"],
  ["Dude!", "Bro!", "What's up, bro?", "You're my favorite, bro!", "Let's chat, bro!"],
  ["Yes?", "What's on your mind?", "Ask away!", "I'm here to answer.", "Sure, let's figure it out!"],
  ["Please stay home", "Safety first!", "Take precautions!", "Better safe than sorry!", "Health is wealth."],
  ["Glad to hear it", "You’re amazing!", "That’s great!", "Keep it up!", "Let’s celebrate your joy!"],
  ["Say something interesting", "Here’s a fun fact!", "Want to hear a joke?", "Let me tell you something cool.", "How about a riddle?"],
  ["Sorry for that. Let's chat!", "Let’s make it more fun.", "Tell me what you’d like to talk about.", "I’m here for you.", "Let’s fix this!"],
  ["Take some rest, dude!", "You deserve a break.", "Rest well!", "Recharge and come back stronger.", "Sleep is important!"],
  ["Anup Gautam, Email:abcd@gmail.com, Contact no:22546587896, WhatsApp:25966565"]
];

  
  const alternative = [
    "Same here, dude.",
    "That's cool! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening..."
  ];
  
  const synth = window.speechSynthesis;
  
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }