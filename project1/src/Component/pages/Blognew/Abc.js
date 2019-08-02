import React from "react";
import ContactCard from "./ContactCard";


function Abc() {
    return (
         <div className="contacts">
            <ContactCard 
                contact={{name: "Taj Mahal (Agra, India)", imgUrl:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-taj-mahal.jpg.rend.hgtvcom.1280.960.suffix/1491581548979.jpeg", phone: "(212) 555-1234", email: "travelworld@gmail.com"}}
            />

            <ContactCard 
                contact={{name: "Great Wall of China (China)", imgUrl: "https://www.travelrepublic.co.uk/blog/wp-content/uploads/2018/11/GreatWallOfChina-TravelRepublic-iStock-506393198.jpg", phone: "(212) 555-1234", email: "travelworld@gmail.com"}}
            />

            <ContactCard 
                contact={{name: " Great Pyramid at Giza(Egypt)", imgUrl: "https://s3.amazonaws.com/iexplore_web/images/assets/000/002/690/original/spinx_-_Roderick_Eime.jpg?1439577916", phone: "(212) 555-1234", email: "travelworld@gmail.com"}}
            />

            <ContactCard 
                contact={{name: "Christ the Redeemer Statue (Rio de Janeiro)", imgUrl: "https://mapmate.io/images/pins/khVMfZw0NxF0Dv2t20180326171550.jpg", phone: "(212) 555-1234", email: "travelworld@gmail.com"}}
            />

            <ContactCard 
                contact={{name: "The Roman Colosseum (Rome)", imgUrl: "https://dw8stlw9qt0iz.cloudfront.net/MuA-ER7z6kZysqxu35HBsR0hOp4=/fit-in/800x450/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/landscape/standard/118ac950-6b72-492c-e8b4-9d30c5114361.png", phone: "(212) 555-1234", email: "travelworld@gmail.com"}}
            />
        </div>
    )
}
export default Abc;
