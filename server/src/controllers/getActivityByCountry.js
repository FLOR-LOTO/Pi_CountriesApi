const { Activity, Country } = require('../db');

async function getActivitiesByCountry(req, res) {
  const { id } = req.params;

  try {
    const country = await Country.findByPk(id, {
      include: Activity, // Incluye las actividades relacionadas con el país
    });

    if (!country) {
      return res.status(404).json({ message: 'País no encontrado' });
    }

    const activities = country.Activities || [];
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener actividades' });
  }
}

module.exports = getActivitiesByCountry;