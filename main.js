//*******************
//
//
// WARNING!
//
//
// MAKE SURE TO NAME THE LEVELS "top1", "top2", "top3" AND SO ON!!
//
//
//*******************









// please change these premade levels
const json = `
{
    "levels": { 
    },
    "settings": {
        "discordlink": "https://discord.gg/BChVA6Gmft",
        "submits": {
            "record": "https://forms.gle/YJ7xjvwXhf87n39P9",
            "level": "https://forms.gle/YJ7xjvwXhf87n39P9"
        }
    }
}
`;

let maxXScroll = 0;
let maxYScroll = 500; // increment this if you wanna scroll more on the website
const jsonData = JSON.parse(json);
const levels = jsonData.levels;
const levelsContainer = document.getElementById("levels-container");
const levelselector = document.getElementById("level-selector");

function recordForm() {
    window.location.href = jsonData.settings.submits.record;
}

function levelForm() {
    window.location.href = jsonData.settings.submits.level;
}

function openDiscord() {
    window.location.href = jsonData.settings.discordlink;
}

Object.entries(levels).forEach(([level, details]) => {
    // level details
    const levelNumber = level.match(/\d+/)[0];
    
    const levelDiv = document.createElement('div');
    levelDiv.classList.add('level');
    levelDiv.id = level;
    levelDiv.style.display = 'none';
    levelDiv.style.marginLeft = '20px';
    levelDiv.classList.add("level");
    
    const levelH2 = document.createElement('h2');
    levelH2.textContent = `#${levelNumber}`;
    levelDiv.appendChild(levelH2);
    
    const nameH3 = document.createElement('h3');
    nameH3.textContent = `${details.name}`;
    levelDiv.appendChild(nameH3)
    
    const creatorsText = details.creators.length === 1 ? 'Creator' : 'Creators';
    const creatorsP = document.createElement('p');
    creatorsP.textContent = `${creatorsText}: ${details.creators.join(', ')}`;
    levelDiv.appendChild(creatorsP);
    
    const verificatorP = document.createElement('p');
    verificatorP.textContent = `Verificator: ${details.verificator}`;
    levelDiv.appendChild(verificatorP);
    
    const idP = document.createElement('p');
    idP.textContent = `ID: ${details.id}`;
    levelDiv.appendChild(idP);
    
    const minrecordP = document.createElement('p');
    minrecordP.textContent = `${details.minrecord} or more to qualify`;
    levelDiv.appendChild(minrecordP);
    
    const qualifiersH2 = document.createElement('h2');
    qualifiersH2.textContent = `Qualifiers`;
    levelDiv.appendChild(qualifiersH2);
    
    Object.entries(details.qualifiers).forEach(([qualifier, record]) => {
        const userP = document.createElement('p');
        userP.textContent = `${qualifier}: ${record}`;
        levelDiv.appendChild(userP);
    });
    
    const veriflinkIframe = document.createElement('iframe');
    veriflinkIframe.src = details.veriflink;
    veriflinkIframe.name = "Youtube video player"
    veriflinkIframe.width = "560";
    veriflinkIframe.height = "315";
    veriflinkIframe.frameBorder = "0";
    veriflinkIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    veriflinkIframe.allowFullscreen = true;
    levelDiv.appendChild(veriflinkIframe);
    
    levelsContainer.appendChild(levelDiv);
    
    const levelnumber = level.match(/\d+/)[0];
    const levelbutton = document.createElement('a');
    
    levelbutton.href = "#";
    levelbutton.textContent = `#${levelNumber} - ${details.name}`;
    
    levelselector.appendChild(levelbutton);
    
    levelbutton.addEventListener('click', () => {
        
        document.querySelectorAll('.level').forEach(div => {
            div.style.display = 'none';
        });
        document.getElementById(level).style.display = 'grid';
        
        document.querySelectorAll("#level-selector a").forEach(link => {
            link.classList.remove("highlighted");
            link.style.color = 'black'
        });
        
        levelbutton.classList.add("highlighted");
        levelbutton.style.color = 'white';
    });
});

const settings = jsonData.settings;
const topbar = document.getElementById('topbar');
topbar.style.width = window.screen.width

const submit = document.createElement('a');
submit.textContent = "Submit Menu"
topbar.appendChild(submit);

const selection = document.getElementById("selection");
let viewselection = false;

if (viewselection) {
    selection.style.display = 'block';
} else {
    selection.style.display = 'none';
}

submit.addEventListener('click', () => {
    viewselection = !viewselection;
    
    if (viewselection) {
        selection.style.display = 'block';
    } else {
        selection.style.display = 'none';
    }
});

document.addEventListener('scroll', function() {
    if (window.scrollY > maxYScroll) {
        window.scrollTo(0, maxYScroll);
    } else if (window.scrollX > maxXScroll) {
        window.scrollTo(maxXScroll, window.scrollY)
    }
});
