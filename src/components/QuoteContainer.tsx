import React from "react";
import butterfly from "/butterfly.png";
import x from "/x.png";

interface QuoteContainerProps {
  textQuote: string;
  authorQuote: string;
  isLoading?: boolean;
  onNewQuote?: () => void;
}
interface QuoteData {
  content: string;
  author: string;
}
const quotes: QuoteData[] = [
  {
    content:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou, 'And Still I Rise'",
  },
  {
    content:
      "In three words I can sum up everything I've learned about life: It goes on.",
    author: "Robert Frost",
  },
  {
    content: "Life is a long lesson in humility.",
    author: "J.M. Barrie, 'The Little Minister'",
  },
  {
    content:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    content:
      "The most important thing is to enjoy your life–to be happy–it's all that matters.",
    author: "Audrey Hepburn",
  },
  {
    content:
      "To succeed in life, you need three things: a wishbone, a backbone and a funnybone.",
    author: "Reba McEntire",
  },
  {
    content:
      "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
    author: "Joseph Campbell",
  },
  {
    content:
      "Life is a succession of lessons which must be lived to be understood.",
    author: "Ralph Waldo Emerson",
  },
  {
    content: "Love the life you live. Live the life you love.",
    author: "Bob Marley",
  },
  {
    content:
      "I was taught that the way of progress was neither swift nor easy.",
    author: "Marie Curie",
  },
  {
    content: "He who has a why to live for can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    content: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    content:
      "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    author: "Henry Ford",
  },
  {
    content: "In order to write about life first you must live it.",
    author: "Ernest Hemingway",
  },
  {
    content: "Life has no limitations, except the ones you make.",
    author: "Les Brown",
  },
  {
    content:
      "It's your outlook on life that counts. If you take yourself lightly and don't take yourself too seriously, pretty soon you can find the humor in our everyday lives. And sometimes it can be a lifesaver.",
    author: "Betty White",
  },
  { content: "Live for each second without hesitation.", author: "Elton John" },
  {
    content: "The most wasted of all days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    content: "Start each day with a positive thought and a grateful heart.",
    author: "Roy Bennett",
  },
  {
    content:
      "All you need in this life is ignorance and confidence; then success is sure.",
    author: "Mark Twain",
  },
  {
    content:
      "I believe that if you'll just stand up and go, life will open up for you. Something just motivates you to keep moving.",
    author: "Tina Turner",
  },
  {
    content:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas Edison",
  },
  {
    content:
      "I have very strong feelings about how you lead your life. You always look ahead, you never look back.",
    author: "Ann Richards",
  },
  {
    content:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    content: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin",
  },
  {
    content: "You do not find the happy life. You make it.",
    author: "Camilla Eyring Kimball",
  },
  {
    content:
      "A life is not important except in the impact it has on other lives.",
    author: "Jackie Robinson",
  },
  {
    content:
      "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
    author: "Eleanor Roosevelt",
  },
  {
    content:
      "The biggest adventure you can ever take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    content: "If you own this story you get to write the ending.",
    author: "Brené Brown",
  },
  {
    content:
      "Life is like a coin. You can spend it any way you wish, but you only spend it once.",
    author: "Lillian Dickinson",
  },
  {
    content: "Life is about making an impact, not making an income.",
    author: "Kevin Kruse",
  },
  {
    content: "There are no regrets in life, just lessons.",
    author: "Jennifer Aniston",
  },
  {
    content: "Accept no one's definition of your life, define yourself.",
    author: "Harvey Fierstein",
  },
  {
    content: "The longer I live the more beautiful life becomes.",
    author: "Frank Lloyd Wright",
  },
  {
    content:
      "If you love life, don't waste time, for time is what life is made up of.",
    author: "Bruce Lee",
  },
  {
    content:
      "Mistakes are a fact of life. It is the response to the error that counts.",
    author: "Nikki Giovanni",
  },
  {
    content:
      "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard",
  },
  {
    content:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    content:
      "If everything was perfect, you would never learn and you would never grow.",
    author: "Beyoncé",
  },
  {
    content:
      "If we don't change, we don't grow. If we don't grow, we aren't really living.",
    author: "Gail Sheehy",
  },
  {
    content:
      "I have learned that success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.",
    author: "Booker T. Washington",
  },
  {
    content: "Life doesn't have to be perfect to be wonderful.",
    author: "Annette Funicello",
  },
  {
    content:
      "The big lesson in life, baby, is never be scared of anyone or anything.",
    author: "Frank Sinatra",
  },
  {
    content:
      "I think I've discovered the secret of life – you just hang around until you get used to it.",
    author: "Charles Schulz",
  },
  {
    content:
      "Life is very interesting... in the end, some of your greatest pains, become your greatest strengths.",
    author: "Drew Barrymore",
  },
  {
    content:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine",
  },
  {
    content:
      "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only good for wallowing in.",
    author: "Katherine Mansfield",
  },
  {
    content:
      "The most important trip you may take in life is meeting people halfway.",
    author: "Henry Boye",
  },
  {
    content:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    content:
      "Fake friends are like shadows: always near you at your brightest moments, but nowhere to be seen at your darkest hour.",
    author: "Khalil Gibran",
  },
  {
    content:
      "False friendship, like ivy, decays and ruins the walls it embraces; but true friendship gives new life and animation to the object it supports.",
    author: "Richard Burton",
  },
  {
    content:
      "Some people were only friends because you saw them five times a week.",
    author: "",
  },
  {
    content:
      "Being betrayed is one of the most valuable lessons life can teach.",
    author: "Shania Twain",
  },
  {
    content:
      "Don't fear the enemies who attack you, fear the fake friends that hug you.",
    author: "",
  },
  {
    content:
      "Before you count your friends, make sure you can count on them. Some friends are only around when they want something from you but are never there when you need something from them.",
    author: "Rashida Rowe",
  },
  {
    content:
      "Sometimes the person you'd take a bullet for ends up being behind the gun.",
    author: "Tupac",
  },
  {
    content: "People don't change. They just take their masks off.",
    author: "",
  },
  {
    content: "We never lose friends; fake ones are exposed.",
    author: "Carlos Wallace",
  },
  {
    content:
      "Time passes and you begin to see people for who they really are and not who they pretend to be.",
    author: "Scarlet Koop",
  },
  {
    content:
      "Most people want to see you do better, but not doing better than them.",
    author: "London Mond",
  },
  {
    content:
      "It's hard to tell who has your back, from who has it long enough just to stab you in it.",
    author: "Nicole Richie",
  },
  {
    content: "Best friends has 11 letters but so does backstabber.",
    author: "Wiz Khalifa",
  },
  {
    content:
      "No person is your friend who demands your silence, or denies your right to grow.",
    author: "Alice Walker",
  },
  {
    content: "They're not happy for you because they wish it were them.",
    author: "Carlos Wallace",
  },
  {
    content: "Make sure the lions you roll with aren't snakes in disguise.",
    author: "Beenereux Philip",
  },
  {
    content:
      "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
    author: "Oprah Winfrey",
  },
  {
    content:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    content:
      "Fake friends are like soap bubbles. They pop out when the sun shines brightly.",
    author: "Chiranjude Bird",
  },
  {
    content: "Fake friends are with you today and against you tomorrow.",
    author: "Shizra",
  },
  {
    content:
      "Stop texting first and see how many dead plants you've been watering.",
    author: "",
  },
  {
    content:
      "Sometimes it's not the person who changes, it's the mask that falls off.",
    author: "Mhaj Porras",
  },
  {
    content:
      "Stop letting people who do so little for you control so much off your mind, feelings, and emotions.",
    author: "Will Smith",
  },
  {
    content:
      "Be very careful of who you share your problem with, remember that not every friend that smiles at you is your best friend.",
    author: "Kemmy Nola",
  },
  {
    content:
      "A friend who stands with you in pressure is more valuable than a hundred ones who stand with you in pleasure.",
    author: "Edward G. Bulwer Lytton",
  },
  {
    content:
      "You never lose friends. Real ones always stay — no matter what about the fakes, you don't need anyways.",
    author: "Drishti Bablani",
  },
  {
    content:
      "You should be aware of fake friend because it is the hardest to be aware of.",
    author: "Eraldo Banovac",
  },
  {
    content: "Better an honest enemy than a false friend.",
    author: "German Proverb",
  },
  {
    content:
      "The worst pain in the world goes beyond the physical. Even further beyond any other emotional pain one can feel. It is the betrayal of a friend.",
    author: "Heather Brewer",
  },
  {
    content: "What greater wound is there than a false friend?",
    author: "Sophocles",
  },
  {
    content:
      "Some people think that the truth can be hidden away with a little cover-up and decoration. But as time goes by, what is true is revealed, and what is fake fades away.",
    author: "Ismail Haniyeh",
  },
  {
    content: "Friends ask you questions, enemies question you.",
    author: "Criss Jami",
  },
  {
    content:
      "A true friend never gets in your way unless you happen to be going down.",
    author: "Arnold H. Glasow",
  },
  {
    content:
      "You will never have to question the intentions or integrity of people who have your best interest at heart.",
    author: "Germany Kent",
  },
  {
    content: "People only throw shade on what's shining.",
    author: "Genereux Philip",
  },
  {
    content:
      "Letting go of toxic people in your life is a big step in loving yourself.",
    author: "Hussein Nishah",
  },
  {
    content:
      "If you're absent during my struggle, don't expect to be present during my success.",
    author: "Will Smith",
  },
  {
    content:
      "You got nothing to lose. You don't lose when you lose fake friends.",
    author: "Joan Jett",
  },
  {
    content:
      "At some point you have to learn that some people can stay in your heart but not in your life.",
    author: "Sandi Lynn",
  },
  {
    content:
      "You create more space in your life when you turn your excess baggage to garbage.",
    author: "Chinonye J. Chudolue",
  },
  {
    content: "Never give your attention to someone who deserves your silence.",
    author: "Emma Xu",
  },
  {
    content:
      "It makes no sense to try to extend a friendship that was only meant to be a season into a lifetime.",
    author: "Mandy Hale",
  },
  {
    content:
      "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
    author: "John Green",
  },
  {
    content: "Loved you yesterday, love you still, always have, always will.",
    author: "Elaine Davis",
  },
  {
    content:
      "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
    author: "Angelita Lim",
  },
  {
    content:
      "I love you not only for what you are, but for what I am when I am with you. I love you not only for what you have made of yourself, but for what you are making of me. I love you for the part of me that you bring out.",
    author: "Elizabeth Barrett Browning",
  },
  {
    content: "If I know what love is, it is because of you.",
    author: "Hermann Hesse",
  },
  {
    content:
      "I fell in love with her courage, her sincerity, and her flaming self respect. And it’s these things I’d believe in, even if the whole world indulged in wild suspicions that she wasn’t all she should be. I love her and it is the beginning of everything.",
    author: "F. Scott Fitzgerald",
  },
  {
    content:
      "I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.",
    author: "Leo Christopher",
  },
  {
    content:
      "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
    author: "A. A. Milne",
  },
  {
    content:
      "A man is already halfway in love with any woman who listens to him.",
    author: "Brendan Francis",
  },
  {
    content:
      "I love you as certain dark things are to be loved, in secret, between the shadow and the soul.",
    author: "Pablo Neruda",
  },
  {
    content: "Women are meant to be loved, not to be understood.",
    author: "Oscar Wilde",
  },
  { content: "You make me want to be a better man.", author: "Melvin Udall" },
  {
    content:
      "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.",
    author: "Unknown",
  },
  {
    content:
      "Take my hand, take my whole life too. For I can’t help falling in love with you.",
    author: "Elvis Presley",
  },
  {
    content: "Grow old along with me; the best is yet to be.",
    author: "Robert Browning",
  },
  {
    content:
      "The real lover is a man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.",
    author: "Marilyn Monroe",
  },
  {
    content:
      "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    author: "Maya Angelou",
  },
  {
    content: "I’ll be loving you, always with a love that’s true",
    author: "Patsy Cline",
  },
  {
    content:
      "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.",
    author: "Unknown",
  },
  { content: "I need you like a heart needs a beat.", author: "One Republic" },
  {
    content:
      "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
    author: "Sarah Dessen",
  },
  {
    content:
      "Love is that condition in which the happiness of another person is essential to your own.",
    author: "Robert A. Heinlein",
  },
  {
    content:
      "Love never dies a natural death. It dies because we don’t know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.",
    author: "Anais Nin",
  },
  {
    content: "He is not a lover who does not love forever.",
    author: "Euripides",
  },
  { content: "To love is to burn, to be on fire.", author: "Jane Austen" },
  {
    content:
      "Love does not begin and end the way we seem to think it does. Love is a battle, love is a war; love is a growing up.",
    author: "James Baldwin",
  },
  {
    content:
      "In the end we discover that to love and let go can be the same thing.",
    author: "Jack Kornfield",
  },
  {
    content:
      "Pleasure of love lasts but a moment. Pain of love lasts a lifetime.",
    author: "Bette Davis",
  },
  {
    content:
      "To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If you want to make sure of keeping it intact you must give it to no one, not even an animal. Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless, it will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable. To love is to be vulnerable.",
    author: "C.S. Lewis",
  },
  {
    content:
      "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
    author: "Paulo Coelho",
  },
  {
    content: "Love is so short, forgetting is so long.",
    author: "Pablo Neruda",
  },
  {
    content: "Love is a thing that is full of cares and fears.",
    author: "Ovid",
  },
  {
    content: "Love is not love until love’s vulnerable.",
    author: "Theodore Roethke",
  },
];

