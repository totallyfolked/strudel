setcpm(420/8)
/*
  @title Schottische Urbaine - Gregory Jolivet (cover / remix)
  @by totallyfolked
*/
samples({
  moog: { 'g2': 'Samples/Instruments/004_Mighty Moog G2.wav' },
  kick:   'Samples/Kicks/1 - trance-kick_140bpm_F_minor.wav',
  flute: { 'c4': 'Samples/Instruments/flute_c4_2.wav' }},
 'github:totallyfolked/strudel')


let tuneA = note(`<[e3 a3 a3 g3 a3@3 b3] [c#4 a3 c#4 d4 e4@2 [c#4@ d4@] e4] [d4 c#4 b3 a3 g3@2 [g3 g#3] a3] [b3 d4 b3 a3 g3@2 e3@2]
                  [e3 a3 a3 g3 a3@3 b3] [c#4 a3 c#4 d4 e4@2 [c#4@ d4@] e4] [d4 c#4 b3 a3 g3@3 a3] [b3 d4 b3 g3 a3@4]>`).o(3)

let tuneB = note(`<[c#4@2 a3 d4@2 a3 e4@3 f#4 e4 d#4 e4@2 [c#4@ d4@] e4]@2 [d4 c#4 b3 a3 g3@3 a3] [b3 d4 b3 a3 g3@2 e3@2]
                  [c#4@2 a3 d4@2 a3 e4@3 f#4 e4 d#4 e4@2 [c#4@ d4@] e4]@2 [d4 c#4 b3 a3 g3@3 a3] [b3 d4 b3 g3 a3@4]>`).o(3)

let bassline = stack(note(`<e2 a2 a2 g2 a2@2 a2@7 g2 a2 b2   g2@2 e2@10 g2@2 g2 e2 
                           e2 a2 a2 g2 a2@2 a2@7 g2 a2 b2    -@16 >`).s("moog").clip(1.2).acidenv(.6).fast(8).o(3),
                     note(`< -@48 g2@8 e2@6 a2@2>`).s("moog").vib(.5).vibmod(.3).clip(1.2).acidenv(.6).fast(8).o(3))
                                   

let bassDrone = note("<a2@8>").add(note("0,.1,-12")).s("tri").acidenv(.3).gain(.8).adsr(".1:0:1:1").o(3)

let bassPulse = note("<a1>").add(note("0,.1")).s("saw").acidenv(.5).gain(.9).adsr("0:1:.5:.5").clip(1).slow(4).o(3)

let kick =s("kick:1").fast(2).duck("3:4").duckattack(.9).duckdepth(.1).gain(.8)

let hats = s("[hh:3]*8").gain("[.4 .8]*2")

let claps = s("- cp").bank("tr808")


arrange(
  //[4, s("-")],
  [16, stack (tuneA.s("supersaw").clip(1.5).detune(.3).acidenv(.5).pg(.8).asym("1:.9").lpd(.8).dly(.3).delayfeedback(.1),bassDrone)],
  [16, stack (tuneB.s("supersaw").clip(1.5).detune(.3).acidenv(.5).pg(.8).asym("1:.9").lpd(.8).dly(.3).delayfeedback(.1),hats,bassDrone)],
  [16, stack (tuneA.s("supersaw").clip(1.5).detune(.3).acidenv(.5).pg(.8).asym("1:.9").lpd(.8).dly(.3).delayfeedback(.1),hats,bassPulse)],
  [16, stack (tuneB.s("supersaw").clip(1.5).detune(.3).acidenv(.5).pg(.8).asym("1:.9").lpd(.8).dly(.3).delayfeedback(.1),hats,bassPulse,kick)],
  [8,  stack (tuneA.s("moog").clip(1.2).detune(rand).o(4).acidenv(.7).add(note("-12")))],
  [8,  stack (tuneA.s("moog").clip(1.2).detune(rand).o(4).acidenv(sine.range(.5,.8).slow(6)).add(note("-12")), hats,bassPulse,kick)],
  [16, stack (tuneB.s("moog").clip(1.2).detune(rand).o(4).acidenv(sine.range(.5,.8).slow(6)).add(note("-12")), hats,bassPulse,kick)],
  [16, stack(bassline, hats)],
  [16, stack (tuneA.s("moog").clip(1.2).detune(rand).o(4).acidenv(sine.range(.5,.8).slow(6)),bassline.gain(.7),hats,kick)],
  [16, stack (tuneB.s("moog").clip(1.2).detune(rand).o(4).acidenv(sine.range(.5,.8).slow(6)),bassline.gain(.7),hats,kick)],
  [16, stack (tuneA.s("moog").clip(1.2).detune(rand).o(4).acidenv(sine.range(.5,.8).slow(6)),bassline.gain(.7),hats,bassPulse,kick,claps)],
  [16, stack (tuneB.s("moog").clip(1.2).detune(rand).o(4).acidenv(sine.range(.5,.8).slow(6)),bassline.gain(.7),hats,bassPulse,kick,claps)],
  [16, s("-------")]
)
