let shirley = {
  lastName: "Camavilca",
  direction: {
    provincia: "LIMA",
    departamneto: "LIMA",
    calle: "Av. Tortugas 123",
  },
};

let Victoria = {
  lastName: "Torres",
  direction: shirley.direction,
};

console.log("Data de shirley: ", shirley);
console.log("Data de Victoria: ", Victoria);

Victoria.direction = {
  provincia: "AREQUIPA",
  departamneto: "AREQUIPA",
  calle: "Av. Dolores 1223",
};

console.log("Data de Victoria 2: ", Victoria);

Victoria.direction = null;

console.log("Data de Victoria 3: ", Victoria);


