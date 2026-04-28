const shows = [
    { 
        id: 'tos', 
        title: 'The Original Series', 
        year: '1966-1969', 
        seasons: 3,
        description: 'captian kirk fucking every allien he can find, scotty fixing something, and McCoy being racist to spock.',
        captain: 'James T. Kirk',
        characters: require('./characters/tos'),
        episodes: require('./episodes/tos')
    },
    { 
        id: 'tng', 
        title: 'The Next Generation', 
        year: '1987-1994', 
        seasons: 7,
        description: 'picard saying something poetic, riker doing the maneuver, and beverly fucking a candle ghost',
        captain: 'Jean-Luc Picard',
        characters: require('./characters/tng'),
        episodes: require('./episodes/tng')
    },
    { 
        id: 'ds9', 
        title: 'Deep Space Nine', 
        year: '1993-1999', 
        seasons: 7,
        description: 'sisko committing war crimes, obrien must suffer, and bashir having a bromance with garak',
        captain: 'Benjamin Sisko',
        characters: require('./characters/ds9'),
        episodes: require('./episodes/ds9')
    },
    { 
        id: 'voy', 
        title: 'Voyager', 
        year: '1995-2001', 
        seasons: 7,
        description: 'Janeway drinking her tenth cup of coffe today, Chakotay saying something spiritual, and kim being an ensing,',
        captain: 'Kathryn Janeway',
        characters: require('./characters/voy'),
        episodes: require('./episodes/voy')
    },
    { 
        id: 'ent', 
        title: 'Enterprise', 
        year: '2001-2005', 
        seasons: 4.,
        description: 'archer watching water polo, tpol complaining about humans, tucker being southern',
        captain: 'Jonathan Archer',
        characters: require('./characters/ent'),
        episodes: require('./episodes/ent')
    },
    { 
        id: 'dis', 
        title: 'Discovery', 
        year: '2017-2024', 
        seasons: 5,
        description: 'burnham being the same person every season, suru being the only good character.',
        captain: 'Michael Burnham',
        characters: require('./characters/dis'),
        episodes: require('./episodes/dis')
    },
    { 
        id: 'snw', 
        title: 'Strange New Worlds', 
        year: '2022-present', 
        seasons: 3,
        description: 'pike having the best hair in star trek, MBenga being second best dad, spock fucking chapel.',
        captain: 'Christopher Pike',
        characters: require('./characters/snw'),
        episodes: require('./episodes/snw')
    },
];

module.exports = shows