const fs = require('fs')
const events = require('events')

class Watcher extends events.EventEmitter {
    constructor(watchDir, processedDir) {
        super()
        this.watchDir = watchDir;
        this.processedDir = processedDir
    }

    start() {
        fs.watchFile(this.watchDir, () => {
            this.watch()
        })
    }

    watch() {
        fs.readdir(this.watchDir, (err, files) => {
            if (err) return
            for (let index of files) {
                this.emit('process', files[index])
            }
        })
    }
}

module.exports = Watcher