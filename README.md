# Kooky.js

A lightweight cookie editor in a bookmarklet. Lets you view, edit, remove and add new cookies for any domain. It uses no libraries besides the [VanillaJS Framework](http://vanilla-js.com/) and contains everything it needs (markup, style and behavior) in a single file.

## Install

Create a new bookmark, write 'javascript:' in the URL, then copy and paste the source of `kooky-min.js` after that.

## Usage

Simply edit the key-value pairs and press `Enter` (or remove focus) to save the change. To remove a cookie, leave its value empty. To add a new one, write the key-value pair you'd like to input in the last row and press `Enter`.

## Disclaimer and known bugs

The script at this stage of development is bare-bone and doesn't do much parsing nor validating. The element which it creates is separated from the container website's DOM as strictly as possible, seeking a uniform user experience, but
the UI could be broken if some of the container website's CSS heavily targets Kooky's elements. There could also be some combinations of browser events resulting in non-uniform application of changes, so you're warned.