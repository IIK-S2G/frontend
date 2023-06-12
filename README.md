New frontend for S2G

Structure
```
.
└── S2Gfrontend/
    ├── README.md - This file
    ├── design/
    │       └── visual sketches for the UI
    ├── documentation/
    │       └── todo docs for all of the frontend, deploying etc
    └── frontend/
            ├── .next/
            │     └── Next config files
            │
            ├── node_modules/
            │     └── Node and dependency files
            │
            ├── .public/
            │     └── Public files
            │
            ├── src/
            │     │──── app/
            │     │      │──── challenges/
            │     │      │       │──── text/
            │     │      │       │      │──── en.json
            │     │      │       │      └──── no.json
            │     │      │       └──── page.tsx
            │     │      │
            │     │      │──── login/..
            │     │      │
            │     │      │──── register/..
            │     │      │
            │     │      │──── reset_password/..
            │     │      │
            │     │      │──── resources/..
            │     │      │
            │     │      │──── scoreboard/..
            │     │      │
            │     │      │──── favicon.ico
            │     │      │──── layout.tsx
            │     │      │──── 403.js
            │     │      │──── page.tsx
            │     │      └──── globals.css
            │     │
            │     │──── styles
            │     │      └──── themes.tsx
            │     │
            │     │──── components
            │     │      └──── Line.tsx
            │     │
            │     └──── components/
            │     │      │──── Navbar.tsx
            │     │      │──── RightNav.tsx
            │     │      └──── LeftNav.tsx
            │     │
            │     └──── redux
            │            │──── reducers/
            │            │       │──── langSlice.tsx
            │            │       └──── themeSlice.tsx
            │            │
            │            │──── store.jsx
            │            └──── reducers
            │
            └── other config files
```