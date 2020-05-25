import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (_: NextApiRequest, res: NextApiResponse) => {
    const result = await axios.get('https://pomber.github.io/covid19/timeseries.json');

    const { data } = result;
    const key = Object.keys(data).sort();

    res.status(200).json(key);
};
