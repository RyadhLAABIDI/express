const addDate = (req, res, next) => {
    const date = new Date();
 req.date= date ;
    const h = date.getHours();
    if (h > 9 && h < 16) {
      res.send ('We work from 9 to 16');
    } else {
       res.send ('We are closed');
     } 
    next();
  }
 
  
 
   module.exports = {addDate};