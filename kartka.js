
// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("swienta","swienta.png")
loadSprite("wombat2","wombat2.png")
loadSound("muzyka", "muza.mp3")

add([
    sprite("swienta")
])

const wombat2 = add([
    sprite("wombat2"),
    pos(100,250)
])



onKeyRelease("space",()=>play ("muzyka"))

onUpdate(()=>{
    if(wombat2.pos.x<400)
    wombat2.pos.x +=1
})

let wprawo = true

player.onUpdate(()  =>{
    if(wprawo && player.pos.x < 600)
    player.pos.x += 1

    else if(!wprawo && player.pos.x > 50)
    player.pos.x -=1

    else wprawo ^= true
})