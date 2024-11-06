import React from 'react';

const NewsFilters = ({ filters, setFilters }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <div className="news-filters">
            <input 
                type="text" 
                name="keywords" 
                placeholder="Kalit so'zlar" 
                value={filters.keywords} 
                onChange={handleInputChange} 
            />
            <input 
                type="date" 
                name="fromDate" 
                placeholder="Bo'lgan davr dan" 
                value={filters.fromDate} 
                onChange={handleInputChange} 
            />
            <input 
                type="date" 
                name="toDate" 
                placeholder="Davr gacha" 
                value={filters.toDate} 
                onChange={handleInputChange} 
            />
            <input 
                type="text" 
                name="category" 
                placeholder="Yo'nalish" 
                value={filters.category} 
                onChange={handleInputChange} 
            />
            <button>Qidirish</button>
        </div>
    );
};

export default NewsFilters;