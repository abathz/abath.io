import { NextApiRequest, NextApiResponse } from 'next';
import { Users } from '../../../server/model/Users';

export default (_: NextApiRequest, res: NextApiResponse) => {
    const user: Users = {
        name: 'Adli Fariz',
        age: 26,
        address: 'Puri Anggrek Mas'
    };

    res.status(200).json(user);
};
