import React from "react";
import { useState } from "react";
import './faq.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const FAQ = () => {
    const [answersVisible, setAnswersVisible] = useState([]);

    const faqData = [
        {id:1,
        question: "What are the best tips for finding budget-friendly travel accommodations?",
        answer: "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet."
        },

        {id:2,
            question: "How can I find authentic local experiences when traveling?",
            answer: "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet."
        },

        {id:3,
            question: "What should I pack for a long-term trip or backpacking adventure?",
            answer: "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet."
        },

        {id:4,
            question: "What are some strategies for overcoming jet lag when traveling across time zones?",
            answer: "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet."
        },

        {id:5,
            question: "What are the visa requirements for popular tourist destinations?",
            answer: "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet."
        }

    ];

    const toggleAnswer = (id) => {
        setAnswersVisible((prev) => {
            const newVisibility = [...prev];
            const index = newVisibility.indexOf(id);
            if (index === -1) {
                newVisibility.push(id);
            } else {
                newVisibility.splice(index, 1);
            }
            return newVisibility;
        });
    };

    return(
        <div>
            <Header/>
            <div className="video video_faq">
                <div className="texts">
                    <h1>FAQ</h1>
                    <p>Unlocking the Mysteries of Travel: Your Questions, Our Journey.</p>
                </div>
            </div>
            <div className="faq-section">
                {faqData.map((item, index) => (
                    <div key={item.id} className="faq-item">
                        <div className="question-and-answer">
                            <span className="question-number">{index + 1}</span>
                            <div className="question">
                                {item.question}
                                <div className="button-container">
                                    <button
                                        className={`button ${answersVisible.includes(item.id) ? 'button-open' : 'button-closed'}`}
                                        onClick={() => toggleAnswer(item.id)}
                                    >
                                        {answersVisible.includes(item.id) ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6569 1.75744L10.2426 0.343227L6 4.58587L1.75736 0.343226L0.343146 1.75744L4.58579 6.00008L0.343146 10.2427L1.75736 11.6569L6 7.41429L10.2426 11.6569L11.6569 10.2427L7.41421 6.00008L11.6569 1.75744Z" fill="white"/>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.5H6V6.5H0V8.5H6V14.5H8V8.5H14V6.5H8V0.5Z" fill="#788795"/>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {answersVisible.includes(item.id) && <div className="answer">{item.answer}</div>}
                    </div>
                ))}
            </div>

            <Footer/>
        </div>
    )
}

export default FAQ;