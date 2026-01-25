import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import BannerVideo from '../components/BannerVideo';
import './TierListingPage.css';

const TierListingPage = ({ tier, tierCategory }) => {
  const [listings, setListings] = useState([]);
  const [bannerVideo, setBannerVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch listings and banner video for this tier/category
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/listings/${tier}/${tierCategory}`);
        const data = await response.json();
        setListings(data. listings);
        // Fetch tier listing page data for banner video
        const pageResponse = await fetch(`/api/tier-listing-page/${tier}/${tierCategory}`);
        const pageData = await pageResponse.json();
        setBannerVideo(pageData.bannerVideoUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tier, tierCategory]);

  return (
    <div className="tier-listing-page">
      <Header />
      <div className="page-container">
        <h1 className="page-title">{tierCategory}</h1>
        
        <BannerVideo videoUrl={bannerVideo} title={`${tierCategory} Video`} />

        <div className="listings-grid">
          {listings.map((listing) => (
            <div key={listing._id} className="listing-card">
              <div className="listing-image">
                {listing.pictures.length > 0 && (
                  <img src={listing.pictures[0]. url} alt={listing.title} />
                )}
              </div>
              <div className="listing-content">
                <h3>{listing.title}</h3>
                {listing.userId.displayBusinessName && (
                  <p className="business-name">{listing.userId.businessName}</p>
                )}
                <p className="description">{listing.description}</p>
                {listing.price && <p className="price">₦{listing.price. toLocaleString()}</p>}
                {listing.videoEnabled && listing.youtubeVideoUrl && (
                  <a href={`#video-${listing._id}`} className="video-link">
                    📹 Watch Video
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TierListingPage;
