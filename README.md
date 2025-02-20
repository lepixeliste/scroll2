# scroll2

A lightweight smooth scroll module with TypeScript support

## Installation

```javascript
npm install @pixeliste/scroll2 --save
```

## How to use

Default use in your main.js

```typescript
import { scrollTo } from '@pixeliste/scroll2'
...
const el = document.getElementById('anchor-1')
scrollTo(el)
...
```

You can pass an optional object for default duration and easing function; offset can be computed to match a fixed header element height for instance

```javascript
...
const el = document.getElementById('anchor-2')
scrollTo(el, { easing: 'linear', duration: 600, offset: 32 })
...
```

## List of available easing functions

By default, the plugin use a ease-in-out cubic function but you can pass one of the following parameters:

- 'linear'
- 'easeInQuad'
- 'easeOutQuad'
- 'easeInOutQuad'
- 'easeInCubic'
- 'easeOutCubic'
- 'easeInOutCubic'
- 'easeInQuart'
- 'easeOutQuart'
- 'easeInOutQuart'
- 'easeInQuint'
- 'easeOutQuint'
- 'easeInOutQuint'

## License

[ISC](https://opensource.org/licenses/ISC)
