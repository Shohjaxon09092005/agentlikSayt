import React, { useState, useEffect } from 'react';
import '../style/formdata.css';

function FormData() {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone_number: '',
        address: '',
        work_address: '',
        position: '',
        title: '',
        text: '',
        captcha: ''
    });
    
    const [captcha, setCaptcha] = useState("");
    const [captchaAnswer, setCaptchaAnswer] = useState(null);

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        setCaptchaAnswer(num1 + num2);
        return `${num1} + ${num2} = ?`;
    };

    useEffect(() => {
        setCaptcha(generateCaptcha());
    }, []); // Faqat bir marta chaqiriladi

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (parseInt(formData.captcha) !== captchaAnswer) {
            alert("Captcha noto‘g‘ri! Iltimos, qayta urinib ko‘ring.");
            return;
        }

        try {
            const response = await fetch('https://agentlik-backend.onrender.com/api/v1/appeals/statistcs/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    full_name: formData.full_name,
                    email: formData.email,
                    phone_number: formData.phone_number,
                    address: formData.address,
                    work_address: formData.work_address,
                    position: formData.position,
                    title: formData.title,
                    text: formData.text
                })
            });

            const data = await response.json();
            console.log("Backend javobi:", data);

            if (response.ok) {
                alert("Ma’lumotlar muvaffaqiyatli yuborildi!");
                setFormData({
                    full_name: '',
                    email: '',
                    phone_number: '',
                    address: '',
                    work_address: '',
                    position: '',
                    title: '',
                    text: '',
                    captcha: ''
                });
                setCaptcha(generateCaptcha()); // Captcha qayta yaratiladi
            } else {
                console.error("Xato:", data);
                alert(`Ma'lumotlar yuborishda xatolik yuz berdi: ${data.message || "Noma'lum xato"}`);
            }
        } catch (error) {
            console.error("Xatolik:", error);
            alert("Ma’lumotlarni yuborishda xatolik yuz berdi.");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
                {/* Form fields */}
                <div className="form-group">
                    <label>F.I.Sh *</label>
                    <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                        placeholder="F.I.Sh"
                    />
                </div>
                <div className="form-group">
                    <label>Elektron pochta *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Elektron pochta"
                    />
                </div>
                <div className="form-group">
                    <label>Telefon *</label>
                    <input
                        type="tel"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        placeholder="+998 97 000-00-00"
                    />
                </div>
                <div className="form-group">
                    <label>Manzil</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Manzil"
                    />
                </div>
                <div className="form-group">
                    <label>Ish joyi</label>
                    <input
                        type="text"
                        name="work_address"
                        value={formData.work_address}
                        onChange={handleChange}
                        placeholder="Ish joyi"
                    />
                </div>
                <div className="form-group">
                    <label>Lavozim</label>
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Lavozim"
                    />
                </div>
                <div className="form-group">
                    <label>Savol mavzusi *</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="Savol mavzusi"
                    />
                </div>
                <div className="form-group">
                    <label>Savol matni (3000 belgigacha) *</label>
                    <textarea
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                        required
                        placeholder="Matn kriting"
                    />
                </div>
                <div className="form-group captcha-group">
                    <label>Spamdan himoya *</label>
                    <div className="captcha-container">
                        <span>{captcha}</span>
                        <input
                            type="text"
                            name="captcha"
                            value={formData.captcha}
                            onChange={handleChange}
                            required
                            placeholder="Captcha kiriting"
                        />
                        <button type="button" className="refresh-captcha" onClick={() => setCaptcha(generateCaptcha())}>⟳</button>
                    </div>
                </div>
                <button type="submit" className="submit-btn">Yuborish</button>
            </form>
        </div>
    );
}

export default FormData;
