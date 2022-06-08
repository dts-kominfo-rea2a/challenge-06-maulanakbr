// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (cbMain) => {
  fs.readFile(file1, "utf8", (err, input1) => {
    const load1 = JSON.parse(input1);
    const output1 = filterWord(load1.message);
  
    fs.readFile(file2, "utf8", (err, input2) => {
      const load2 = JSON.parse(input2);
      const output2 = filterWord(load2[0].message);

      fs.readFile(file3, "utf8", (err, input3) => {
        const load3 = JSON.parse(input3);
        const output3 = filterWord(load3[0].data.message);

        cbMain(err, [output1, output2, output3]);
      });
    });
  });
};

const filterWord = (finalWords) => {
  const finalOutput = finalWords.split(" ").reverse();
  return finalOutput[0];
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
