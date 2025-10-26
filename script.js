const characters = [
  {
    name: 'Lyra Thorn',
    role: 'Sky-Chart Apprentice',
    tagline: 'Curious 13-year-old who hears the music of the airstreams.',
    traits: ['Empathic', 'Spirited', 'Reluctant hero'],
    motivation:
      'Prove that her synesthetic connection to the wind is a gift, not a flaw.',
    arc: 'Learns to trust her intuition and lead with compassion.'
  },
  {
    name: 'Finn Calder',
    role: 'Tinker-Glider Pilot',
    tagline: 'Resourceful 14-year-old mechanic with improvised gadgets.',
    traits: ['Inventive', 'Loyal', 'Impulsive'],
    motivation: 'Protect his best friend Lyra and earn a pilot badge.',
    arc: 'Discovers patience and strategic thinking are as heroic as bravery.'
  },
  {
    name: 'Professor Zephra Gale',
    role: 'Keeper of Starfall',
    tagline: 'Eccentric astronomer guiding the archipelago’s sky lanterns.',
    traits: ['Wise', 'Playful', 'Mysterious'],
    motivation: 'Stabilize the fractured constellations before they drift apart.',
    arc: 'Opens up to teamwork instead of solitary guardianship.'
  },
  {
    name: 'Captain Maelis Vorn',
    role: 'Antagonist · Cloud Corsair',
    tagline: 'Charismatic pirate who wants to harness starfall energy.',
    traits: ['Charismatic', 'Ambitious', 'Cunning'],
    motivation: 'Revive her grounded fleet by siphoning power from the comet.',
    arc: 'Confronts the cost of conquest and chooses restoration over domination.'
  }
];

const acts = [
  {
    label: 'Act I · Spark',
    beats: [
      'Introduce Aeralis during the annual Starfall drift.',
      'Lyra and Finn miss the ceremonial cue, endangering their apprenticeship.',
      'Mysterious energy pulse from the comet fractures the floating islands.'
    ],
    pivot: 'They must guide the comet shard through perilous skies before dawn.'
  },
  {
    label: 'Act II · Crosswinds',
    beats: [
      'Training montage aboard the retrofitted glider Aurora.',
      'Sky corsairs launch ambushes, testing trust between Lyra and Finn.',
      'Zephra reveals the shard needs harmony between melody and machinery.'
    ],
    pivot: 'Maelis captures Zephra, forcing the kids to mount a daring rescue.'
  },
  {
    label: 'Act III · Constellation',
    beats: [
      'Rescue unfolds within a gravity-inverted storm tower.',
      'Lyra orchestrates the Aeralis chorus, Finn stabilizes the flux engine.',
      'Maelis turns ally, channeling her fleet to shield the final alignment.'
    ],
    pivot: 'Comet shard completes its circuit, healing the archipelago.'
  }
];

