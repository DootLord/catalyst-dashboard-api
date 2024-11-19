import { Request, Response } from 'express';
import { cashService } from '../../service/temp/cash.service';

function getCashShare(req: Request, res: Response) {

    res.send("" + cashService.getCashShare());
}

export { getCashShare };