# Reaction Time Game

A two-player reaction time game built with a BBC micro:bit and Microsoft MakeCode. The game uses cardboard, aluminum foil touch pads, and alligator clips to create a physical reaction pad.

Players wait for the signal, then race to touch their foil pad as fast as possible. The micro:bit measures the reaction time, tracks scores, detects false starts, plays sound effects, and announces the winner.

## Project Link

Open the project page here:

https://1040912.github.io/reaction-time-game/

## How It Works

1. A player starts the round by touching the GND pad and the START pad.
2. The micro:bit shows a countdown: 3, 2, 1.
3. The game waits for a random amount of time.
4. A random LED lights up and a sound plays.
5. Player 1 and Player 2 race to react.
6. The first player to touch their pad wins the round.
7. The reaction time is shown in milliseconds.
8. The scoreboard shows both players' scores.
9. The first player to reach 3 points wins the match.
10. Pressing A+B resets the game.

## Pin Connections

| micro:bit Pin | Connected To |
|---|---|
| P0 | START foil pad |
| P1 | Player 1 foil pad |
| P2 | Player 2 foil pad |
| GND | Shared ground foil pad |
| 3V | Not used |

To trigger a pad, the player must complete the circuit by touching GND and one other foil pad at the same time.

## Features

- Two-player reaction system
- Random start delay
- Reaction time measurement in milliseconds
- False-start detection
- Score tracking for both players
- First-to-3 winner system
- Sound effects using the micro:bit speaker
- LED countdown and winner animations
- A+B reset button

## Materials

- BBC micro:bit with speaker
- Cardboard
- Aluminum foil
- Alligator clips
- Tape
- Marker
- Battery pack or USB power

## Physical Build

The cardboard board has separate foil pads for START, Player 1, Player 2, and GND. The GND pad is shared. Players touch the GND pad and their assigned player pad to complete the circuit.

Recommended layout:

```text
             [ START ]

[ GND ]   [ PLAYER 1 ]   [ PLAYER 2 ]