const QuoteContainer: React.FC<QuoteContainerProps> = ({
  textQuote = "loading...",
  authorQuote = "unknown",
  isLoading = false,
  onNewQuote = () => {},
}) => {
  return (
    <div
      id="quote-box"
      className="bg-white shadow-sm rounded-lg p-8 max-w-2xl w-full mx-auto transform transition-all duration-300 hover:bg-gray-50"
    >
      <div
        id="text"
        className={`flex gap-4  text-2xl font-serif transition-opacity duration-300  ${
          isLoading ? "opacity-50" : "opacity-100"
        }`}
      >
        <span className="text-4xl">"</span>
        {textQuote + textQuote || "loading..."}
      </div>

      <div
        id="author"
        className={`text-right italic text-gray-600 font-medium transition-opacity duration-300  ${
          isLoading ? "opacity-50" : "opacity-100"
        }`}
      >
        ~{authorQuote || "unknown"}
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center gap-2">
          <a
            id="tweet-quote"
            role="button"
            className="flex items-center gap-2 px-4 py-2 border-2 border-[#3187ff] text-[#3187ff] rounded-lg hover:bg-blue-50"
            aria-label="Tweet this quote"
          >
            <img src={x} alt="bsky" width={20} />
            <span>Tweet</span>
          </a>
          <a
            id="Skeet-quote"
            role="button"
            className="flex items-center gap-2 px-4 py-2 border-2 border-[#3187ff] text-[#3187ff] rounded-lg hover:bg-blue-50"
            aria-label="Skeet this quote"
          >
            <img src={butterfly} alt="bsky" width={20} />
            <span>Skeet</span>
          </a>
        </div>
        <a
          id="new-quote"
          role="button"
          className="flex items-center gap-2 px-4 py-2 border-2 border-[#3187ff] text-[#3187ff] rounded-lg hover:bg-blue-50"
          aria-label="new Quote"
          onClick={() => onNewQuote()}
        >
          New Quote
        </a>
      </div>
    </div>
  );
};

export default QuoteContainer;
