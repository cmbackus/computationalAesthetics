! function () {

    var Vec2 = Victor // substitute vector library of your choice

    // pass in canvas context, a starting x and a starting y position
    Turtle = function (canvas, startX, startY) {
        Object.assign(this, {
            canvas: null
            , weight: 1
            , color: 'red'
            , pos: Vec2(startX, startY)
            , dir: Vec2(1, 0)
            , pen: 1
            , posArray: []
            , dirArray: [],

            penUp: function () {
                this.pen = 0
            },

            penDown: function () {
                this.pen = 1
            },

            push: function () {
                this.posArray.push(this.pos.clone())
                this.dirArray.push(this.dir.clone())
            },

            pop: function () {
                this.pos = this.posArray.pop()
                this.dir = this.dirArray.pop()
                this.canvas.moveTo(this.pos.x, this.pos.y)
            },

            // THIS IS IN RADIANS!!!
            rotate: function (amt) {
                this.dir.rotate(amt)
            },

            move: function (amt) {
                if (this.pen) this.canvas.beginPath()
                this.canvas.moveTo(this.pos.x, this.pos.y)

                this.pos.x += this.dir.x * amt
                this.pos.y += this.dir.y * amt

                if (this.pen) {
                    this.canvas.lineTo(this.pos.x, this.pos.y)
                    this.canvas.lineWidth = this.weight
                    this.canvas.stroke()
                    this.canvas.closePath()
                } else {
                    this.moveTo(this.pos.x, this.pos.y)
                }
            }
        , })

        this.canvas = canvas
        this.canvas.moveTo(this.pos.x, this.pos.y)
    }

}()