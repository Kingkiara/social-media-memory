namespace SpriteKind {
    export const glyph = SpriteKind.create()
    export const UI = SpriteKind.create()
}
function InitUI () {
    mySprite = sprites.create(imageList[0], SpriteKind.UI)
    mySprite.setPosition(60, 90)
    mySprite = sprites.create(imageList[1], SpriteKind.UI)
    mySprite.setPosition(80, 90)
    mySprite = sprites.create(imageList[2], SpriteKind.UI)
    mySprite.setPosition(100, 90)
    mySprite = sprites.create(imageList[3], SpriteKind.UI)
    mySprite.setPosition(60, 108)
    mySprite = sprites.create(imageList[4], SpriteKind.UI)
    mySprite.setPosition(80, 108)
    mySprite = sprites.create(imageList[5], SpriteKind.UI)
    mySprite.setPosition(100, 108)
    CursorSprite = sprites.create(img`
        1 1 1 1 1 . . . . . . 1 1 1 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 1 1 1 . . . . . . 1 1 1 1 1 
        `, SpriteKind.UI)
    CursorSprite.setPosition(60, 90)
    curX = 0
    curY = 0
}
function PlaySequence () {
    for (let index2 = 0; index2 <= CodeSequence.length - 1; index2++) {
        CurrentIndex = index2
        AddToSpriteList()
        pause(200)
    }
    pause(600)
    for (let value2 of spriteList) {
        value2.destroy()
    }
    CurrentIndex = 0
    PlayerTurn = true
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.max(0, curY - 1)
    UpdateCurPos()
})
function AddToSequence () {
    CodeSequence.push(randint(0, 5))
}
function InitSounds2 () {
    SoundList = [
    165,
    175,
    196,
    220,
    247,
    262
    ]
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerTurn == true) {
        CursorAt = curX + curY * 3
        if (CursorAt == CodeSequence[CurrentIndex]) {
            AddToSpriteList()
            info.changeScoreBy(1)
            CurrentIndex += 1
            if (CurrentIndex == CodeSequence.length) {
                NextLevel()
            }
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
        }
    }
})
function InitImages () {
    imageList = [
    img`
        . . . . . . . . . . . . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 f f 5 5 5 5 5 5 . 
        . 5 5 5 5 5 f 1 1 f 5 5 5 5 5 . 
        . 5 5 5 5 f 1 1 1 1 f 5 5 5 5 . 
        . 5 5 5 f 1 1 1 1 1 1 f 5 5 5 . 
        . 5 5 5 5 f 1 1 1 1 f 5 5 5 5 . 
        . 5 5 5 f 1 1 1 1 1 1 f 5 5 5 . 
        . 5 5 5 5 f f 1 1 f f 5 5 5 5 . 
        . 5 5 5 5 5 5 f f 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 1 1 1 1 2 2 2 2 2 . 
        . 2 2 2 2 1 1 2 2 1 1 2 2 2 2 . 
        . 2 2 2 1 2 2 2 2 2 1 1 2 2 2 . 
        . 2 2 2 1 2 2 1 2 2 1 1 2 2 2 . 
        . 2 2 2 1 2 2 1 2 2 1 2 2 2 2 . 
        . 2 2 2 1 1 2 1 2 1 1 2 2 2 2 . 
        . 2 2 2 2 1 1 1 1 1 2 2 2 2 2 . 
        . 2 2 2 2 2 2 1 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 1 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 1 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 1 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . 8 8 8 8 6 6 a a a a 3 3 3 3 . 
        . 8 8 8 8 6 a a a a 3 3 3 3 2 . 
        . 8 8 8 6 a a a a 3 3 3 3 2 2 . 
        . 8 8 1 1 1 1 1 1 1 1 1 2 2 2 . 
        . 8 6 1 a a a a 3 3 3 1 2 2 2 . 
        . 6 a 1 a a a 3 3 1 2 1 2 2 4 . 
        . a a 1 a a 1 1 1 2 2 1 2 4 4 . 
        . a a 1 a 3 1 3 1 2 2 1 4 4 4 . 
        . a a 1 3 3 1 2 1 2 2 1 4 4 4 . 
        . a 3 1 3 3 1 1 1 2 4 1 4 4 4 . 
        . 3 3 1 2 2 2 2 2 4 4 1 4 4 5 . 
        . 3 3 1 1 1 1 1 1 1 1 1 4 5 5 . 
        . 2 2 2 2 2 4 4 4 4 4 5 5 5 5 . 
        . 2 2 2 2 2 4 4 4 4 5 5 5 5 5 . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 1 1 1 8 8 8 8 8 . 
        . 8 8 8 8 8 8 1 8 1 8 8 8 8 8 . 
        . 8 8 8 8 8 8 1 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 1 1 1 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 1 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 1 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 1 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f 1 f f f 1 f f f f f . 
        . f f f f 1 1 f 1 1 f f f f f . 
        . f f f f f f 1 1 f f f f f f . 
        . f f f f f f 1 1 f f f f f f . 
        . f f f f f 1 f 1 1 f f f f f . 
        . f f f f 1 f f f 1 1 f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f 1 f f f f f f f . 
        . f f f f f 9 1 1 f f f f f f . 
        . f f f f f 9 1 1 1 f f f f f . 
        . f f f f f 9 1 2 f f f f f f . 
        . f f f f f 9 1 2 f f f f f f . 
        . f f f 1 9 9 1 2 f f f f f f . 
        . f f f 1 9 9 1 2 f f f f f f . 
        . f f f f 1 1 2 2 f f f f f f . 
        . f f f f 2 2 2 f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        `
    ]
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.max(0, curX - 1)
    UpdateCurPos()
})
function UpdateCurPos () {
    CursorSprite.x = 60 + 20 * curX
    CursorSprite.y = 90 + 18 * curY
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.min(2, curX + 1)
    UpdateCurPos()
})
function InitSequence () {
    for (let index3 = 0; index3 <= 2; index3++) {
        AddToSequence()
    }
}
function NextLevel () {
    PlayerTurn = false
    pause(500)
    for (let value3 of spriteList) {
        value3.destroy()
    }
    AddToSequence()
    PlaySequence()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.min(1, curX + 1)
    UpdateCurPos()
})
function AddToSpriteList () {
    x = CurrentIndex % 9 * 17
    y = Math.floor(CurrentIndex / 9) * 17
    mySprite = sprites.create(imageList[CodeSequence[CurrentIndex]], SpriteKind.glyph)
    spriteList[CurrentIndex] = mySprite
    mySprite.left = x + 5
    mySprite.top = y + 20
    music.playTone(SoundList[CodeSequence[CurrentIndex]], music.beat(BeatFraction.Half))
}
sprites.onCreated(SpriteKind.UI, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
let y = 0
let x = 0
let CursorAt = 0
let SoundList: number[] = []
let PlayerTurn = false
let CurrentIndex = 0
let CodeSequence: number[] = []
let curY = 0
let curX = 0
let CursorSprite: Sprite = null
let imageList: Image[] = []
let mySprite: Sprite = null
let spriteList: Sprite[] = []
let index = 0
let value = 0
game.showLongText("Memorize the sequence and replay it", DialogLayout.Bottom)
spriteList = sprites.allOfKind(SpriteKind.glyph)
info.setScore(0)
info.setLife(3)
InitImages()
InitSounds2()
InitUI()
InitSequence()
PlaySequence()
