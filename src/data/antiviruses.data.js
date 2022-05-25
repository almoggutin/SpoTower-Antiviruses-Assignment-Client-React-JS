import { Antivirus, Advantage } from '../models/antivirus.model';

const antivirusesData = [
    new Antivirus(
        'McAfee - Awaard winning antivirus protection',
        'https://m.media-amazon.com/images/I/71yYS83umoL._AC_SY606_.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/McAfee_logo_%282017%29.svg/2560px-McAfee_logo_%282017%29.svg.png',
        [
            new Advantage('Limited Time Only: Get 72% Off!'),
            new Advantage('30-day money back guarantee'),
            new Advantage('Identity theft & safe browsing'),
            new Advantage('100% virus removal guarantee'),
        ],
        9.8,
        'Superb',
        58238,
        true,
        true,
        true,
        true
    ),
    new Antivirus(
        'TotalAv',
        'https://antivirusadviser.com/wp-content/uploads/2022/01/TotalAV_Windows_EN.png',
        'https://i.pcmag.com/imagery/reviews/074V3FXxPK0z0jwPNWT6bHq-20..v1610648486.png',
        [
            new Advantage('Limited Offer: Get 80% Off'),
            new Advantage('30-day money back guarantee'),
            new Advantage('Provides complete online protection'),
        ],
        9.4,
        'Execellent',
        22198,
        true,
        true,
        true,
        true
    ),
    new Antivirus(
        'Norton',
        'https://www.antivirus.co.il/images/products/norton-360-standard.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Norton-logo-2021.svg/2560px-Norton-logo-2021.svg.png',
        [
            new Advantage('60 day full money-back guarantee'),
            new Advantage('Dark Web Monitoring'),
            new Advantage('Secure VPN & Real-Time Cyber Protection'),
        ],
        9.0,
        'Very Good',
        48215,
        true,
        true,
        true,
        true
    ),
];

export default antivirusesData;
