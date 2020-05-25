import React, { FC, useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import _last from 'lodash/last';
import _size from 'lodash/size';
import ReactSelect from 'react-select';

axios.defaults.baseURL = 'http://localhost:3000/api';

const Home: FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [countries, setCountries] = useState<any[]>([]);
    const [country, setCountry] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<any>({});

    useEffect(() => {
        const initFetch = async () => {
            const result = await axios.get('/countries');

            const { data } = result;
            setCountries(data);
            setLoading(false);
        };

        initFetch();
    }, []);

    const getSelectData = async (value: any) => {
        const result = await axios.get(`/country/${value}`);

        const { data } = result;
        setCountry(value);
        setSelectedCountry(_last(data));
    };

    return (
        <div>
            <ReactSelect
                value={country}
                getOptionLabel={data => data}
                getOptionValue={data => data}
                options={countries}
                isLoading={loading}
                onChange={getSelectData}
            />
            {_size(selectedCountry) > 0 ? (
                <Fragment>
                    <p>Confirmed: {selectedCountry.confirmed}</p>
                    <p>Deaths: {selectedCountry.deaths}</p>
                    <p>Recovered: {selectedCountry.recovered}</p>
                </Fragment>
            ) : null}
        </div>
    );
};

export default Home;
