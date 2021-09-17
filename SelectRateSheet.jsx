import React, { useState } from 'react';
import invokeService from './utils/invokeService';

export default function SelectRateSheet() {
    const [cities, setCities] = useState([]);
    const [selectedCounty, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    let params = {
        action: 'customer.loadcustomratesheets2'
    };
    let uniqueSheetNames = [];
    let countries = {};
    const uniqueCustomTemplateTitles = async() => {
        let sheetNames = [];
        let sheets = await invokeService(params);
        sheets.map(sheet => {
            sheetNames.push(sheet.custom);
        }); let newSet = new Set(sheetNames);
        let uniqueSheetNames = Array.from(newSet);
        // console.log('from select', uniqueSheetNames);
        countries = {
            France: uniqueSheetNames,
        };
        // console.log('countries', countries);
        return uniqueSheetNames;
    };

    // console.log('from select!', uniqueCustomTemplateTitles());

    countries = {
        France: uniqueSheetNames,
    };

    // console.log('actualCountries', countries);

    const countryList = Object.keys(countries).map(key => ({
        name: key
    }));

    function handleCountrySelect(e) {
        // console.log('Selected country', e.target.value);
        const countrySel = e.target.value;
        const citiesSel = countrySel !== '' ? countries[countrySel] : '';
        setSelectedCountry(countrySel);
        setCities(citiesSel);
        setSelectedCity('');
    }

    function handleCitySelect(e) {
        // console.log('Selected city', e.target.value);
        const citiesSel = e.target.value;
        setSelectedCity(citiesSel);
    }

    return (
        <div className="App">

            <div className="Container">
                <select
                    name="Countries"
                    onChange={e => handleCountrySelect(e)}
                    value={selectedCounty}
                >
                    <option value="">Select the country</option>
                    {countryList.map((country, key) => (
                        <option key={key} value={country.name}>
                            {country.name}
                        </option>
                    ))}
                </select>

                <select
                    name="Cities"
                    onChange={e => handleCitySelect(e)}
                    value={selectedCity}
                >
                    <option value="">Select the city</option>
                    {cities.map((city, key) => (
                        <option key={key} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

// import React, { useState, useEffect } from 'react';
// import invokeService from './utils/invokeService';
// import TableRateSheet from './TableRateSheet';

// const SelectRateSheet = () => {
//     const [headers, setHeaders] = useState([]);
//     const [sheets, setSheets] = useState([]);

//     // let sheetNamez = [];
//     // const coolFunc = async() => {
//     //     const params = {
//     //         action: 'customer.loadcustomratesheets2'
//     //     };
//     //     const theseSheets = await invokeService(params);
//     //     // console.log('sheets', theseSheets);
//     //     theseSheets.map(sheet => {
//     //         sheetNamez.push(sheet.custom);
//     //     });
//     //     let newSet = new Set(sheetNamez);
//     //     let uniqueSheetNames = Array.from(newSet);

//     //     console.log('UNIQUE', uniqueSheetNames);
//     // };
//     // coolFunc();

//     let sheetNames = [];
//     useEffect(() => {
//         const getPosts = async() => {
//             const params = {
//                 action: 'customer.loadcustomratesheets2'
//             };
//             const { sheets } = await invokeService(params);
//             await console.log('sheets', sheets);
//             await sheets.map(sheet => {
//                 sheetNames.push(sheet.custom);
//             });
//             let newSet = new Set(sheetNames);
//             let uniqueSheetNames = Array.from(newSet);
//             console.log('HOWDY', uniqueSheetNames);
//             setSheets(uniqueSheetNames);
//         };

//         getPosts();
//     }, []);

//     return (
//         <div>
//             <h1>Hello StackBlitz!</h1>
//             <TableRateSheet data={sheets} />
//         </div>
//     );
// };

// export default SelectRateSheet;

