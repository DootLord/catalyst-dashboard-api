import { Request, Response } from 'express';
import { RequestPost, requestPostSchema } from '../../schema/temp/count.schema';
import { counterService } from '../../service/temp/counter.service';

function getCounter(req: Request, res: Response) {

    res.send("" + counterService.get());
}

function incrementCounter(req: Request, res: Response) {
    const request = requestPostSchema.safeParse(req.body);
    if (!request.success) {
        res.status(400).send(request.error.errors);
        return;
    }

    const { value } = request.data as RequestPost;
    console.log(value);
    counterService.increase(value);
    res.send("" + counterService.get());
}

export { getCounter, incrementCounter };