const scenes = [
  {
    number: 1,
    title: 'Aerial Dawn Over Aeralis',
    duration: '00:45',
    location: 'Floating village of Windwhisper',
    summary:
      'The camera glides over pastel clouds as lantern kites drift upward. Lyra hums to the wind, syncing lanterns with a constellation map.',
    animationPrompt:
      'Wide establishing shot of floating island village at sunrise, painterly clouds, lanterns trailing light ribbons, gentle camera drift.',
    dialogue: [
      { speaker: 'Lyra', line: 'Steady, little lanterns. Find the rhythm in the breeze.' },
      { speaker: 'Finn', line: 'You hum, I haul. Deal? Those ropes weigh more than your melodies.' }
    ]
  },
  {
    number: 2,
    title: 'Ceremony Slip-Up',
    duration: '00:45',
    location: 'Sky-Chart Observatory',
    summary:
      'During the Starfall ceremony, Lyra’s melody misaligns with the official chart, causing the lanterns to wobble and earning stern looks from the elders.',
    animationPrompt:
      'Interior observatory with domed glass ceiling, spectral charts holographically projected, lanterns vibrating erratically.',
    dialogue: [
      { speaker: 'Elder Miren', line: 'Precision over intuition, apprentice Thorn.' },
      { speaker: 'Finn', line: 'We can recalibrate! Just give us one more beat.' }
    ]
  },
  {
    number: 3,
    title: 'Comet Ripple',
    duration: '00:45',
    location: 'Open sky above the archipelago',
    summary:
      'A comet fragment streaks overhead, sending a luminous shockwave that fractures the sky bridges linking the islands.',
    animationPrompt:
      'High-energy ripple tearing translucent sky-bridges, debris floating in weightless arcs, comet trail shimmering teal.',
    dialogue: [
      { speaker: 'Zephra', line: 'Starfall is ahead of schedule. The constellations are shifting!' },
      { speaker: 'Lyra', line: 'I can hear the melody splintering.' }
    ]
  },
  {
    number: 4,
    title: 'Call to Action',
    duration: '00:45',
    location: 'Zephra’s observatory workshop',
    summary:
      'Zephra reveals a comet shard needs escort to the Celestial Beacon before dawn or the islands will drift apart.',
    animationPrompt:
      'Cluttered workshop with celestial maps, glowing shard levitating above mechanical cradle, warm candlelight contrasting with cool shard glow.',
    dialogue: [
      { speaker: 'Zephra', line: 'Only those who can hear the windsong can guide the shard.' },
      { speaker: 'Lyra', line: 'We won’t miss the beat this time.' }
    ]
  },
  {
    number: 5,
    title: 'Aurora Refitted',
    duration: '00:40',
    location: 'Hangar bay',
    summary:
      'Finn frantically modifies their glider, Aurora, with resonance amplifiers while Lyra programs harmonic flight paths.',
    animationPrompt:
      'Montage of tinkering: sparks flying, blueprints overlaying screen, glowing runes etched into wing membranes.',
    dialogue: [
      { speaker: 'Finn', line: 'If we overload the glider, Aurora becomes a falling anvil.' },
      { speaker: 'Lyra', line: 'Then we’ll keep the tempo light.' }
    ]
  },
  {
    number: 6,
    title: 'Corsair Shadow',
    duration: '00:40',
    location: 'Sky lane outskirts',
    summary:
      'Captain Maelis watches from her stealth cruiser, plotting to intercept the shard for her grounded fleet.',
    animationPrompt:
      'Silhouetted pirate airship emerging from storm cloud, amber interior glow, Captain Maelis gripping holo-chart.',
    dialogue: [
      { speaker: 'Maelis', line: 'That shard will power a thousand sails. Prep the grapplers.' },
      { speaker: 'Quartermaster', line: 'Orders locked, captain.' }
    ]
  },
  {
    number: 7,
    title: 'Leap of Faith',
    duration: '00:45',
    location: 'Cliff edge launch platform',
    summary:
      'With dawn approaching, Lyra and Finn launch Aurora into turbulent crosswinds, trusting Lyra’s melody to guide them.',
    animationPrompt:
      'Dynamic launch shot, camera following glider diving off cliff, wind streaks accentuating speed, lens flare from rising sun.',
    dialogue: [
      { speaker: 'Finn', line: 'Hold tight! Turbulence at two o’clock.' },
      { speaker: 'Lyra', line: 'Sing with me, Aurora. We’ll find the current.' }
    ]
  },
  {
    number: 8,
    title: 'Cloud Maze Training',
    duration: '00:45',
    location: 'Echo Nimbus',
    summary:
      'Zephra guides them through frequency drills inside a resonant cloud maze, harmonizing music and mechanics.',
    animationPrompt:
      'Inside ethereal cloud tunnel with shifting neon frequencies, trails of color following the glider’s path.',
    dialogue: [
      { speaker: 'Zephra', line: 'Match the note, not the map. The wind remembers the melody.' },
      { speaker: 'Finn', line: 'I prefer bolts to ballads, but I’m trying!' }
    ]
  },
  {
    number: 9,
    title: 'Corsair Ambush',
    duration: '00:45',
    location: 'Storm-reef corridor',
    summary:
      'Maelis’s crew attacks with grappling wings. Finn improvises a countermeasure using Aurora’s resonance coils.',
    animationPrompt:
      'High-energy chase with pirate skiffs latching cables, electric arcs snapping, rain streaking diagonally.',
    dialogue: [
      { speaker: 'Maelis', line: 'Bring me that crystal, or bring me silence!' },
      { speaker: 'Finn', line: 'Reversing the frequency! Hope you like jazz, pirates.' }
    ]
  },
  {
    number: 10,
    title: 'Quiet in the Eye',
    duration: '00:40',
    location: 'Calm pocket within the storm',
    summary:
      'The trio catches their breath. Lyra doubts her ability, but Finn reassures her while Zephra listens to the shard’s hum.',
    animationPrompt:
      'Soft lighting, droplets suspended mid-air, close-up on shard pulsing in sync with Lyra’s heartbeat audio visualization.',
    dialogue: [
      { speaker: 'Lyra', line: 'What if the shard wants someone stronger?' },
      { speaker: 'Finn', line: 'It chose the girl who hears the sky. That’s you.' }
    ]
  },
  {
    number: 11,
    title: 'Revealing the Rift',
    duration: '00:45',
    location: 'Gravity-well canyon',
    summary:
      'Zephra demonstrates how the comet tear will swallow Windwhisper unless they realign the Beacon.',
    animationPrompt:
      'Holographic projection of islands spiraling apart, canyon walls warping, contrasting cold blues and hot oranges.',
    dialogue: [
      { speaker: 'Zephra', line: 'We have until the last star fades. After that, the islands scatter.' },
      { speaker: 'Lyra', line: 'Then we’ll finish before the chorus ends.' }
    ]
  },
  {
    number: 12,
    title: 'Stormheart Tower',
    duration: '00:45',
    location: 'Maelis’s storm fortress',
    summary:
      'The heroes infiltrate Maelis’s inverted gravity tower to rescue captured sky singers who can amplify Lyra’s melody.',
    animationPrompt:
      'Vertical chase inside rotating tower, gravity flipping, platforms spinning with violet lightning highlights.',
    dialogue: [
      { speaker: 'Finn', line: 'Upside-down bad guys? Really wishing for boots with magnets.' },
      { speaker: 'Lyra', line: 'Follow the beat. The tower turns with the tempo.' }
    ]
  },
  {
    number: 13,
    title: 'Maelis’s Gambit',
    duration: '00:45',
    location: 'Stormheart bridge',
    summary:
      'Maelis confronts Lyra, revealing her plan to power her fleet and promising safety in exchange for the shard.',
    animationPrompt:
      'Face-off on ship bridge, wind whipping coats, dramatic backlight from lightning, close-ups with intense eyes.',
    dialogue: [
      { speaker: 'Maelis', line: 'With this shard, no child will fear falling again.' },
      { speaker: 'Lyra', line: 'Not if the sky tears apart first.' }
    ]
  },
  {
    number: 14,
    title: 'Resonant Escape',
    duration: '00:40',
    location: 'Exiting Stormheart',
    summary:
      'Finn triggers a pulse that disorients the corsairs while Zephra releases the singers. They escape on Aurora.',
    animationPrompt:
      'Explosive wave of color ejecting through fortress corridors, characters leaping into glider mid-air.',
    dialogue: [
      { speaker: 'Finn', line: 'Rescue plan: cause a giant feedback solo.' },
      { speaker: 'Zephra', line: 'Exquisite improvisation, Mr. Calder.' }
    ]
  },
  {
    number: 15,
    title: 'Beacon Reveal',
    duration: '00:45',
    location: 'Celestial Beacon platform',
    summary:
      'They arrive at the Beacon, an ancient device requiring song and engineering to align. The shard spins above them.',
    animationPrompt:
      'Grand platform floating in aurora borealis, mechanical arms orbiting, glyphs illuminating with each note.',
    dialogue: [
      { speaker: 'Lyra', line: 'The Beacon sings back—it’s like hearing the whole sky.' },
      { speaker: 'Finn', line: 'And it wants us on tempo. Let’s tighten the sequence.' }
    ]
  },
  {
    number: 16,
    title: 'Discord Strike',
    duration: '00:45',
    location: 'Beacon perimeter',
    summary:
      'Maelis attacks once more, disrupting the beacon, but hesitates when she sees the islands fracturing below.',
    animationPrompt:
      'Aerial duel with flame-tinged contrails, shards of light falling, camera cutting between Maelis’s conflicted expression and cracking islands.',
    dialogue: [
      { speaker: 'Maelis', line: 'I cannot let my fleet wither in shadow!' },
      { speaker: 'Zephra', line: 'Then help us light the sky for everyone.' }
    ]
  },
  {
    number: 17,
    title: 'Alliance of Currents',
    duration: '00:45',
    location: 'Beacon core',
    summary:
      'Lyra convinces Maelis to combine melodies. Together they channel the shard’s energy, stabilizing the beacon.',
    animationPrompt:
      'Circular platform with characters standing at cardinal points, streams of light weaving together, crescendo of colors.',
    dialogue: [
      { speaker: 'Lyra', line: 'Sing with us. Let the sky hear your promise.' },
      { speaker: 'Maelis', line: 'For my crew—and for yours.' }
    ]
  },
  {
    number: 18,
    title: 'Harmonic Surge',
    duration: '00:40',
    location: 'Aerial panorama',
    summary:
      'The beacon pulses a harmonic wave, resealing the skies. Islands reconnect with shimmering bridges.',
    animationPrompt:
      'Massive shockwave of light spreading across sky, islands re-threading with luminous bridges, cheering citizens.',
    dialogue: [
      { speaker: 'Finn', line: 'Look! Windwhisper is tethered again!' },
      { speaker: 'Zephra', line: 'Harmony restored...for now.' }
    ]
  },
  {
    number: 19,
    title: 'Farewell to Starfall',
    duration: '00:45',
    location: 'Windwhisper plaza',
    summary:
      'Celebration erupts. Lyra performs a solo, honoring the sky singers, while Finn receives a pilot emblem.',
    animationPrompt:
      'Festival with lanterns, confetti made of light petals, villagers dancing in slow circular pans.',
    dialogue: [
      { speaker: 'Lyra', line: 'For every voice that kept the sky together.' },
      { speaker: 'Finn', line: 'Pilot emblem? Guess the sky thinks I’m ready.' }
    ]
  },
  {
    number: 20,
    title: 'New Horizons',
    duration: '00:40',
    location: 'Cliff overlooking the archipelago',
    summary:
      'Maelis offers alliance patrols, and the trio gaze at a newly formed constellation in the sky shaped like intertwined wings.',
    animationPrompt:
      'Final wide shot with three characters silhouetted, new constellation forming, gentle camera pullback.',
    dialogue: [
      { speaker: 'Maelis', line: 'The sky owes you, and so do I.' },
      { speaker: 'Lyra', line: 'Then let’s keep listening.' }
    ]
  }
];

