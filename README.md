# Monova React Native Assignment

A React Native app that replicates the UI concept from the reference video, consists of a fashion inventory with bottom tab navigation, saved collections, and animated interactions.

---

## How to run

You can try the app directly on **Expo Snack**:
[Open on Snack](https://snack.expo.dev/@jayanthsrinivasan/monova---jayanth_srinivasan) 

1. Open the Snack link.
2. Scan the QR code using the Expo Go app (iOS or Android), install it if you want to checkout the app on your own device.
3. Or else, use the integrated emulator for Android, iOS and Web.

---

## What I have replicated from the video

* **Bottom Tab Navigation** with custom icons (Home, Dummy, Bookmarks).
* **Bookmarks Screen** or the  displays:
  * Header text ("Saved", "Collections", "Outfits").
  * Custom pill filters (e.g; tags like Crop, Print, Work, etc.).
  * Custom cards rendered with images, titles, and details.
* **Fashion Inventory Grid/List** of items from a mock dataset, the mock dataset is defined in the data folder and files are named like this: 
  * "collections.ts" - for the "Collections" tab
  * "outfits.ts" - for the "Outfits" tab
  * "inventory.ts" - for the "Items" tab
  * "presets.ts" - a type or object array defined for the clothing categories 

---

## Component Structure & State Management

* **`Navigation.tsx`** – sets up bottom tab navigation using `@react-navigation/bottom-tabs`.
* **`HomeScreen.tsx`** – placeholder for home content.
* **`DummyScreen.tsx`** – dummy placeholder screen.
* **`SavedScreen.tsx`** – core screen which renders:
  * **Custom Pills Section**: Interactive filters for clothing types or categories like colors, type, mood and style
  * **Card List**: Renders items from `INVENTORY`, `OUTFITS` and `COLLECTIONS`.
* **`data/`** – Contains static arrays or array of objects (`INVENTORY`, `OUTFITS`, `COLLECTIONS`).
* **`types/`** – Defines TypeScript interfaces for types such as badge, collections, items and outfits.

**State Management**:
* Local component-level state (`useState`) for pill selection or filtering using the pills for each and every category.
* In the 'HomeScreen' page we have the cards which display a few items which we can bookmark, if bookmarked - the bookmarked items will be displayed below in a separate container of sorts. I did this to mimic an actual app where we bookmark certain items like adding items to a cart. If we need to pass the bookmarked data to another page we need to make use of state management libraries like Context API, Redux etc. But Redux is for apps or projects which are big in size or very much scalable.  
---

## Assumptions & Limitations

* All data (inventory, outfits, collections) is **mocked** or **stored** locally in `data/` files/folder.
* Images used in the app are from the internet. 

---

## Animations & Interactions Implemented

* **Bottom Tab Navigation** with smooth transitions.
* **Pressable Pills** for filtering (state toggling with visual feedback).
* **Touchable Cards** with opacity/scale effect on press.
* **FlatList Virtualization** for smooth scrolling on large data.
