# Dots and Boxes

A browser game of Dots and Boxes ("Puntos y cajas"). The UI supports Spanish, English, and Simplified Chinese. Choose a language from the selector; the choice is saved in the browser.

- **Against the computer**, easy or hard.
- **Two players on the same device.**
- **Online with a friend.** One player creates a game and shares the link (or a 5-character code); the other opens it. Connections are peer-to-peer over WebRTC using [PeerJS](https://peerjs.com) and its free public matchmaking server, so there is no backend to run. The host plays blue and moves first.

It is one static page with no build step. `peerjs.min.js` (v1.5.4, MIT, see `peerjs.LICENSE`) is vendored next to `index.html`.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Served by GitHub Pages from the `main` branch root.

## Notes

- Online play needs both players to be able to open a direct WebRTC connection. Very restrictive networks (some school or office networks) may block it.
- Nothing is stored on a server; a game ends if either player closes the page.
