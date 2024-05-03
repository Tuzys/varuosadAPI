import express from "express";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import csv from "csv-parser";

let parts = [];

const renderParts = () => {
  fs.createReadStream("data/LE.csv")
    .pipe(csv())
    .on("data", (data) => {
      parts.push(data);
    });
};



export const getParts = async (req, res) => {
  await renderParts();
  res.send(parts);
};

export const getPart = (req, res) => {
  const { Id } = req.params;

  const foundPart = parts.find(part => part.Id === Id);

  res.send(foundPart);
};