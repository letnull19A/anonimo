exports.Auth = class
{

    constructor() {}

    CreateSession(req, res, data)
    {
        req.session.nickname = data.nickname;
        req.session.temp_id = data.temp_id;
    }
}