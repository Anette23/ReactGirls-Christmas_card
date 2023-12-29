import { useState } from "react";

const Button = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleTogglePlay = () => {
      const audio = document.getElementById("player");
      if (!audio) return;
  
      if (audio.paused) {
        audio.play();
        audio.currentTime = 0;
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    };
  return (
    <aside>
        <audio id="player" name="jingle-bells">
          <source
            src="https://lenadesign.org/wp-content/uploads/2022/12/Jingle-Bells-Instrumental-Jingle-Punks.mp3"
            type="audio/mpeg"
          />
        </audio>

        <button onClick={handleTogglePlay} className="play-button inline-block min-w-[6rem] bg-primary text-base text-text relative px-8 py-4 rounded-xl">
          {isPlaying ? "Pauza" : "Pusti si ma"}
        </button>

      </aside>
  )
}

export default Button