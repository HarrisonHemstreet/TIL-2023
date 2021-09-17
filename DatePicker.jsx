import React, { Fragment, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import Modal from './Modal';

function DatePicker({
    title = 'Select Date',
    date,
    onDateChange
}) {
    const [showModal, setShowModal] = useState(false);

    let todaysDate = moment().format('YYYY-MM-DD');

    let dateObj = moment(date || todaysDate).toDate();

    function onClickDateField() {
        setShowModal(true);
    }

    function onClickClearDate() {
        if (typeof onDateChange === 'function') {
            onDateChange('');
        }
    }

    function onCloseModal() {
        setShowModal(false);
    }

    function onChange(newDateObj) {
        setShowModal(false);

        if (typeof onDateChange === 'function') {
            onDateChange(moment(newDateObj).format('YYYY-MM-DD'));
            let mins = newDateObj.getMinutes();
            let secs = newDateObj.getSeconds();
            let dayofmonth = newDateObj.getDate();
            let month = newDateObj.getMonth();
            let dayofweek = newDateObj.getDay();
            let newArr = [mins, secs, dayofmonth, month, dayofweek];
            console.log(mins, secs, dayofmonth, month, dayofweek);
            return newArr;
        }
    }

    return (
        <Fragment>
            <div className="input-group" style={{ cursor: 'pointer' }}>
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="far fa-calendar-alt" onClick={onClickDateField}></i>
                    </div>
                </div>
                <input
                    className="form-control"
                    value={date || ''}
                    readOnly
                    onClick={onClickDateField}
                />
                <div className="input-group-append">
                    <div className="input-group-text">
                        <i className="fas fa-times" onClick={onClickClearDate}></i>
                    </div>
                </div>
            </div>

            {showModal ? (
                <Portal>
                    <Modal
                        title={title}
                        onClose={onCloseModal}
                        zIndex="9999"
                    >
                        <div className="text-center">
                            <Calendar
                                date={dateObj}
                                onChange={onChange}
                            />
                        </div>
                    </Modal>
                </Portal>
            ) : null}
        </Fragment>
    );
}

function Portal({ children }) {
    const [containerElement] = useState(document.createElement('div'));

    useEffect(() => {
        document.getElementById('root').appendChild(containerElement);

        return () => {
            document.getElementById('root').removeChild(containerElement);
        };
    }, []);

    return ReactDom.createPortal(
        children,
        containerElement
    );
}

export default DatePicker;

