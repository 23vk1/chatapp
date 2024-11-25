const { json } = require("express");

const Helper = {}

Helper.handleResponse = async ({res, status, message,  data = [], extra =''}) => {
    const output = {
        status : status,
        message : message,
        data : data,
    };
    if(extra != ''){
        output.extra = extra;
    }
    res.status(status);
    return res.json(output);
}

Helper.handleError = async ({req, res, error, message = ''}) => {
    console.error('api error', error, typeof error)
    if(req || error){
        const url  = req ? req.url :'something';
        console.log({
            url,
            error: typeof error === 'object' ? JSON.stringify(error, null, 2)
            : String(error) || `An error ocurd while processing request to ${url}`,
            typeOfError : typeof error
        });
        
    }   
    if (res) {
        return jsonFormat(
            res,
            constants.SERVER_ERROR_CODE,
            message ? message : I18n.__('SERVER_ERROR').message,
            [],
        );
    }
}








module.exports = Helper;