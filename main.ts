input.onPinPressed(TouchPin.P0, function () {
    running = false
    false_start = false
    Winner = 0
    round += 1
    basic.showNumber(3)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showNumber(2)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showNumber(1)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.clearScreen()
    basic.pause(1000 + randint(0, 2000))
    if (!(false_start)) {
        start = input.runningTime()
        running = true
        led.stopAnimation()
        basic.clearScreen()
        led.plotBrightness(randint(0, 4), randint(0, 4), 255)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (running) {
        running = false
        end = input.runningTime()
        Winner = 2
        P2_score += 1
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
        basic.pause(500)
        basic.showNumber(end - start)
        basic.showString("P1")
        basic.showNumber(P1_score)
        basic.showString("P2")
        basic.showNumber(P2_score)
    } else if (Winner == 1) {
    	
    } else {
        false_start = true
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . # .
            . . # . #
            . . . . .
            `)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
    }
    if (P2_score >= 3) {
        basic.showString("P2 WIN")
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.AB, function () {
    running = false
    false_start = false
    Winner = 0
    P1_score = 0
    P2_score = 0
    round = 0
    basic.showString("RESET")
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
    basic.showString("READY")
    basic.showIcon(IconNames.Yes)
})
input.onPinPressed(TouchPin.P1, function () {
    if (running) {
        running = false
        end = input.runningTime()
        Winner = 1
        P1_score += 1
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
        basic.pause(500)
        basic.showNumber(end - start)
        basic.showString("P1")
        basic.showNumber(P1_score)
        basic.showString("P2")
        basic.showNumber(P2_score)
    } else if (Winner == 2) {
    	
    } else {
        false_start = true
        basic.showLeds(`
            . . . . .
            # . # . .
            . # . . .
            # . # . .
            . . . . .
            `)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
    }
    if (P1_score >= 3) {
        basic.showString("P1 WIN")
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Happy)
    }
})
let round = 0
let P2_score = 0
let P1_score = 0
let Winner = 0
let end = 0
let start = 0
let false_start = false
let running = false
running = false
false_start = false
start = 0
end = 0
Winner = 0
P1_score = 0
P2_score = 0
round = 0
music.setVolume(180)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
basic.showString("READY")
basic.showIcon(IconNames.Yes)
