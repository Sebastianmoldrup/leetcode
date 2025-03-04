// Guest: Name
// Host: Name, capacity, allergies
const attendees = {
  0: { name: "Johan", role: "guest" },
  1: { name: "Christine", role: "host", capacity: 5, allergies: ["nuts"] },
  2: { name: "Ola", role: "guest", allergies: ["pollen"] },
  3: { name: "Kari", role: "guest" },
  4: {
    name: "Anders",
    role: "host",
    capacity: 8,
    allergies: ["pollen", "gluten"],
  },
  5: { name: "Ingrid", role: "guest" },
  6: { name: "Eirik", role: "guest" },
  7: { name: "Marte", role: "guest", allergies: ["shellfish"] },
  8: { name: "Hans", role: "host", capacity: 4, allergies: ["shellfish"] },
  9: { name: "Sofie", role: "guest" },
  10: { name: "Magnus", role: "guest", allergies: ["dairy"] },
  11: { name: "Lena", role: "host", capacity: 6, allergies: ["dairy"] },
  12: { name: "Tor", role: "guest" },
  13: { name: "Silje", role: "guest" },
  14: { name: "Bjørn", role: "guest" },
  15: { name: "Mona", role: "guest" },
  16: { name: "Erik", role: "guest", allergies: ["peanuts"] },
  17: {
    name: "Hilde",
    role: "host",
    capacity: 7,
    allergies: ["soy", "peanuts"],
  },
  18: { name: "Trygve", role: "guest" },
  19: { name: "Anette", role: "guest" },
  20: { name: "Fredrik", role: "guest" },
  21: { name: "Marius", role: "host", capacity: 10, allergies: [] },
  22: { name: "Camilla", role: "guest" },
  23: { name: "Espen", role: "guest" },
  24: { name: "Julie", role: "guest" },
  25: { name: "Henrik", role: "host", capacity: 6, allergies: ["fish"] },
  26: { name: "Sander", role: "guest" },
  27: { name: "Vilde", role: "guest" },
  28: { name: "Emil", role: "guest" },
  29: { name: "Thea", role: "guest" },
  30: { name: "Kristian", role: "host", capacity: 9, allergies: [] },
  31: { name: "Nora", role: "guest" },
  32: { name: "Eline", role: "guest", allergies: ["gluten"] },
  33: { name: "Jonathan", role: "guest" },
  34: { name: "Tobias", role: "host", capacity: 7, allergies: ["eggs"] },
  35: { name: "Amalie", role: "guest" },
  36: { name: "Mathias", role: "guest" },
  37: { name: "Håkon", role: "guest" },
  38: { name: "Victoria", role: "guest" },
  39: { name: "Jakob", role: "host", capacity: 5, allergies: ["lactose"] },
  40: { name: "Rikke", role: "guest" },
  41: { name: "Oskar", role: "guest", allergies: ["nuts"] },
  42: { name: "Sara", role: "guest" },
  43: { name: "Alexander", role: "host", capacity: 8, allergies: [] },
  44: { name: "Cecilie", role: "guest" },
  45: { name: "Benjamin", role: "guest" },
  46: { name: "Mette", role: "guest" },
  47: { name: "Even", role: "guest" },
};

// Get names
// Object.values(attendees).forEach((attendee) => console.log(attendee.name));

// Find average head count per host
function getHeadCount(attendees) {
  const hosts = Object.values(attendees).filter(
    (attendee) => attendee.role === "host",
  ).length;
  const guests = Object.values(attendees).filter(
    (attendee) => attendee.role === "guest",
  ).length;
  console.log("hosts", hosts);
  console.log("guests", guests);

  const guestsPerGroup = Math.floor(guests / hosts);
  const remainderGuests = guests % hosts;
  console.log("remainder", guests, hosts, remainderGuests);

  return {
    guestsPerGroup: { guestsPerGroup },
    remainderGuests: { remainderGuests },
  };
}
console.log(getHeadCount(attendees));

// Assign guest with allergies first to avoid matching host allergies/ingriedients

// Fill headcount to average count then add 1 by 1 to each host
