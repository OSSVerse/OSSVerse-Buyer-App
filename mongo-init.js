db = db.getSiblingDB("test");
db.article.drop();

db.article.insertOne( {
    title : "this is my title" , 
    author : "bob" , 
    posted : new Date(1079895594000) , 
    pageViews : 5 , 
    tags : [ "fun" , "good" , "fun" ] ,
    comments : [ 
        { author :"joe" , text : "this is cool" } , 
        { author :"sam" , text : "this is bad" } 
    ],
    other : { foo : 5 }
});