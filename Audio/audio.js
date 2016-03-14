audCtx = new AudioContext()

playNote = function( frequency, duration, amp, attack, decay ) {
  osc = audCtx.createOscillator()
  osc.type = 'square'
  osc.frequency.value = frequency
  
  // create gain node to control amplitude
  gainNode = audCtx.createGain()
  gainNode.gain.setValueAtTime( 0, audCtx.currentTime )
  gainNode.gain.linearRampToValueAtTime( amp, audCtx.currentTime + attack )
  gainNode.gain.linearRampToValueAtTime( 0,   audCtx.currentTime + attack + decay )
  
  osc.connect( gainNode )
  gainNode.connect( audCtx.destination )
 
  osc.start()
  osc.stop( audCtx.currentTime + attack + decay ) 
}
oscNote = function( frequency, duration ) {
  osc = audCtx.createOscillator()

  // square, sine, triangle, sawtooth...
  osc.type = 'square'
  
  osc.frequency.value = frequency

  osc.connect( audCtx.destination )

  osc.start()

  // remove the node two seconds from
  // the current audio time
  osc.stop( audCtx.currentTime + duration ) 
}