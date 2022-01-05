//INSERT DOCUMENTS
//Insert the following documents into a movies collection.
db.movies.insert({
  title: "Star Wars",
  writer: "George Lucas",
  year: 1977,
  actor: [
    "Mark Hamill",
    "Harrison Ford",
    "Carrie Fisher",
    "Peter Cushing",
    "James Earl Jones",
  ],
});
db.movies.insert({
  title: "Raiders of the Lost Ark",
  writer: "George Lucas",
  year: 1981,
  actor: ["Harrison Ford"]
});
db.movies.insert({
  title: "Fight Club",
  writer: "Chuck Palahniuk",
  year: 1999,
  actor: ["Brad Pitt", "Edward Norton"]
});
db.movies.insert({
  title: "Pulp Fiction",
  writer: "Quentin Tarantino",
  year: 1994,
  actors: [
    "John Travolta",
    "Uma Thurman"
  ]
});
db.movies.insert({
  title: "Inglorious Basterds",
  writer: "Quentin Tarantino",
  year: 2009,
  actors: [
    "Brad Pitt",
    "Diane Kruger",
    "Eli Roth"
  ]
});
db.movies.insert({
  title: "The Hobbit: An Unexpected Journey",
  writer: "J.R.R. Tolkien",
  year: 2012,
  franchise: "The Hobbit"
});
db.movies.insert({
  title: "The Hobbit: The Desolation of Smaug",
  writer: "J.R.R. Tolkien",
  year: 2013,
  franchise: "The Hobbit"
});
db.movies.insert({
  title: "The Hobbit: The Battle of the Five Armies",
  writer: "J.R.R. Tolkien",
  year: 2012,
  franchise: "The Hobbit",
  synopsis: "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
});
db.movies.insert({
  title: "Pee Wee Herman's Big Adventure",
  writer: "Phil Hartman",
  year: 1985
});
db.movies.insert({
  title: "Avatar"
});

//QUERY/FIND DOCUMENTS
//Query the movies collection to:
//1. get all documents
db.movies.find({});
//2. get all documents with writer set to "Quentin Tarantino"
db.movies.find({
  writer: "Quentin Tarantino"
});
//3. get all documents where actors include "Brad Pitt"
db.movies.find({
  actors: "Brad Pitt"
});
//4. get all documents with franchise set to "The Hobbit"
db.movies.find({
  franchise: "The Hobbit"
});
//5. get all movies released in the '90s
db.movies.find({
  year: {
    $gt: 1990,
    $lt: 2000
  }
});
//6. get all movies released before the year 2000 or after 2010
db.movies.find({
  year: {
    $not: {
      $gt: 2000,
      $lt: 2010
    }
  }
});

//UPDATE DOCUMENTS
//1. add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
db.movies.updateOne({
  title: "The Hobbit: An Unexpected Journey"
}, {
  $set: {
    synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.",
  },
});
//2. add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
db.movies.updateOne({
  title: "The Hobbit: The Desolation of Smaug"
}, {
  $set: {
    synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
  },
});
//3. add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
db.movies.updateOne({
  title: "Pulp Fiction"
}, {
  $set: {
    actors: ['Samuel L. Jackson']
  }
})

//TEXT SEARCH
//Created text index to use text search
db.movies.createIndex({synopsis: "text"});
//1. find all movies that have a synopsis that contains the word "Bilbo"
db.movies.find({ $text: { $search: "Biblo" }});
//2. find all movies that have a synopsis that contains the word "Gandalf"
db.movies.find({$text: {$search: "Gandalf"}});
//3. find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"
db.movies.find({ $text: { $search: "Bilbo -Gandalf" } });
//4. find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
db.movies.find({$text: {$search: 'dwarves hobbit'}})
//5. find all movies that have a synopsis that contains the word "gold" and "dragon"
db.movies.find({$text: {$search: "\"gold\" \"dragon\""}})

//DELETE DOCUMENTS
//1. delete the movie "Pee Wee Herman's Big Adventure"
db.movies.deleteOne({ title: "Pee Wee Herman's Big Adventure" });
//2. delete the movie "Avatar"
db.movies.deleteOne({ title: "Avatar" });

//RELATIONSHIPS
//INSERT USERS

db.user.insert({
    username : "SallySmith",
    first_name : "Sally",
    last_name : "Smith"
});
db.user.insert({
    username : "JimmyHagen",
    full_name : {
        first : "Jimmy",
        last : "Hagen"
    }
})

//INSERT POST
db.posts.insert({
    username : "SallySmith",
    title : "Passes out at party",
    body : "Wakes up early and cleans house"
});
db.posts.insert({
    username : "SallySmith",
    title : "Buys a House",
    body : "Living in a new neighborhood now"
});
db.posts.insert({
    username : "SallySmith",
    title : "Reports a bug in your code",
    body : "Sends you a Pull Request"
})
db.posts.insert({
    username : "JimmyHagen",
    title : "Borrows something",
    body : "Returns it when he is done"
});
db.posts.insert({
    username : "JimmyHagen",
    title : "Borrows everything",
    body : "The end"
});
db.posts.insert({
    username : "JimmyHagen",
    title : "Forks your repo on github",
    body : "Sets to private"
});

//INSERT COMMENTS
db.comments.insert({
  username: "SallySmith",
  comment: "Hope you got a good deal!",
  post: "61d5e0ca15ab85a0c025c087",
});
db.comments.insert({
  username: "SallySmith",
  comment: "What's mine is yours!",
  post: "61d5e0ca15ab85a0c025c088",
});
db.comments.insert({
  username : "SallySmith",
  comment : "Don't violate the licensing agreement!",
  post : "61d5e0cc15ab85a0c025c089"
})
db.comments.insert({
  username: "JimmyHagen",
  comment: "It still isn't clean",
  post: "61d5e0be15ab85a0c025c084",
});
db.comments.insert({
  username : "JimmyHagen",
  comment : "Denied your PR cause I found a hack",
  post : "61d5e0ca15ab85a0c025c086"
});

//QUERYING RELATED COLLECTIONS

//1. find all users
db.user.find({})
//2. find all posts
db.posts.find({})
//3. find all posts authored by "SallySmith"
db.posts.find({ username: "SallySmith" });
//4. find all posts authored by "JimmyHagen"
db.posts.find({ username: "JimmyHagen" });
//5. find all comments
db.comments.find({})
//6. find all comments authored by "SallySmith"
db.comments.find({ username: "SallySmith" });
//7. find all comments authored by "JimmyHagen"
db.comments.find({ username: "JimmyHagen" });
//8. find all comments belonging to the post "Reports a bug in your code"
db.comments.find({ post: "61d5e0ca15ab85a0c025c086" });