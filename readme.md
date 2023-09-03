# Manchester United Players

> Manchester United's current first team players' information. _(Last Update: 3rd September 2023)_

## Install

```
$ npm install manchester-united-players
```

## Usage

```js
const mufcPlayer = require("manchester-united-players");
```

### Getting ALL players' information

```js
mufcPlayer.all();
// Output: [{"number": 2,"name": "Victor Lindelof", …} …]
```

### Getting ALL players' names

```js
mufcPlayer.allNames();
// Output: ['Victor Lindelof', 'Eric Bailly', 'Harry Maguire' …]
```

### Getting specific player's NAME

#### Params: Squad Number

```js
mufcPlayer.name(8);
// Output: 'Bruno Fernandes'
```

### Getting specific player's DATE OF BIRTH

#### Params: Squad Number

```js
mufcPlayers.dob(29);
// Output: '1997-11-26'
```

### Getting specific player's AGE

#### Params: Squad Number

```js
mufcPlayer.age(5);
// Output: '30'
```

### Getting specific player's POSITION

#### Params: Squad Number

```js
mufcPlayer.position(19);
// Output: 'Centre-back'
```

### Getting specific player's NATIONALITY

#### Params: Squad Number

```js
mufcPlayer.nationality(2);
// Output: 'Sweden'
```

### Getting specific player's NUMBER

#### Params: Player's Full Name

```js
mufcPlayer.number("masonmount");
// Output: 7

mufcPlayer.number("ALEJANDRo      GARnaCHo");
// Output: 49
```
