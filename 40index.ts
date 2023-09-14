function make_album(artist, album_title, num_tracks) {
    const album = {
      artist: artist,
      title: album_title
    };
  
    if (num_tracks !== undefined) {
      album.tracks = num_tracks;
    }
  
    return album;
  }
  
  // Create three album objects without specifying the number of tracks
  const album1 = make_album('Artist1', 'Album Title 1');
  const album2 = make_album('Artist2', 'Album Title 2');
  const album3 = make_album('Artist3', 'Album Title 3');
  
  // Create an album object with the number of tracks specified
  const album4 = make_album('Artist4', 'Album Title 4', 12);
  
  // Print each album object
  console.log(album1);
  console.log(album2);
  console.log(album3);
  console.log(album4);
  