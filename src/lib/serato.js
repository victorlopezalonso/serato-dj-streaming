import axios from "axios";

const getLastTrackFromPlaylist = async (username) => axios
    .get(`https://serato.com/playlists/${username}/live`)
    .then((response) => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = response.data;

      const tracks = Array.prototype.map.call(
        wrapper.getElementsByClassName("playlist-trackname"),
        (track) => track.innerHTML
      );

      if (!tracks.length) {
        return '';
      }

      const lastTrack = tracks[tracks.length - 1];

      console.log(lastTrack);

      return lastTrack.replace("&amp;", "&").trim();
    })
    .catch((error) => {
      console.log(error);
    });
    
export { getLastTrackFromPlaylist };