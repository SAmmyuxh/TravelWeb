import Package from '../Models/Package.js';

export const getTopSellingPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tour packages' });
  }
};
