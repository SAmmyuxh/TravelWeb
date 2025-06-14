import Destination from '../Models/Destination.js';

export const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching destinations' });
  }
};
