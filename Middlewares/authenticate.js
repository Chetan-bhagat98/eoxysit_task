const fs=require('fs');

const auth = async (req, res, next) => {
    const ip = req.ip; // IP address of the client
    const requestTime = new Date(); // Request timestamp
    const method = req.method; // Request method
    const id=req.params.userID || null;

    fs.readFile('./history_audit.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        data=JSON.parse(data);
        if(data.Operation_details==undefined){
            data.Operation_details=[]
        }
        data.Operation_details.push({
            "operation":method,
            "PerformBy":ip,
            "Time":requestTime,
            "document_updated":id
        });;
        fs.writeFile('./history_audit.json', JSON.stringify(data), 'utf8', (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('Data Enterd in file');
          });
      });
    next()
}

module.exports = { auth };