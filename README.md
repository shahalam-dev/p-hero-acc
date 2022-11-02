# p-hero-acc
----

## Module Five
----

**create/select database**

```
use <Database name>
```

**show all DBs**

```
show dbs
```

**insert into DB**

```
db.<collection_name>.insertOne(<Database Name>)

db.<collection_name>.insertMany([<Database Name>])
```

**show all data**

```
db.<collection_name>.find()
```

**find document count**

```
db.<collection_name>.find().count()
```


**lmit and skip document**

```
db.<collection_name>.find().limit(<valule>)

db.<collection_name>.find().skip(<valule>)limit(<valule>)
```

**sort document**

```
db.<collection_name>.find().sort({<condition>})
```

**projection**

```
db.<collection_name>.find().projection({<condition>})
```

**mongoDB operators**

```
db.<collection_name>.find({ age: { $gt: 22}})

db.<collection_name>.find({ age: { $gte: 22}})

db.<collection_name>.find({ age: { $lt: 22}})

db.<collection_name>.find({ age: { $lte: 22}})

db.<collection_name>.find({ age: { $eq: 22}})

db.<collection_name>.find({ age: { $ne: 22}})

db.<collection_name>.find({ age: { $in: [2 , 3]}})

db.<collection_name>.find({ age: { $nin: [2 , 3]}})

db.<collection_name>.find({ $and: [{ $in: [2 , 3]},  { age: { $lte: 22}}]})

db.<collection_name>.find({ $or: [{ $in: [2 , 3]},  { age: { $lte: 22}}]})

db.<collection_name>.find({ age: { $not: { $gte: 22}}})

db.<collection_name>.find({ age: { $exists: true}})

db.<collection_name>.find({ age: { $type: "number"}})

db.<collection_name>.find({ age: { $regex: //}})

db.<collection_name>.find({ age: { $gte: 22}})

db.<collection_name>.find({ $expr: { $gt: ["$col1_name", "$col2_name"]}})


```


**update and delete queries**

```
db.<collection_name>.updateOne({ <finding condition> } , { $set: {age : 23}})

db.<collection_name>.updateMany({ <finding condition> } , { $inc: {age : 2}})

db.<collection_name>.updateMany({ <finding condition> } , { $push: {"skills" : "mongodb"}})


db.<collection_name>.updateMany({ <finding condition> } , { $push: {"skills" : {$each: ["mongodb", "my sql"]}}})

db.<collection_name>.updateMany({ <finding condition> } , { $pull: {"skills" : "mongodb"}})

db.<collection_name>.updateMany({ <finding condition> } , { $pullAll: {"skills" : ["mongodb", "my sql"]}})

db.<collection_name>.updateMany({ <finding condition> } , { $mul: {age : 2}})

db.<collection_name>.updateMany({ <finding condition> } , { $rename: {age : "base"}})

db.<collection_name>.updateMany({ <finding condition> } , { $unset: {age : ""}})

db.<collection_name>.deleteOne({ <finding condition> })

db.<collection_name>.deleteMany({ <finding condition> })

```


***Resources link***
```
https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial

```

**Create Index**
```
db.<collection_name>.createIndex({<name_col>: 1/-1/0}, {name: <custom naming>})
```
