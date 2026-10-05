setcpm(90/4)
/*
  @title Synthwave test
  @by totallyfolked
*/
samples({
  snare:   'Samples/Snares/sonic-menace-snares.wav',
  moider: 'Samples/Vox/a-motive-for-murder_E_minor.wav'
},
'github:totallyfolked/strudel')

const kick1 = s("bd:1").bank("tr707").beat("0,1,2,3",4).duck("3").duckatt(.2).duckdepth(.9).pg(0.9)
const kick2 = s("bd:1").bank("tr707").beat("0,1,7,11,15",16).duck("3").duckatt(.2).duckdepth(.9).pg(0.9)


const snare = stack(
  s("snare").beat("1,3",4),
  s("sds5_mt").beat("1,3",4).pg(.7),
  s("cp").bank("tr909").beat(7,8).slow(2).clip(0.5).pg(0.7),
)

const hats = stack(
  s("[- white]!4").dec(.05).pg(0.8),
  s("hh").bank("tr626").beat("14,15",16).clip(0.3).pg(0.5)
)

const testarp = n("<[-4 -3 0 -3]>*4".add("<0 -2 -3 -1>")).scale("e5:minor").s("supersaw").clip(1.2).pg(.9).lpf(2500)._pianoroll()


const randarp = n(irand(5).add("<0 -2 -3 -1>")).scale("e4:minor:pentatonic").seg(16).ribbon(8,4).s("saw").acidenv(slider(0.662)).clip(1.2).pg(.9)._pianoroll()



const arping= n("[4 3 0@2]!4 [1 2 5@2]!4 [1 0 -3@2]!4 [4 3 -1@2]!4").scale("e3:minor").s("saw").slow(4)//.lpf(1600)

const chords = chord("<Em C Bm D>").s("gm_church_organ").voicing().room(.9).pg(.5)//.adsr(".2:.9:.8:.4")



const bass = n("0!16 5!16 -3!16 -1!14 -3 -1").s("supersaw").scale("e2:minor").slow(4).o(3).pg(1.2)
//d1:arping


arrange(
  [1, s('moider')],
  [8, stack(kick1, bass, chords).acidenv(saw.range(.1,1).slow(8))],
  [8, stack(kick1, bass, chords, snare, hats)],
  [16, stack(kick1, bass, chords, snare, hats, testarp)],
  [16, stack(kick1, bass, chords, snare, hats, randarp)]
  
)

