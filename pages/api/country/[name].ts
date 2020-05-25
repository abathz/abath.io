import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const name = req.query.name.toString();
    axios.get('https://pomber.github.io/covid19/timeseries.json').then(result => {
        const { data } = result;
        res.status(200).json(data[name]);
    });
};
