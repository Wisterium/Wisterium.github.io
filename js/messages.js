    const messages = [
        "The moonlight is a messenger of love...",
        "We could do so much better than this... Mausoleum faces and momentary bliss..",
        "I've liked you for a thousand years, a thousand years..",
        "Out of body from morning to night, dance floor packed and I'm feeling alright..",
        "Road work ahead?? Yeah I sure hope it does????",
        "it's me crewmate.. i am the good guy on the spaceship..",
        "dude....leave some for the rest of us...",
        "It's a Casio on a plastic beach..."
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    document.getElementById("randomMessage").innerHTML = randomMessage;
