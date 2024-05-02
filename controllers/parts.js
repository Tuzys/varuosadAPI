import express from "express";
import { varuosadData } from "../data/data.js";
import { v4 as uuidv4 } from "uuid";

let parts = [...varuosadData];

export const createPart = (req, res) => {
  const part = req.body;

  parts.push({ ...part, Id: uuidv4() });

  res.send(`Part with the name ${part.Nimi} added to the database!`);
};

export const getParts = (req, res) => {
  res.send(parts);
};

export const getPart = (req, res) => {
  const { Id } = req.params;

  const foundPart = parts.find(part => part.Id === Id);

  res.send(foundPart);
};

export const deletePart = (req, res) => {
  const { Id } = req.params;

  parts = parts.filter(part => part.Id != Id);

  res.send(`Part with the Id ${Id} deleted from the database.`);
};

export const updatePart = (req, res) => {
  const { Id } = req.params;

  const { Nimi, l1, l2, l3, l4, l5, sus1, sus2, Tootja, hind } = req.body;

  const part = parts.find(part => part.Id === Id);

  if (Nimi) part.Nimi = Nimi;
  if (l1) part.l1 = l1;
  if (l2) part.l2 = l2;
  if (l3) part.l3 = l3;
  if (l4) part.l4 = l4;
  if (l5) part.l5 = l5;
  if (sus1) part.sus1 = sus1;
  if (sus2) part.sus2 = sus2;
  if (Tootja) part.Tootja = Tootja;
  if (hind) part.hind = hind;

  res.send(`Part with the Id ${Id} has been updated`);
};
