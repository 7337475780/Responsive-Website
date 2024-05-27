let btn = document.querySelector('.new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    { quote: "The unexamined life is not worth living.", person: "Socrates" },
    { quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.", person: "Mark Twain" },
    { quote: "You miss 100% of the shots you don't take.", person: "Wayne Gretzky" },
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "A friend is someone who knows you and loves you anyway.", person: "Elbert Hubbard" },
    { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", person: "Ralph Waldo Emerson" },
    { quote: "The only true wisdom is in knowing you know nothing.", person: "Socrates" },
    { quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", person: "Helen Keller" },
    { quote: "The journey of a thousand miles begins with one step.", person: "Lao Tzu" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", person: "Nelson Mandela" },
    { quote: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", person: "Albert Einstein" },
    { quote: "Innovation distinguishes between a leader and a follower.", person: "Steve Jobs" },
    { quote: "The mind is everything. What you think you become.", person: "Buddha" },
    { quote: "You can make mistakes, but you are not a mistake.", person: "Steve McQueen" },
    { quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", person: "Martin Luther King Jr." },
    { quote: "Change is the only constant in life.", person: "Heraclitus" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "Be the change that you wish to see in the world.", person: "Mahatma Gandhi" },
    { quote: "The only person you are destined to become is the person you decide to be.", person: "Ralph Waldo Emerson" },
    { quote: "I have learned that success is to be measured not by material possessions, but by the people you love and who love you.", person: "Denzel Washington" }
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);


    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});