const express = require('express')
const app = express()
app.set('port', process.env.post || 3000)

const read = require('node-readability')

const Article = require('./db').Article

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/css/bootstrap.css',
    express.static('node_modules\bootstrap\dist\css\bootstrap.css')
)
/**
 * post /articles - 创建新文章
 * get /articles/:id - 获取指定文章
 * get /articles - 获取所有文章
 * delete /articles/:id 删除指定文章
 * 
 */


app.get('/', (req, res, next) => {
    res.render('articles.ejs', { article: articles })
})
app.post('/articles', (req, res, next) => {
    const id = req.body.id
    Article.create(
        { id: id, title: `title${id}`, content: 'result.content' },
        (err, article) => {
            if (err) return next(err)
            res.send('OK')
        })
})
app.get('/articles/:id', (req, res, next) => {
    const id = req.params.id
    Article.find(id, (err, article) => {
        if (err) return next(err)
        res.send(article)
    })
})
app.get('/articles', (req, res, err) => {
    Article.all((err, articles) => {
        if (err) return next(err)
        res.format({
            html: () => {
                res.render('articles.ejs', { articles: articles })
            },
            json: () => {
                res.send(articles)
            }
        })
    })
})
app.delete('/articles/:id', (req, res, next) => {
    const id = req.params.id
    Article.delete(id, (err) => {
        if (err) return next(err)
        res.send({ message: 'delete' })
    })
})

app.listen(app.get('port'), () => {
    console.log('程序已运行')
})

module.exports = app;