"use strict";

const mufcPlayer = require("./data/players.json");

const findPlayerByNum = (playerNum) => {
  const selectedPlayer = mufcPlayer.find((player) => {
    return player.number === playerNum;
  });
  return selectedPlayer;
};

const findPlayerByName = (playerName) => {
  const selectedPlayer = mufcPlayer.find((player) => {
    return (
      player.name.toLowerCase().replace(/ /g, "") ===
      playerName.toLowerCase().replace(/ /g, "")
    );
  });
  return selectedPlayer;
};

const calculateAge = (dob) => {
  const dateOfBirth = new Date(dob);
  const ageInMilliseconds = Date.now() - dateOfBirth.getTime();

  var age_dateFormat = new Date(ageInMilliseconds);
  var year = age_dateFormat.getUTCFullYear();
  var age = Math.abs(year - 1970);

  return age;
};

exports.all = mufcPlayer;

exports.allNames = () => {
  const playerNames = mufcPlayer.map((player) => {
    return player.name;
  });

  return playerNames;
};

exports.name = (playerNum) => {
  const selectedPlayer = findPlayerByNum(playerNum);

  if (!selectedPlayer) {
    throw new Error(`Player No.${playerNum} does not exist.`);
  }

  return selectedPlayer.name;
};

exports.dob = (playerNum) => {
  const selectedPlayer = findPlayerByNum(playerNum);

  if (!selectedPlayer) {
    throw new Error(`Player No.${playerNum} does not exist.`);
  }

  return selectedPlayer.dob;
};

exports.position = (playerNum) => {
  const selectedPlayer = findPlayerByNum(playerNum);

  if (!selectedPlayer) {
    throw new Error(`Player No.${playerNum} does not exist.`);
  }

  return selectedPlayer.position;
};

exports.number = (playerName) => {
  const selectedPlayer = findPlayerByName(playerName);

  if (!selectedPlayer) {
    throw new Error(`${playerName} does not exist.`);
  }

  return selectedPlayer.number;
};

exports.nationality = (playerNum) => {
  const selectedPlayer = findPlayerByNum(playerNum);

  if (!selectedPlayer) {
    throw new Error(`Player No.${playerNum} does not exist.`);
  }

  return selectedPlayer.nationality;
};

exports.age = (playerNum) => {
  const selectedPlayer = findPlayerByNum(playerNum);

  if (!selectedPlayer) {
    throw new Error(`Player No.${playerNum} does not exist.`);
  }

  const playerAge = calculateAge(selectedPlayer.dob);

  return playerAge;
};
