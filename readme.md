# Mongoose Mini-Project

Mongoose is an ORM for Mongo databases, just like Sequelize is an ORM for SQL databases. MongoDB is known as a "No-SQL" database. This can offer us a lot of flexibility as we are now free from the constraints that SQL puts on us.

## Mongoose: Keeping some order

When using MongoDB, you can have some properties in one document and a different set on another document. Mongoose does require you to use a model, so it does enforce some consistency between different documents in your collection.

### Documents? Collections?

| In SQL you used... | In Mongo, you'll use... |
| ------------------ | ----------------------- |
| Database | Database |
| Table | Collection |
| Row | Document |

In MongoDB, you store data in a format called BSON. BSON looks a lot like JSON, and in fact, they are related. BSON is a superset of JSON, which means it does everything JSON does, and a little bit more, such as defining ObjectIds. A typical document (row) in a User collection (table) would look something like this:

```json
{
    "_id" : ObjectId("5a62b3d038556634d8280ec4"),
    "name" : "Brandi",
    "email" : "brandi.williams@generalassemb.ly",
    "password" : "$2a$10$/aDegwwlqdtgq466X8aCmeMFUqEtEAQVId4oUUVv8/WaspxBnC5YW"
}
```

## What about Associations/Relationships?

Mongo doesn't do joins like SQL. Instead it has two ways of relating data between different collections. 

The first way is by reference. This looks the most like a traditional join in that it uses the ObjectId (this is the unique identifier for a document) to reference something in another collection.

The second way is through embedded data. These are also known as sub-documents. You've seen a JSON object before with an embedded array - this is a similar idea. 

> Refer to the [class notes](https://gawdiseattle.gitbooks.io/wdi/05-express/express-mongoose/readme.html) if you need examples of using these!

## Your Assignment

Requirements:

Today we'll make an app that relates museums to pieces of art. We'll make schemas for Museum, Piece, and Creator.

* You've demonstrated the ability to create schemas and models with Mongoose
    * You have a Museum model
    * You have a Piece model
    * One Museum has many Pieces (reference relationship)
    * Each Piece has a Creator 
    * Creator is a sub-document of Piece (embedded relationship)
* You've demonstrated a 1:M relationship via reference
    * When viewing a Museum, you can see a list of its Pieces
    * When viewing a Piece, you can see its Museum
* You've demonstrated a 1:M relationship via embedding
    * When viewing a Piece, you can see info on its Creator
* You have GET and POST routes to view and add data to each collection

## How do I start?

For this we'll take a short journey backward into Node, Express, and EJS!

* Fork and clone this repo - we'll be turning this in!
* Start with stubbing out `index.js`. Some inline hints are provided for you.
* Next make your models. Refer to in-class examples, and modify them to fit your needs.
* Create forms that post data to your server for each collection
* Create show pages that allow you to view both the item and it's related data from the other collection

