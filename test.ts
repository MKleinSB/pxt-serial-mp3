
/**
 * Serial MP3 tests 
 */

serialmp3.connectSerialMp3(serialmp3.MakerBitPin.A0, serialmp3.MakerBitPin.A1)

serialmp3.playMp3Track(1, serialmp3.Repeat.Once)
serialmp3.playMp3Track(1, serialmp3.Repeat.Repeat)
serialmp3.playMp3TrackFromFolder(1, 1, serialmp3.Repeat.Once)
serialmp3.playMp3TrackFromFolder(1, 1, serialmp3.Repeat.Repeat)
serialmp3.playMp3Folder(1, serialmp3.Repeat.Once)
serialmp3.playMp3Folder(1, serialmp3.Repeat.Repeat)
serialmp3.setMp3Volume(30)

serialmp3.runMp3Command(serialmp3.Command.PLAY_NEXT_TRACK)
serialmp3.runMp3Command(serialmp3.Command.PLAY_PREVIOUS_TRACK)
serialmp3.runMp3Command(serialmp3.Command.INCREASE_VOLUME)
serialmp3.runMp3Command(serialmp3.Command.DECREASE_VOLUME)
serialmp3.runMp3Command(serialmp3.Command.PAUSE)
serialmp3.runMp3Command(serialmp3.Command.RESUME)
serialmp3.runMp3Command(serialmp3.Command.STOP)
serialmp3.runMp3Command(serialmp3.Command.MUTE)
serialmp3.runMp3Command(serialmp3.Command.UNMUTE)

serialmp3.onPlaybackCompleted(() => {})

