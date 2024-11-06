import React from 'react'

const NewsCard = ({ news }) => {
    return (
        <div className="news-card">
            <img src={news.imageUrl} alt={news.title} className="news-card__image" />
            <div className="news-card__info">
                <h3>{news.title}</h3>
                <p>{news.date}</p>
                <div className="news-card__footer">
                    <span>{news.views} ko'rildi</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard
