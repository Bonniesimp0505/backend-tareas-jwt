const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    //en la respuesta del handler de errores, se envía un objeto JSON con el mensaje de error y, si el entorno es de desarrollo, también se incluye la pila de llamadas (stack trace) del error.
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
}
module.exports = errorHandler