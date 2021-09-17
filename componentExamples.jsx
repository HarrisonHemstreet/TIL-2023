/* USE THESE COMPONENTS!!!!!!!!

asdf

asdf
*/
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import renderBootstrap from './utils/renderBootstrap';
import RemsPage from './components/RemsPageBootstrap';
import DatePicker from './components/DatePicker';
import DateRangePicker from './components/DateRangePicker';
import SelectFranchise from './components/SelectFranchise';
import SelectCustomer from './components/SelectCustomer';
import SelectSubcarrier from './components/SelectSubcarrier';
import SelectServiceCode from './components/SelectServiceCode';
import SelectCarrier from './components/SelectCarrier';
import SelectSurcharge from './components/SelectSurcharge';
import SelectRateSheet from './SelectRateSheet';
// import './styles.css';

import SnackAlert from './components/SnackAlert';
import invokeService from './utils/invokeService';
import ajax from './utils/ajax';

const ScheduleCustomRateSheetUpdates = () => {
    const titleBarRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [franchiseId, setFranchiseId] = useState(null);
    const [customerId, setCustomerId] = useState(null);
    const [subcarrierId, setSubcarrierId] = useState(null);
    const [carrierId, setCarrierId] = useState(null);
    const [serviceCode, setServiceCode] = useState(null);
    const [carrierId2, setCarrierId2] = useState(null);
    const [surchargeId, setSurchargeId] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        setLoading(false);
    });

    function onChangeRange(newStartDate, newEndDate) {
        setStartDate(newStartDate);
        setEndDate(newEndDate);
    }

    function onSelectCarrier(carrierId, carrierName) {
        setCarrierId(carrierId);
        console.log(carrierId);
    }

    function onSelectCarrier2(carrierId, carrierName) {
        setCarrierId2(carrierId);
    }

    function clearAll() {
        setDate(null);
        setStartDate(null);
        setEndDate(null);
        setFranchiseId(null);
        setCustomerId(null);
        setSubcarrierId(null);
        setCarrierId(null);
        setServiceCode(null);
        setCarrierId2(null);
        setSurchargeId(null);
    }

    let params = {
        action: 'customer.loadcustomratesheets2'
    };

    let payload = {
        action: `updateratesheets.${carrierId}`
    };
    // let payload = {
    //     action: 'dog.90'
    // };

    const dogBark = async() => {
        let code = await invokeService(payload);
        console.log('code', code);
    };

    console.log('bark', dogBark());

    // console.log('dogBark', dogBark());
    // console.log('dbName', window.rems);
    const whichDate = () => {
        let date = new Date();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        let dayofmonth = date.getDate();
        let month = date.getMonth();
        let dayofweek = date.getDay();
        // console.log(mins, secs, dayofmonth, month, dayofweek);
    };
    // console.log(whichDate());

    /*
        uniqueCustomTemplateTitles creates an array of unique template titles
        through fetching the data through invokeService's API query which pulls down
        relavent information on the custom rate sheets
    */
    const uniqueCustomTemplateTitles = async() => {
        let sheetNames = [];
        let sheets = await invokeService(params);
        sheets.map(sheet => {
            sheetNames.push(sheet.custom);
        });
        let newSet = new Set(sheetNames);
        let uniqueSheetNames = Array.from(newSet);
        // console.log(uniqueSheetNames);
        return uniqueSheetNames;
    };
    uniqueCustomTemplateTitles();

    // console.log('rate sheet', uniqueCustomTemplateTitles());

    // get the services of a particular rate sheet
    const rateSheetServices = async(index) => {
        let sheetServices = [];
        let templateTitles = await uniqueCustomTemplateTitles();
        let sheets = await invokeService(params);
        let rateSheetName = templateTitles[index];
        sheets.map(sheet => {
            if (rateSheetName === sheet.custom) {
                sheetServices.push(sheet);
            }
        });
        let newSet = new Set(sheetServices);
        let uniqueSheetServices = Array.from(newSet);
        return uniqueSheetServices;
    };

    const loadEntries = async() => {
        await ajax.get('achPaymentLog', 'getRecentAndPendingLogEntries').then((response) => {
            // console.log(response);
        });
    };

    // loadEntries();

    /*
        creates two new arrays that contain the unique entries to both sheets
        the way you access the values, is by doing something like this (WITHIN AN ASYC FUNCTION):
        let varDifferencesBetweenRateSheets = differencesBetweenRateSheets();
        let currRateSheets = varDifferencesBetweenRateSheets[0];
        let newRateSheets = varDifferencesBetweenRateSheets[1];
    */
    const differencesBetweenRateSheets = async() => {
        let currentRateSheet = await rateSheetServices(0);
        let newRateSheet = await rateSheetServices(18);

        let uniqueToCurrentRateSheet = currentRateSheet.filter(x => !newRateSheet.includes(x));
        let uniqueToNewRateSheet = newRateSheet.filter(x => !currentRateSheet.includes(x));
        let intersection = currentRateSheet.filter(x => newRateSheet.includes(x));

        return [uniqueToCurrentRateSheet, uniqueToNewRateSheet, intersection];
    };
    // array([action] => customer.loadcustomratesheets2)
    // console.log(differencesBetweenRateSheets());

    return (
        <RemsPage
            loading={loading}
            title="Schedule Custom Rate Sheet Updates"
            titleBarRef={titleBarRef}
            sidebarContent={<p style={{ position: 'absolute', bottom: '-100px' }}>Test</p>}
            sidebarOpenOverride={sidebarOpen}
            sidebarToggleCallback={setSidebarOpen}
            sidebarWidth="30%"
        >
            <div className="row">
                <div className="col-12 pl-5">

                    <form>
                        <div className="form-row my-5 pl-5">
                            <div className="col-2">
                                <label>Carrier Filter</label>
                                <SelectCarrier
                                    carrierId={carrierId}
                                    onSelect={onSelectCarrier}
                                    src="rems"
                                />
                            </div>
                            <div className="col-2">
                                <label>Current Rate Sheet</label>
                                <DatePicker
                                    title="Select Date"
                                    date={date}
                                    onDateChange={setDate}
                                />
                            </div>
                            <div className="col-2">
                                <label>New Rate Sheet</label>
                                <SelectCarrier
                                    carrierId={carrierId}
                                    onSelect={onSelectCarrier}
                                    src="rems"
                                />
                            </div>
                            <div className="col-2">
                                <label>Date:</label>
                                <DatePicker
                                    title="Select Date"
                                    date={date}
                                    onDateChange={setDate}
                                />
                            </div>
                            <div className="col-1 my-4 pl-5">
                                <button type="button" className="btn btn-primary" onClick={clearAll}>Test</button>
                            </div>
                            <div className="col-1 my-4">
                                <button type="button" className="btn btn-primary" onClick={clearAll}>Execute</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* TABLE HEREEEEEEEEEEEEEEEE!!!! */}
            <SelectRateSheet />
            <div className="px-1">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <SelectRateSheet />;
        </RemsPage>
    );
};

renderBootstrap(<ScheduleCustomRateSheetUpdates />);

