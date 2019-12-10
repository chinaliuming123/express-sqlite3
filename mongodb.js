const { MongoClient } = require('mongodb')

MongoClient.connect(
    'mongodb://localhost:27017/articles',
    { useNewUrlParser: true },
    /**
     * 创建集合
     */
    // (err, db) => {
    //     if (err) throw err;
    //     console.log('数据库已创建!');
    //     const dbase = db.db('articles')
    //     dbase.createCollection('site', (err, res) => {
    //         if (err) throw err;
    //         console.log('创建集合')
    //         console.log(res)

    //         db.close()
    //     })
    // }
    /**
     * 插入一条数据
     */
    // (err, db) => {
    //     if (err) throw err;
    //     const dbase = db.db('articles')
    //     const data = { key: 'value' }
    //     dbase.collection('site').insertOne(data, (err, res) => {
    //         if (err) throw err;
    //         console.log('数据插入成功')
    //         console.log(`插入文档的条数为 ${res.insertedCount}`)

    //         db.close()
    //     })
    // }
    /**
     * 插入多条数据
     */
    // (err, db) => {
    //     if (err) throw err;
    //     const dbase = db.db('articles')
    //     const data = [
    //         { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn' },
    //         { name: 'Google', url: 'https://www.google.com', type: 'en' },
    //         { name: 'Facebook', url: 'https://www.google.com', type: 'en' }
    //     ]
    //     dbase.collection('site').insertMany(data, (err, res) => {
    //         if (err) throw err;
    //         console.log('数据插入成功')
    //         console.log(`插入文档的条数为 ${res.insertedCount}`)

    //         db.close()
    //     })
    // }
    /**
     * 查询数据
     */
    // (err, db) => {
    //     if (err) throw err;
    //     const dbase = db.db('articles')
    //     dbase.collection('site').find({}).toArray((err, result) => {
    //         if (err) throw err;
    //         console.log(result)
    //         db.close()
    //     })
    // }
    /**
     * 查询指定条件的数据
     */
    // (err, db) => {
    //     if (err) throw err;
    //     const dbase = db.db('articles')
    //     dbase.collection('site').find({ name: 'Google' }).toArray((err, result) => {
    //         if (err) throw err;
    //         console.log(result)
    //         db.close()
    //     })
    // }
    /**
     * 更新指定条件一条数据
    //  */
    // (err, db) => {
    //     if (err) throw err;
    //     const dbase = db.db('articles');
    //     const whereStr = { name: '菜鸟工具' };
    //     const updateStr = { $set: { url: 'www.runoob.com' } }
    //     dbase.collection('site').updateOne(whereStr, updateStr, (err, result) => {
    //         if (err) throw err;
    //         console.log('文档更新成功')
    //         db.close()
    //     })
    // }
    /**
     * 更新多条数据
     */
    // (err, db) => {
    //     if (err) throw err;
    //     const dbase = db.db('articles')
    //     const whereStr = { type: 'en' };
    //     const updateStr = { $set: { url: 'https://www.runoob.com' } };
    //     dbase.collection('site').updateMany(whereStr, updateStr, (err, res) => {
    //         if (err) throw err;
    //         console.log(res.result.nModified + '条文档被更新')
    //         db.close()
    //     })
    // }
    /**
     * 删除多条数据
     */
    // (err, db) => {
    //     if (err) throw err;
    //     const dbase = db.db('articles');
    //     const whereStr = { type: 'en' };
    //     dbase.collection('site').deleteMany(whereStr, (err, res) => {
    //         if (err) throw err;
    //         console.log(res.result.n + '条数据被删除')
    //         db.close()
    //     })
    // }
    /**
     * 排序
     */
    // (err, db) => {
    //     if (err) throw err;
    //     const dbase = db.db('articles');
    //     const sortStr = { type: -1 };
    //     dbase.collection('site').find().sort(sortStr).toArray((err, res) => {
    //         if (err) throw err;
    //         console.log(res)
    //         db.close()
    //     })
    // }
    /**
     * 分页,读取 limit(2) 条数据
     */
    // (err, db) => {
    //     if (err) throw err;
    //     const dbase = db.db('articles');
    //     dbase.collection('site').find().limit(2).toArray((err, res) => {
    //         if (err) throw err;
    //         console.log(res)
    //         db.close()
    //     })
    // }
    /**
     * 跳过 skip(2) 条数据
     */
    // (err, db) => {
    //     if (err) throw err;
    //     const dbase = db.db('articles');
    //     dbase.collection('site').find().skip(1).limit(1).toArray((err, res) => {
    //         if (err) throw err;
    //         console.log(res)
    //         db.close()
    //     })
    // }
    /**
     * 删除集合
     */
    // (err, db) => {
    //     if (err) throw err;
    //     const dbase = db.db('articles');
    //     dbase.collection('articles').drop((err, delOK) => {
    //         if (err) throw err;
    //         if (delOK) console.log('集合已删除')
    //         db.close()
    //     })
    // }
)