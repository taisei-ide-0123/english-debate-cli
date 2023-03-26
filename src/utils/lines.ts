const makeDottedLine = () => {
  let dottedLine = "\n";
  for (let i = 0; i < 100; i++) {
    dottedLine += "-";
  }
  dottedLine += "\n";
  console.log(dottedLine);
};

const getDottedLine = () => {
  let dottedLine = "\n";
  for (let i = 0; i < 100; i++) {
    dottedLine += "-";
  }
  dottedLine += "\n";
  return dottedLine;
};

export { makeDottedLine, getDottedLine };
