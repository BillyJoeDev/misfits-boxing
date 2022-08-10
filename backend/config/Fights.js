module.exports = (req, res) => {
    const fights = [
        [
            {
            name: "KSI",
            record: "1-0-0",
            image: "images/cardimages/ksi.jpg",
            position: {
                top: "0",
                bottom: "0",
                left: "-80px",
                right: "0"
            }
            },
            {
            name: "Swarmz",
            record: "0-0-0",
            image: "images/cardimages/swarmz.jpg",
            position: {
                top: "0",
                bottom: "0",
                left: "0",
                right: "0"
            }
            }
        ],    
        [
            {
            name: "FaZe Temper",
            record: "1-0-0",
            image: "images/cardimages/temperrr.jpg",
            position: {
                top: "0",
                bottom: "0",
                left: "-140px",
                right: "0"
            }
            },
            {
            name: "Slim",
            record: "3-0-0",
            image: "images/cardimages/slim.jpg",
            position: {
                top: "0",
                bottom: "0",
                left: "-20px",
                right: "0"
            }
            }
        ],
        [
            {
            name: "Deji",
            record: "0-2-0",
            image: "images/cardimages/deji.webp",
            position: {
                top: "0",
                bottom: "0",
                left: "0",
                right: "0"
            }
            },
            {
            name: "Fouseytube",
            record: "0-1-0",
            image: "images/cardimages/fousey.jpg",
            position: {
                top: "0",
                bottom: "0",
                left: "0",
                right: "0"
            }
            }
        ],
        [
            {
            name: "King Kenny",
            record: "0-1-0",
            image: "images/cardimages/king-kenny.jpeg",
            position: {
                top: "0",
                bottom: "0",
                left: "-20px",
                right: "0"
            }
            },
            {
            name: "FaZe Sensei",
            record: "1-0-0",
            image: "images/cardimages/sensei.jpg",
            position: {
                top: "0",
                bottom: "0",
                left: "-60px",
                right: "0"
            }
            }
        ],
        [
            {
            name: "Deen the Great",
            record: "0-0-0",
            image: "images/cardimages/deen.jpg",
            position: {
                top: "0",
                bottom: "0",
                left: "0",
                right: "0"
            }
            },
            {
            name: "Evil Hero",
            record: "1-0-0",
            image: "images/cardimages/evil.jpg",
            position: {
                top: "0",
                bottom: "0",
                left: "-160px",
                right: "0"
            }
            }
        ],
    ];

    return res.status(200).send({fights});
}