# Geon Template
A barebones template app for creating a new project using the [Geon Engine](https://github.com/josfeenstra/geon-engine).

## Install 
```
git clone https://github.com/josfeenstra/geon-engine
git clone https://github.com/josfeenstra/geon-template
cd geon_engine
npm install
cd ..
cd geon-template
npm install
```
The geon-engine can be compiled to `js` using the regular `tsc --build` command. 
However, this makes it hard to make changes on the fly. This is why this uncommon way of using direct `ts` dependencies is used. This essentially makes the engine a [header-only](https://en.wikipedia.org/wiki/Header-only) library.

## Run 

Make sure you are in the `geon-template` root. Then run
```
npm run watch
```
Host `/public` using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for example. 
