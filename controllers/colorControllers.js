const colorsData = require("../api_data/colors");
let colorsDataApi = [...colorsData];

const getColors = (req, res) => {
  res.status(200).json({ success: true, data: colorsDataApi });
};

const addColor = (req, res) => {
  const { color, value } = req.body;
  if (colorsDataApi.find((item) => item.color === color)) {
    return res.status(401).json({ message: "Color already in data" });
  }
  colorsDataApi.push(req.body);
  return res.status(200).json({ success: true, dataAdded: req.body });
};

const updateColor = (req, res) => {
  const { color } = req.params;
  if (!colorsDataApi.find((item) => item.color === color)) {
    return res.status(401).json({ message: "Color not in data" });
  }
  colorsDataApi = colorsDataApi.map((item) => {
    if (item.color === color) {
      return { ...item, value: req.body.value };
    } else {
      return item;
    }
  });
  res.json({ success: true, dataUpdated: req.body });
};

const removeColor = (req, res) => {
  const { color } = req.params;
  if (!colorsDataApi.find((item) => item.color === color)) {
    return res.status(401).json({ message: "Color not in data" });
  }
  colorsDataApi = colorsDataApi.filter((item) => {
    return item.color !== color;
  });
  res.json({ success: true, colorDeleted: color });
};

module.exports = { getColors, addColor, updateColor, removeColor };
