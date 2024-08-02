import React, { useEffect, useState } from 'react';
import lang from '../languages';

const Translator = () => {
    const [fromText, setFromText] = useState('');
    const [toText, setToText] = useState('');
    const [fromLanguage, setFromLanguage] = useState('en-GB');
    const [toLanguage, setToLanguage] = useState('hi-IN');
    const [languages, setLanguages] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLanguages(lang);
    }, []);

    const copyContent = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const utterText = (text, language) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language;
        synth.speak(utterance);
    };

    // const handleExchange = () => {
    //     let tempValue = fromText;
    //     setFromText(toText);
    //     setToText(tempValue);

    //     let tempLang = fromLanguage;
    //     setFromLanguage(toLanguage);
    //     setToLanguage(tempLang);
    // };

    const handleTranslate = () => {
        setLoading(true);
        let url = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`;

        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setToText(data.responseData.translatedText);
            setLoading(false);
        })
        .catch(err => {
            console.error('Error during translation: ', err);
            setLoading(false);
        });
    };

    const handleIconClick = (target, id) => {
        if (id === 'from') {
            if (target.classList.contains('fa-copy')) {
                copyContent(fromText);
            } else {
                utterText(fromText, fromLanguage);
            }
        } else {
            if (target.classList.contains('fa-copy')) {
                copyContent(toText);
            } else {
                utterText(toText, toLanguage);
            }
        }
    };

    return (
        <>
            <div className="max-w-1280 mx-auto p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Translator</h2>
                <div className="wrapper">
                    <div className="text-input">
                        <textarea 
                            name="from" 
                            className="from-text bg-gray-200 p-4 rounded-lg w-full mb-4" 
                            placeholder="Enter Text" 
                            id="from" 
                            value={fromText} 
                            onChange={(e) => setFromText(e.target.value)}>
                        </textarea>
                        <textarea 
                            name="to" 
                            className="to-text bg-gray-200 p-4 rounded-lg w-full" 
                            id="to" 
                            value={toText} 
                            readOnly>
                        </textarea>
                    </div>
                    <ul className="controls flex justify-between items-center mt-4">
                        <li className="row from flex items-center">
                            <div className="icons flex space-x-4">
                                <button 
                                    id="from" 
                                    className="fa-solid fa-volume-high bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                    onClick={(e) => handleIconClick(e.target, 'from')}
                                >
                                    Speak
                                </button>
                                <button 
                                    id="from" 
                                    className="fa-solid fa-copy bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                    onClick={(e) => handleIconClick(e.target, 'from')}
                                >
                                    Copy
                                </button>
                            </div>
                            <select 
                                value={fromLanguage} 
                                onChange={(e) => setFromLanguage(e.target.value)}
                                className="ml-4 p-2 rounded-lg bg-gray-200"
                            >
                                {Object.entries(languages).map(([code, name]) => (
                                    <option key={code} value={code}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        </li>
                        {/* <li className="exchange">
                            <button 
                                className="fa-solid fa-arrow-right-arrow-left bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                onClick={handleExchange}
                            >
                                Exchange
                            </button>
                        </li> */}
                        <li className="row to flex items-center">
                            <select 
                                value={toLanguage} 
                                onChange={(e) => setToLanguage(e.target.value)}
                                className="mr-4 p-2 rounded-lg bg-gray-200"
                            >
                                {Object.entries(languages).map(([code, name]) => (
                                    <option key={code} value={code}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                            <div className="icons flex space-x-4">
                                <button 
                                    id="to" 
                                    className="fa-solid fa-copy bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                    onClick={(e) => handleIconClick(e.target, 'to')}
                                >
                                    Copy
                                </button>
                                <button 
                                    id="to" 
                                    className="fa-solid fa-volume-high bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                    onClick={(e) => handleIconClick(e.target, 'to')}
                                >
                                    Speak
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <button 
                    onClick={handleTranslate} 
                    disabled={loading}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    {loading ? 'Translating...' : 'Translate Text'}
                </button>
            </div>
        </>
    );
};

export default Translator;
