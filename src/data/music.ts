export interface Track {
  title: string
  artist: string
  cover: string
}

/**
 * Recommendations from Ishan's public Spotify playlist. Cover art is served
 * from Spotify's CDN (the licensed display path via its oEmbed thumbnails),
 * referenced directly rather than re-hosted. To refresh, re-run the fetch.
 */
export const music = {
  caption: 'I can’t work without music, so neither should you.',
  tracks: [
  { title: "Addiction", artist: "Vlad Holiday", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ba1674c5eaf8ae01acff8c1b" },
  { title: "When You Were Made", artist: "The Growlers", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bb09cba8a0ce270c134a59e9" },
  { title: "Film Credits", artist: "Club Kuru", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d98181c5e038ae2b01ca646c" },
  { title: "Fake Plastic Trees", artist: "Radiohead", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029293c743fa542094336c5e12" },
  { title: "With a Woman", artist: "Tempesst", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0213c3174c62dea371a383bc5e" },
  { title: "Piledriver waltz", artist: "Alex Turner", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02672951d44a35cb08092f2c1f" },
  { title: "Sex, Drugs, Etc.", artist: "Beach Weather", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02511b07369101734098b14b0d" },
  { title: "Talking In My Sleep", artist: "The Slims", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e3184c3297becec22534c582" },
  { title: "Mushroom Cloud", artist: "Tempesst", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0213c3174c62dea371a383bc5e" },
  { title: "Sweet Dreams, TN", artist: "The Last Shadow Puppets", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0299845928b10d57ec9f95e953" },
  { title: "Must Be a Dream", artist: "Tempesst", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0213c3174c62dea371a383bc5e" },
  { title: "Tonight You Are Mine", artist: "The Technicolors", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025fd7c284c0b719ad07b8eac2" },
  { title: "So Damn Into You", artist: "Vlad Holiday", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02923ed5fa17fbd461dfd99b97" },
  { title: "Ode To The Mets", artist: "The Strokes", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e3f1ba3de4659708c25d0f39" },
  { title: "A Little Bit of Trouble", artist: "Tempesst", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cd0a74281641cddd228f3043" },
  { title: "Voices in My Head", artist: "Tempesst", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0213c3174c62dea371a383bc5e" },
  { title: "Better Than the Devil", artist: "Tempesst", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0213c3174c62dea371a383bc5e" },
  { title: "10 Lovers", artist: "The Black Keys", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021af8fb0d8859055d35d2290f" },
  { title: "Doomsday", artist: "Tempesst", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02cd0a74281641cddd228f3043" },
  { title: "God Knows I Needed a Muse", artist: "Tempesst", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e024468ccc0fcf941ea7059d320" },
  { title: "Crooks", artist: "The Slims", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c29713132b34a0597928bf81" },
  { title: "Sweetie Little Jean", artist: "Cage The Elephant", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cbc75fbb1252959c9765ff4f" },
  { title: "Neon Cowboy", artist: "The Slims", cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e024305bef0054fa06a772b9ce5" },
  { title: "Comatose", artist: "Low Hum", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02575c8b6a77df028e193b6c17" },
  { title: "Too Slow", artist: "Tempesst", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bf5ca0f633556cf2c66e5a25" },
  { title: "I Just Want You", artist: "The Helltones", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0239b26f89274d0b2265551199" },
  { title: "Night Ride", artist: "The Growlers", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bb09cba8a0ce270c134a59e9" },
  { title: "For Elise", artist: "Saint Motel", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0225dd1a3969c0912291b6fc7b" },
  { title: "Delirium (feat. Mark E. Smith)", artist: "Gorillaz, Mark E. Smith", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02eeb01b41f48210d032d1b6a4" },
  { title: "Wants and Needs", artist: "Noshows", cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025f2689391d01ebd3c97a1bcf" },
  ] as Track[],
}
