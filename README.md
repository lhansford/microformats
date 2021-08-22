# Microformats

Helper objects to more easily add [microformats2](http://microformats.org/wiki/microformats2) markup
to your applications.

## Installation

```sh
npm install microformats
```

## Usage

`microformats` works best in an IDE like Visual Studio Code or with Typescript so you can benefit from
autocompletion and inline documentation.

```js
import { CARD, ENTRY } from 'microformats';

console.log(CARD.root);
// 'h-card'

console.log(ENTRY.name);
// 'p-name'
```

## Example

Adding microformats2 properties to your markup in a more legible way:

```jsx
<article className={`article pink-background ${ENTRY.root}`}>
  <h1 className={ENTRY.name}>Some title</h1>
  <div className={ENTRY.content}>Lorem ipsum...</div>
</article>
```

## Contributing

This project currently contains a small subset of the properties available in microformats2. If
you want to request or add any more properties please [create an issue](https://github.com/lhansford/microformats/issues).
