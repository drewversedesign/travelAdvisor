import { useState } from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";

const AttractionsList = () => {
    const [attractionsList] = useState([
        { name: "Bwindi Impenetrable Forest", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/d4/02/b5/experience-the-beauty.jpg?w=700&h=400&s=1" },
        { name: "Murchison Falls National Park", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3b/73/32/africa-is-for-us-the.jpg?w=700&h=400&s=1" },
        { name: "Uganda Wildlife Conservation Education Centre", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/bd/e4/15/photo0jpg.jpg?w=700&h=-1&s=1" },
        { name: "Entebbe Botanical Gardens", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/c3/bf/b7.jpg" },
        { name: "Ngamba Island Chimpanzee Sanctuary", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d6/b9/87/20210407-114824-largejpg.jpg?w=700&h=400&s=1" },
        { name: "Gaddafi National Mosque", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/68/9c/ef/caption.jpg?w=700&h=400&s=1" },
        { name: "Mabamba Swamp Shoebill Watching Entebbe", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/47/4d/bird-watching-on-a-locally.jpg?w=700&h=400&s=1" },
        { name: "Kazinga Channel", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/c8/a6/73/kazinga.jpg?w=700&h=400&s=1" },
        { name: "Lake Mburo National Park", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/93/f3/bb/caption.jpg?w=700&h=400&s=1" },
        { name: "Murchison Falls", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a5/8c/51/the-falls.jpg?w=600&h=400&s=1" },
        { name: "Mabamba Swamp Shoebill Bird Watching", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/a1/5b/7d/happy-clients.jpg?w=900&h=500&s=1" },
        { name: "Explore Sipi Falls", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/f0/6e/01/the-palace-grounds.jpg?w=900&h=500&s=1" },
        { name: "Baha'i Temple", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a0/a3/7c/bahai-temple.jpg?w=900&h=500&s=1" },
        { name: "Kibale Forest National Park", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/13/62/c5/uganda-is-a-real-gem.jpg?w=900&h=500&s=1" },
        { name: "Mgahinga Gorilla National Park", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/50/5d/58/caption.jpg?w=1000&h=-1&s=1" },
        { name: "Itanda Falls", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e5/52/57/20180930-162420-largejpg.jpg?w=900&h=500&s=1" },
        { name: "Equator Entebbe", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ff/8e/d5/equator-entebbe.jpg?w=1000&h=-1&s=1" },
        { name: "Uganda Reptile Village", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/cf/a3/be/caption.jpg?w=1000&h=-1&s=1" },
        { name: "Queen Elizabeth National Park", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/7a/d0/a9/reticulated-giraffe.jpg?w=900&h=-1&s=1" },
        { name: "Rwenzori Moutains National Park", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/29/09/4e/rwenzori-ranges.jpg?w=1000&h=-1&s=1" },
        { name: "Source of the Nile - Speke Monument", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/6a/46/8a/nilin-kaynagi.jpg?w=900&h=500&s=1" },
        { name: "Bigodi Wetlands Sanctuary", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3d/22/29/photo3jpg.jpg?w=700&h=-1&s=1" },
        { name: "Kidepo Valley National Park", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/13/46/de/giraffe-evening-walk.jpg?w=700&h=400&s=1" },
        { name: "Uganda Martyrs Shrine", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/39/f6/d8/a-roman-catholic-minor.jpg?w=700&h=-1&s=1" },
        { name: "Igongo Cultural Centre", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/b3/ee/fa/igongo-cultural-centre.jpg?w=700&h=400&s=1" },
        { name: "Green Equator Masaka Rd", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a2/3f/58/equator-sign-in-uganda.jpg?w=700&h=-1&s=1" },
        { name: "Gallery Antique", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/b3/fe/5d/the-interior-section.jpg?w=700&h=-1&s=1" },
        { name: "Social Innovation Museum", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/9b/a7/df/social-innovation-museum.jpg?w=700&h=400&s=1" },
        { name: "Waterfall Cruises - Murchison Falls", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/89/58/8c/from-the-top.jpg?w=700&h=400&s=1" }
    ]);

    // Effect to fetch list of places for component from the getPlacesByLatLng endpoint and effect is reran on change of coordinates 
    // useEffect(() => {
    //     let source = axios.CancelToken.source();

    //     // Loading state is set to true while data is being fetched from endpoint
    //     setIsLoading(true)

    //     // Calling on the getPlacesByLatLng endpoint passing in the 'attraction' as place type, coordinates (longitude and latitude), a limit parameter and source for error handling
    //     getPlacesByLatLng('attractions', coordinates.lat, coordinates.lng, { limit: 30 }, source)
    //         .then(data => {
    //             // Data is received and set to 'attractions' state list filtering out items with zero reviews, items with id '0' and items with no 'name' property
    //             setAttractions(data.filter(item => item.num_reviews != 0 && item.location_id != 0 && item.name))

    //             // Setting loading state back to false to stop loading
    //             setIsLoading(false);
    //         })

    //     // Effect Cleanup
    //     return () => {
    //         source.cancel();
    //     }
    // }, [coordinates])

        // Effect Cleanup
    //     return () => {
    //         source.cancel();
    //     }
    // }, [coordinates])

    return ( 
        <>
            {/* Navbar with Border */}
            <Navbar border />
            {/* --- */}

            <div className="container mx-auto pb-4">
                <div className="text-center my-10">
                    <h1 className="font-semibold text-lg md:text-3xl">
                        Attractions near you
                    </h1>
                </div>

                {/* Attractions Listing */}
                { !attractions || isLoading ? (
                    // Displays a loading if 'attractions' has no data in state or data fetching is in loading state
                    <AttractionsListLoader />
                ) : (
                    <>
                        {/* Renders Section If 'attractions' list is ready or data fetching is not in loading state */}
                        <div className="block md:grid md:grid-cols-12 md:px-4 my-2 gap-3">
                            {/* Mapping through list of attractions object  */}
                            { attractions?.map((attraction, i) => (
                                <div key={i} className="md:col-span-6 lg:col-span-4 mb-4">
                                    <div className="w-full h-[250px] md:h-[400px] object-cover">
                                        {/* Link that routes to the placeDetails route with the current attraction 'location_id' passed into the url parameter */}
                                        <Link to={`/attractions/${attraction?.location_id}`}>
                                            {/* Attraction Image - display if Image is found in result object, else a default image is displayed as fallback */}
                                            <img src={ attraction?.photo ? attraction?.photo?.images?.large?.url : 'https://media-cdn.tripadvisor.com/media/photo-s/22/d9/7b/42/this-image-has-been-removed.jpg'} alt="" 
                                                className=" w-full h-full object-cover curso-pointer"
                                            />
                                            {/* --- */}
                                        </Link>
                                        {/* --- */}
                                    </div>
                                    <div className="px-4 md:px-0 py-2 space-y-1">
                                        {/* Attraction Name */}
                                        <h2 className="font-semibold md:text-lg">
                                            { attraction?.name }
                                        </h2>
                                        {/* --- */}

                                        <p className="flex items-center text-xs">
                                            {/* Attraction Rating with 'rating' property passed to generate a React Stars Rating element - displays only if found in result object  */}
                                            <span className="flex items-center mr-1">
                                                <ReactStarsRating 
                                                    value={Number(attraction?.rating)} 
                                                    size={18} 
                                                    className="flex mr-2"
                                                    isEdit={false} 
                                                    primaryColor="#00afef" 
                                                    secondaryColor="#e5e7eb" 
                                                />
                                            </span>
                                            {/* --- */}

                                            {/* Attraction Revies Count */}
                                            { attraction?.num_reviews } Reviews
                                            {/* --- */}
                                        </p>
                                        <p className="text-sm">
                                            {/* Mapping thought Attraction Subtype List  */}
                                            { attraction?.subtype.map((type, i) => (
                                                <span key={i}>
                                                    { type.name }
                                                </span>
                                            )) }
                                            {/* --- */}
                                        </p>
                                    </div>
                                </div>
                            )) }
                            {/* --- */}
                        </div>
                        {/* --- */}
                    </>
                )}
                {/* --- */}
            </div>

            {/* Footer Component */}
            <Footer />
            {/* --- */}
        </>
     );
}
 
export default AttractionsList;