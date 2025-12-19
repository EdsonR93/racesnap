export function createEventController(useCase:any){
    return async (req:any, res:any) => {
        const result = await useCase.execute({
            name: req.body.name,
            createdBy: req.user?.id || "admin"
        });

        res.status(201).json(result);
    };
}