import { v4 as uuidv4 } from 'uuid';

export class Rating {
    constructor(number, description) {
        this.number = number;
        this.description = description;
    }
}

export class Compatibilities {
    constructor(macos, ios, windows, android) {
        this.macos = macos;
        this.ios = ios;
        this.windows = windows;
        this.android = android;
    }
}

export class Advantage {
    constructor(description) {
        this.id = uuidv4();
        this.description = description;
    }
}

export class Antivirus {
    constructor(
        title,
        imageURL,
        logoURL,
        advantages,
        ratingNum,
        ratingDesc,
        reviews,
        isMacosCompatible,
        isIosCompatible,
        isWindowsCompatible,
        isAndroidCompatible
    ) {
        this.id = uuidv4();
        this.title = title;
        this.imageURL = imageURL;
        this.logoURL = logoURL;
        this.advantages = advantages;
        this.rating = new Rating(ratingNum, ratingDesc);
        this.reviews = reviews;
        this.compatibilities = new Compatibilities(
            isMacosCompatible,
            isIosCompatible,
            isWindowsCompatible,
            isAndroidCompatible
        );
    }
}