const characterGrid = document.querySelector('.character-grid');
const actsContainer = document.querySelector('.acts');
const sceneGrid = document.querySelector('.scene-grid');

const makeElement = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

characters.forEach((character) => {
  const card = makeElement('article', 'character-card');

  const header = makeElement('h3');
  header.innerHTML = `${character.name} <small>${character.role}</small>`;

  const tagline = makeElement('p', 'tagline-lite', character.tagline);

  const traitList = makeElement('div', 'traits');
  character.traits.forEach((trait) => {
    traitList.appendChild(makeElement('span', 'trait', trait));
  });

  const motivation = makeElement(
    'p',
    'motivation',
    `Motivation: ${character.motivation}`
  );

  const arc = makeElement('p', 'arc', `Arc: ${character.arc}`);

  card.append(header, tagline, traitList, motivation, arc);
  characterGrid.appendChild(card);
});

acts.forEach((act) => {
  const card = makeElement('article', 'act-card');
  card.setAttribute('data-act', act.label);

  const beatList = makeElement('ul');
  act.beats.forEach((beat) => {
    const li = document.createElement('li');
    li.textContent = beat;
    beatList.appendChild(li);
  });

  const pivot = makeElement('p', 'pivot', `Turning Point: ${act.pivot}`);

  card.append(beatList, pivot);
  actsContainer.appendChild(card);
});

scenes.forEach((scene) => {
  const card = makeElement('article', 'scene-card');

  const header = makeElement('div', 'scene-header');
  const title = makeElement('h3', null, `${scene.number}. ${scene.title}`);
  const meta = makeElement('div', 'scene-meta');
  meta.innerHTML = `<span>${scene.duration}</span><span>${scene.location}</span>`;
  header.append(title, meta);

  const body = makeElement('div', 'scene-body');
  body.appendChild(makeElement('p', 'summary', scene.summary));

  const prompt = makeElement(
    'div',
    'animation-prompt',
    `Animation Prompt: ${scene.animationPrompt}`
  );

  const dialogueBlock = makeElement('div', 'dialogue');
  scene.dialogue.forEach((line) => {
    const lineEl = makeElement('div', 'dialogue-line');
    lineEl.innerHTML = `<span>${line.speaker}:</span>${line.line}`;
    dialogueBlock.appendChild(lineEl);
  });

  body.append(prompt, dialogueBlock);
  card.append(header, body);
  sceneGrid.appendChild(card);
});

