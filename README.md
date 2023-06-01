New frontend for S2G

Structure
```
.
└── S2Gfrontend/
    ├── README.md - This file
    ├── design/
    │   └── visual sketches for the UI
    ├── documentation/
    │   └── todo docs for all of the frontend, deploying etc
    └── frontend/
            ├── .next/
            │       └── Next config files
            ├── node_modules/
            │       └── Node and dependency files
            ├── .public/
            │       └── Public files
            ├── src/
            │     │────app/
            │     │      │────favicon.ico
            │     │      │────components
            │     │      │       │────Navbar.tsx
            │     │      │       │────RightNav.tsx
            │     │      │       └────LeftNav.tsx
            │     │      │────layout.tsx
            │     │      │────403.js
            │     │      │────page.tsx
            │     │      └────globals.css
            │     │────utils
            │     │      └────theme.jsx
            │     │────styles
            │     │────components
            │     │      └────Line.tsx
            │     └────redux
            │            │────store.jsx
            │            └────reducers
            └── other config files
```