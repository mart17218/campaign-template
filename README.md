# campaign-template

> 專區生產器

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Components
#### banner
###### Props:
- options
  - Type: Object
  - Default: { align: `cover` }
  - Value: 
    { align: `cover` or `contain` }
- image-url
  - Type: String
  - Default: `''`
  - Value:
    image source with absolute path
###### Example:
```
<banner
  :options="{ align: 'contain' }"
  :image-url="`https://...`"
/>
```

#### description
###### Props:
- options
  - Type: Object
  - Default: { align: `center` }
  - Value: 
    { align: `left`, `right`, or `center` }
- text
  - Type: String
  - Default: `''`
  - Value:
    display text
- image-url (optional)
  - Type: String
  - Default: `''`
  - Value:
    image source with absolute path
###### Example:
```
<description
  :options="{ align: 'left' }"
  :text="`vacation homes, car rentals and tours recommendation`"
  :image-url="`https://...`"
/>
```
#### tour list
###### Props:
- data-list
  - Type: Array (of object)
  - Default: `undefined`
  - Value:
    [{ imageUrl, title, price, place }]
###### Example:
```
<tour-list
  :data-list="[{ imageUrl: 'https://...', title: 'Main Peak of Mountain Jade', price: 1200, place: 'Nantou, Taiwan' }]"
/>
```

#### article list
###### Props:
- data-list
  - Type: Array (of object)
  - Default: `undefined`
  - Value:
    [{ imageUrl, title, date, description }]
###### Example:
```
<article-list
  :data-list="[{ imageUrl: 'https://...', title: 'Climbing season is coming', date: '2021-01-01', description: 'Plan your mountaineering trip right now !' }]"
/>
```
