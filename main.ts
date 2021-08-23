controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Space_Ship, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let Alien: Sprite = null
let projectile: Sprite = null
let Space_Ship: Sprite = null
effects.starField.startScreenEffect()
Space_Ship = sprites.create(img`
    . . . . . . . 8 . . . . . . . 
    . . . . . . 9 9 9 . . . . . . 
    . . . . . . 9 9 9 . . . . . . 
    . . . 8 8 6 9 9 9 6 8 8 . . . 
    . . . 8 4 4 4 4 4 4 4 8 . . . 
    . . . 8 4 5 5 5 5 5 4 8 . . . 
    8 8 8 8 4 5 2 2 2 5 4 8 8 8 8 
    8 8 8 8 4 5 2 2 2 5 4 8 8 8 8 
    8 8 8 8 4 5 5 5 5 5 4 8 8 8 8 
    8 4 4 4 4 4 4 4 4 4 4 4 4 4 8 
    8 4 1 1 1 1 4 4 4 1 1 1 1 4 8 
    4 4 1 1 1 1 4 4 4 1 1 1 1 4 4 
    4 4 1 1 1 1 1 1 1 1 1 1 1 4 4 
    2 2 . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . 2 2 
    2 2 . . . . . . . . . . . 2 2 
    `, SpriteKind.Player)
Space_Ship.setPosition(77, 113)
controller.moveSprite(Space_Ship, 100, 0)
Space_Ship.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    Alien = sprites.createProjectileFromSide(img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 2 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . e 2 . . . . . . . 
        . . . . . . e e 4 e . . . . . . 
        . . . . . . e 2 4 e . . . . . . 
        . . . . . c c c e e e . . . . . 
        . . . . e e 2 2 2 4 e e . . . . 
        . . c f f f c c e e f f e e . . 
        . c c c c e e 2 2 2 2 4 2 e e . 
        c c c c c c e e 2 2 2 4 2 2 e e 
        c c c c c c e e 2 2 2 2 4 2 e e 
        `, 0, 50)
    Alien.x = randint(0, scene.screenWidth())
    Alien.setKind(SpriteKind.Enemy)
})
