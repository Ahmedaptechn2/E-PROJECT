# Offline Site Implementation Plan

## Information Gathered
- Site uses Firebase for cart and possibly other data
- Multiple pages: index.html, wwe/wwe.html, marvels/index.html, lego/lego.htm, HOT WHEELS/index.html
- Cart system needs to be localStorage-based
- All external dependencies need to be cached or removed if not essential

## Plan
- Remove Firebase scripts and initialization from all pages
- Replace Firebase cart with localStorage cart system
- Ensure all data is stored locally (cart, user preferences)
- Make site work completely offline
- Test offline functionality

## Dependent Files to be edited
- index.html: Remove Firebase, update cart to localStorage
- wwe/wwe.html: Remove Firebase, update cart to localStorage
- marvels/index.html: Remove Firebase, update cart to localStorage
- lego/lego.htm: Remove Firebase, update cart to localStorage
- HOT WHEELS/index.html: Remove Firebase, update cart to localStorage
- shared.js: Update cart functions to use localStorage
- common.js: Update any Firebase dependencies

## Followup steps
- Test site offline by disabling internet
- Verify cart persists across page reloads
- Ensure all features work without Firebase
- Add service worker for caching if needed

## Current Status
- [x] Create TODO.md
- [x] Remove external links from index.html
- [x] Remove external scripts from index.html
- [x] Remove external links from wwe/wwe.html
- [x] Remove external scripts from wwe/wwe.html
- [x] Remove external links from marvels/index.html
- [x] Remove external scripts from marvels/index.html
- [x] Remove external links from lego/lego.htm
- [x] Remove external scripts from lego/lego.htm
- [x] Remove external links from HOT WHEELS/index.html
- [x] Remove external scripts from HOT WHEELS/index.html
- [x] Cart system already uses localStorage (no Firebase)
- [x] Site is now completely offline-capable
- [x] Test offline functionality
