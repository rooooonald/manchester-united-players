# Manchester United Players

> Getting Manchester United's current first team players' information.

## Install

```
$ npm install manchester-united-players
```

## Usage

```js
const playerList = require("manchester-united-players");
```

### Getting all player information

```js
playerList.all();
// Output: [{"number": 2,"name": "Victor Lindelof", …} …]
```

### Getting all players' names

```js
playerList.allNames();
// Output: ['Victor Lindelof', 'Eric Bailly', 'Harry Maguire' …]
```

### Getting specific player's NAME

```js
playerList.name(8);
// Output: 'Bruno Fernandes'
```

### Getting specific player's DATE OF BIRTH

```js
playerList.dob(29);
// Output: '1997-11-26'
```

### Getting specific player's NUMBER

```js
playerList.dob(14);
// Output: '1997-11-26'
```

### Getting specific player's POSITION

```js
playerList.position(19);
// Output: 'Centre-back'
```

### Getting specific player's NATIONALITY

```js
playerList.nationality(2);
// Output: 'Sweden'
```

### Getting specific player's NUMBER

```js
playerList.nationality("masonmount");
// Output: 7

playerList.nationality("ALEJANDRo      GARnaCHo");
// Output: 49
```
