const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages
        this.militaryImages = militaryImages
    }

    getRandomCivil = () => this.civilImages[Math.floor(Math.random() * this.civilImages.length)]

    getRandomMilitary = () => this.militaryImages[Math.floor(Math.random() * this.militaryImages.length)]

    getAll = () => this.civilImages.concat(this.militaryImages)
}

class Painter {
    constructor() {
        this.createGallery()
    }

    createGallery = () => {
        this.section = document.createElement('section')
        document.body.appendChild(this.section)
    }

    createImageTag = (imageUrl) => `<picture><img src="${imageUrl}"/></picture>`

    paintSingleImage = (imageUrl) => this.section.innerHTML = this.createImageTag(imageUrl)

    paintMultipleImages = (arrayOfImages) => {
        arrayOfImages.forEach(image => {
            this.section.innerHTML += this.createImageTag(image)
        })
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();